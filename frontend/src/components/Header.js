import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import InputBlock from './common/Input';
import SearchBox from './common/SearchBox';
import DropDownButton from './common/DropdownButton';
import Button from './common/Button';

// 헤더 사이즈
const HeaderHeight = '170px';

const HeaderTop = styled.div`
  background-color: black;
  float: up;
  height: 20px;
`;

const MainContainer = styled.div`
  height: ${HeaderHeight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #ffffff;
  border-bottom: 1px solid black;
`;
const MenuContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 0px;
`;

const LogoContainer = styled.div`
  margin-top: 20px;
  float: left;
  padding: 20px;
  img {
    width: 100px;

    vertical-align: bottom;
  }
`;

const SearchContainer = styled.div`
  margin-top: 20px;
`;

const SLink = styled(NavLink)`
  list-style-type: none;
  color: black;
  float: left;
  line-height: 55px;
  vertical-align: middle;
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
  text-decoration: none !important;
  &:hover {
    background-color: #feebb6;
  }
  &.active {
    font-weight: 600;
    background-color: #feebb6;
    float: left;
    line-height: 55px;
    vertical-align: middle;
    text-align: center;
    padding-left: 2em;
    padding-right: 2em;
    color: black;
    text-decoration: none !important;
  }
`;

const SearchOptionContainer = styled.div`
  float: left;
`;

const SortOptionContainer = styled.div`
  float: left;
`;

const OptionContainer = styled.div`
  position: fixed;
  top: 130px;
  left: 650px;
`;

const AirContainer = styled.div`
  height: ${HeaderHeight};
`;

const Header = () => {
  const [setQuery] = useState('');
  const history = useHistory();
  const onMainClick = () => {
    setQuery('');
    history.push('');
  };

  return (
    <>
      <MainContainer>
        <HeaderTop />
        <LogoContainer onClick={onMainClick}>로고</LogoContainer>
        <SearchContainer>
          <DropDownButton
            color="blue"
            float="left"
            fontsize="20px"
            height="34px"
          >
            전체
          </DropDownButton>
          <InputBlock color="blue" size="14px" float="left" width="400px">
            <input />
          </InputBlock>
          <SearchBox color="blue" size="50px" />
        </SearchContainer>
        <MenuContainer>
          <ul>
            <SLink activeClassName="active" to="categori0">
              전체
            </SLink>
            <SLink to="/categori1">개인</SLink>
            <SLink to="/categori2">부서</SLink>
          </ul>
        </MenuContainer>
        <OptionContainer>
          <SearchOptionContainer>
            <Button color="white">고급검색</Button>
          </SearchOptionContainer>
          <SortOptionContainer>
            <DropDownButton
              color="white"
              width="80px"
              fontsize="15px"
              height="28px"
            >
              정렬
            </DropDownButton>
          </SortOptionContainer>
        </OptionContainer>
      </MainContainer>
      <AirContainer />
    </>
  );
};
export default Header;

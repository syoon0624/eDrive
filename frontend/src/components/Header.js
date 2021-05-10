import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import InputBlock from './common/Input';
import DropDownButton from './common/DropdownButton';
import Button from './common/Button';
import Modal from './SearchOptionModal';
import palette from '../lib/styles/palette';

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
  background-color: white;
  border-bottom: 1px solid ${palette.gray4};
`;
const MenuContainer = styled.div`
  position: absolute;
  top: 96px;
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
    background-color: ${palette.gray4};
    border-bottom: 3px solid ${palette.gray4};
  }
  &.active {
    font-weight: 600;
    border-bottom: 3px solid ${palette.gray6};
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
const DropDownWrap = styled.div``;
const SearchOptionContainer = styled.div`
  float: left;
`;

const SortOptionContainer = styled.div`
  float: left;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 129px;
  left: 650px;
`;

const UserContainer = styled.div`
  position: fixed;
  top: 35px;
  right: 0;
  padding-right: 20px;
`;

const AirContainer = styled.div`
  height: ${HeaderHeight};
`;

const DropDownContainer = styled.div`
  flex-direction: column;
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const history = useHistory();
  const onMainClick = () => {
    history.push('');
  };
  return (
    <>
      <MainContainer>
        <HeaderTop />
        <LogoContainer onClick={onMainClick}>로고</LogoContainer>
        <SearchContainer>
          <DropDownContainer>
            <DropDownWrap>
              <DropDownButton
                color="blue"
                float="left"
                fontsize="20px"
                height="50px"
                options={[
                  { id: 1, name: '전체' },
                  { id: 2, name: '개인' },
                  { id: 3, name: '부서' },
                ]}
              />
            </DropDownWrap>
          </DropDownContainer>
          <InputBlock color="blue" fontsize="20px" width="850px" display="">
            <input />
          </InputBlock>
        </SearchContainer>
        <MenuContainer>
          <ul>
            <SLink activeClassName="active" to="/search">
              전체
            </SLink>
            <SLink to="/search_categori1">개인</SLink>
            <SLink to="/search_categori2">부서</SLink>
          </ul>
        </MenuContainer>
        <OptionContainer>
          <SearchOptionContainer onClick={openModal}>
            <Button color="white">고급 검색</Button>
          </SearchOptionContainer>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <SortOptionContainer>
            <DropDownButton
              color="white"
              width="85px"
              fontsize="16px"
              height="38px"
              title="정렬"
              options={[
                { id: 0, name: '정렬' },
                { id: 1, name: '날짜빠른순' },
                { id: 2, name: '크기높은순' },
                { id: 3, name: '크기낮은순' },
              ]}
            />
          </SortOptionContainer>
        </OptionContainer>
        <UserContainer>
          <Button color="white" width="100px" height="50px" fontsize="20px">
            사용자 님
          </Button>
        </UserContainer>
      </MainContainer>
      <AirContainer />
    </>
  );
};
export default Header;

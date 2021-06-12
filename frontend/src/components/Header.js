import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
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
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 1%;
  img {
    width: 130px;

    vertical-align: bottom;
  }
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 70%;
  position: relative;
  margin-top: 20px;
`;

const SLink = styled(NavLink)`
  list-style-type: none;
  color: black;
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
const SearchOptionContainer = styled.div``;

const SortOptionContainer = styled.div``;

const OptionContainer = styled.div`
  position: absolute;
  display: flex;
  top: 132px;
  left: 750px;
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

const DropDownContainer = styled.div``;

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
        <SearchContainer>
          <LogoContainer onClick={onMainClick}>
            <img src="eDrive_logo_v2.png" alt="" />
          </LogoContainer>
          <DropDownContainer>
            <DropDownWrap>
              <DropDownButton
                menuPosition={{ top: 40 }}
                size={100}
                color="blue"
                float="left"
                fontsize="20px"
                height="50px"
                options={[{ id: 1, name: '전체' }]}
              />
            </DropDownWrap>
          </DropDownContainer>
          <InputBlock color="blue" fontsize="20px" width="70%" display />
        </SearchContainer>
        <MenuContainer>
          <ul>
            <SLink activeClassName="active" to="/search">
              전체
            </SLink>
          </ul>
        </MenuContainer>
        <OptionContainer>
          <SortOptionContainer>
            <DropDownButton
              color="white"
              width="100px"
              fontsize="15px"
              height="36px"
              title="정렬(기본)"
              menuPosition={{ top: 29 }}
              size="100"
              options={[
                { id: 0, name: '정렬(기본)' },
                { id: 1, name: '날짜빠른순' },
                { id: 2, name: '크기높은순' },
                { id: 3, name: '크기낮은순' },
              ]}
            />{' '}
          </SortOptionContainer>
          <SearchOptionContainer onClick={openModal}>
            <Button color="gray" size="md" icon={<FaSearch />}>
              고급 검색
            </Button>
          </SearchOptionContainer>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </OptionContainer>
        <UserContainer>
          <Button color="blue" width="100px" height="50px" fontsize="20px">
            사용자 님
          </Button>
        </UserContainer>
      </MainContainer>
      <AirContainer />
    </>
  );
};
export default Header;

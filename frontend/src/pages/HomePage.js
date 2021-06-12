import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import DropDownButton from '../components/common/DropdownButton';
import Input from '../components/common/Input';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoWrap = styled.div`
  display: flex;
  margin-top: 11%;
  height: 30vh;
  align-items: center;
  justify-content: center;
`;

const SearchBlock = styled.div`
  display: inline-block;
  width: 100%;
  margin-left: 23%;
`;
const LoginButtonBlock = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const SLink = styled(Link)`
  text-decoration: none !important;
`;

const HomePage = () => {
  return (
    <Container>
      <LogoWrap>
        <img src="eDrive_logo.png" alt="" />
      </LogoWrap>
      <Main>
        <SearchBlock>
          <DropDownButton
            fontsize="20px"
            height="50px"
            options={[
              { id: 1, name: '전체' },
              { id: 2, name: '개인' },
              { id: 3, name: '부서' },
            ]}
            float="left"
          />
          <Input color="blue" paddingsize="10px" width="700px" display />
        </SearchBlock>

        {/* Todo : 로그인 했을 경우 로그인 버튼 숨기기 */}
        <LoginButtonBlock>
          <SLink to="/login">
            <Button>로그인</Button>
          </SLink>
        </LoginButtonBlock>
      </Main>
    </Container>
  );
};

export default HomePage;

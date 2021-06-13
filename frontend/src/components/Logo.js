import React from 'react';
import styled from 'styled-components';

const LogoWrap = styled.div`
  display: flex;
  margin-top: 11%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

function Logo() {
  return (
    <LogoWrap>
      <img src="eDrive_logo.png" alt="" />
    </LogoWrap>
  );
}

export default Logo;

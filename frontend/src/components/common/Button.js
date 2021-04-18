import React from 'react';
import styled from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

const ButtonBlock = styled.button`
  width: 20%;
  background-color: ${props => buttonColorMap[props.color].background};
  &:hover {
    background-color: ${props => buttonColorMap[props.color].hoverBackground};
  }
  color: ${props => buttonColorMap[props.color].color};
  float: ${props => props.float || ''};
`;

const Button = ({ children, color, float }) => {
  return (
    <ButtonBlock color={color} float={float}>
      {children}
    </ButtonBlock>
  );
};

export default Button;

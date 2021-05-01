import React from 'react';
import styled from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

const ButtonBlock = styled.button`
  width: ${props => props.width || '80px'};
  height: ${props => props.height || '40px'};
  font-size: ${props => props.fontsize || '15px'};
  background-color: ${props => buttonColorMap[props.color].background};
  &:hover {
    background-color: ${props => buttonColorMap[props.color].hoverBackground};
  }
  color: ${props => buttonColorMap[props.color].color};
  float: ${props => props.float || ''};
  border-radius: 0.3em;
  cursor: pointer;
  border: 1px ${props => buttonColorMap[props.color].background};
`;

const Button = ({ children, color, float, width, height, fontsize }) => {
  return (
    <ButtonBlock
      color={color || 'blue'}
      float={float}
      width={width}
      height={height}
      fontsize={fontsize}
    >
      {children}
    </ButtonBlock>
  );
};

export default Button;

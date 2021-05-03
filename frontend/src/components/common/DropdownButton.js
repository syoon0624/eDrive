import React from 'react';
import styled from 'styled-components';
import { dropdownHeaderColorMap } from '../../lib/styles/palette';

const DropDownBlock = styled.div`
  margin: 0 auto;
  float: ${props => props.float || ''};
`;

const DropDownHeader = styled.button`
  margin-bottom: 0.8em;
  padding: 0.4em;
  width: ${props => props.width || '100px'};
  line-height: ${props => props.height || '30px'};
  padding-right: 30px;
  font-size: ${props => props.fontsize || '20px'};
  color: ${props => dropdownHeaderColorMap[props.color].color};
  background-color: ${props => dropdownHeaderColorMap[props.color].background};
  &:hover {
    background-color: ${props =>
      dropdownHeaderColorMap[props.color].hoverBackground};
  }
  border: 1px ${props => dropdownHeaderColorMap[props.color].background};
`;

const DropDown = ({ children, float, color, fontsize, width, height }) => {
  return (
    <DropDownBlock float={float} color={color}>
      <DropDownHeader
        color={color}
        fontsize={fontsize}
        width={width}
        height={height}
      >
        {children}
      </DropDownHeader>
    </DropDownBlock>
  );
};

export default DropDown;

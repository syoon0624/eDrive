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
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: ${props => props.size};
  border: 2px solid ${props => dropdownHeaderColorMap[props.color].borderColor};
  color: ${props => dropdownHeaderColorMap[props.color].color};
  background-color: ${props => dropdownHeaderColorMap[props.color].background};
  &:hover {
    background-color: ${props =>
      dropdownHeaderColorMap[props.color].hoverBackground};
  }
`;

const DropDown = ({ children, float, color, size }) => {
  return (
    <DropDownBlock float={float} color={color} size={size}>
      <DropDownHeader color={color} size={size}>
        {children}
      </DropDownHeader>
    </DropDownBlock>
  );
};

export default DropDown;

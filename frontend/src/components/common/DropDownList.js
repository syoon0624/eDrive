import React from 'react';
import styled from 'styled-components';
import { dropdownListColorMap } from '../../lib/styles/palette';

const DropDownListBlock = styled.div`
  float: ${props => props.float || ''};
  width: ${props => props.size || '40%'};
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background-color: ${props => dropdownListColorMap[props.color].background};
  border: 2px solid ${props => dropdownListColorMap[props.color].borderColor};
  box-sizing: border-box;
  color: ${props => dropdownListColorMap[props.color].color};
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.5em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding-left: 1em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #e5e5e5;
`;

const DropDown = ({ children, color, float, size }) => {
  return (
    <DropDownListBlock color={color} float={float} size={size}>
      <DropDownList color={color}>
        <ListItem>{children}</ListItem>
      </DropDownList>
    </DropDownListBlock>
  );
};

export default DropDown;

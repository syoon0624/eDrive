import React from 'react';
import styled from 'styled-components';
import { dropdownHeaderColorMap } from '../../lib/styles/palette';

const DropDownBlock = styled.div`
  margin: 0 auto;
  float: ${props => props.float || ''};
`;
const DropDownHeader = styled.select`
  margin-bottom: 0.8em;
  padding: 0.4em;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '30px'};
  padding-right: 30px;
  font-size: ${props => props.fontsize || '20px'};
  cursor: pointer;
  color: ${props => dropdownHeaderColorMap[props.color].color};
  background-color: ${props => dropdownHeaderColorMap[props.color].background};
  &:hover {
    background-color: ${props =>
      dropdownHeaderColorMap[props.color].hoverBackground};
  }
  border: 1px ${props => dropdownHeaderColorMap[props.color].background};

  option {
    color: blue;
    background-color: blue;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const DropDown = ({
  options,
  float,
  color = 'blue',
  fontsize,
  width,
  height,
}) => {
  return (
    <DropDownBlock float={float} color={color}>
      <DropDownHeader
        options={options}
        color={color}
        fontsize={fontsize}
        width={width}
        height={height}
      >
        {options.map(friend => (
          <option value={friend.id}>{friend.name}</option>
        ))}
      </DropDownHeader>
    </DropDownBlock>
  );
};

export default DropDown;

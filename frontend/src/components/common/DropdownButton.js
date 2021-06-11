import React, { useState, useEffect } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Menu, MenuItem } from '@mantine/core';
import styled from 'styled-components';
import { dropdownHeaderColorMap } from '../../lib/styles/palette';

const DropDownBlock = styled.div`
  margin: 0 auto;
  float: ${props => props.float || ''};
`;
const DropDownHeader = styled(Menu)``;

const DropDownWrap = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => dropdownHeaderColorMap[props.color].color};
  background-color: ${props => dropdownHeaderColorMap[props.color].background};
  cursor: pointer;
  &:hover {
    background-color: ${props =>
      dropdownHeaderColorMap[props.color].hoverBackground};
  }
  margin-bottom: 0.8em;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '30px'};
  padding-right: 7%;
  font-size: ${props => props.fontsize || '20px'};
  border: 1px ${props => dropdownHeaderColorMap[props.color].background};
`;

const DropDown = ({
  options,
  float,
  color = 'blue',
  fontsize,
  width,
  height,
  title = '전체',
}) => {
  const [menuTitle, setTitle] = useState('');
  useEffect(() => {
    setTitle(title);
  }, []);
  return (
    <DropDownBlock float={float} color={color} title={title}>
      <DropDownHeader
        control={
          <DropDownWrap
            options={options}
            color={color}
            fontsize={fontsize}
            width={width}
            height={height}
          >
            {menuTitle}
            <TiArrowSortedDown />
          </DropDownWrap>
        }
      >
        {options.map(friend => (
          <MenuItem
            value={friend.id}
            onClick={() => {
              setTitle(friend.name);
            }}
          >
            {friend.name}
          </MenuItem>
        ))}
      </DropDownHeader>
    </DropDownBlock>
  );
};

export default DropDown;

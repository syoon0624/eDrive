import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { searchBoxColorMap } from '../../lib/styles/palette';

const ButtonBlock = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: ${props => props.size};
  height: ${props => props.size};
  display: ${props => props.display};
  background-color: ${props => searchBoxColorMap[props.color].background};
  &:hover {
    background-color: ${props =>
      searchBoxColorMap[props.color].hoverBackground};
  }
  color: ${props => searchBoxColorMap[props.color].color};
  float: ${props => props.float || ''};
  border: 1px ${props => searchBoxColorMap[props.color].background};
  cursor: pointer;
`;

const SFaSearch = styled(AiOutlineSearch)`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  margin-top: 2px;
`;
const SearchBox = ({ color, float, size = '1px', display = 'none' }) => {
  return (
    <ButtonBlock color={color} float={float} size={size} display={display}>
      <SFaSearch />
    </ButtonBlock>
  );
};

export default SearchBox;

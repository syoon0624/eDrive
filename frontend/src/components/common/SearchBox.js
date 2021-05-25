import React from 'react';
import styled from 'styled-components';
import { searchBoxColorMap } from '../../lib/styles/palette';

const ButtonBlock = styled.button`
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -3 30 30'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' fill='white'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
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

const SearchBox = ({ color, float, size = '1px', display = 'none' }) => {
  return (
    <ButtonBlock color={color} float={float} size={size} display={display} />
  );
};

export default SearchBox;

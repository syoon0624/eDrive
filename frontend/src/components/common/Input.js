import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';
import { inputColorMap } from '../../lib/styles/palette';

const InputBlock = styled.div`
  width: ${props => props.width};
  float: ${props => props.float || 'left'};
  height: ${props => props.height};
`;

const InputWrap = styled.div`
  padding-top: ${props => props.paddingsize};
  padding-left: 10px;
  width: 70%;
  height: 100%;
  color: ${props => inputColorMap[props.color].color};
  box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: ${props => props.size};
  border: 3px solid ${props => inputColorMap[props.color].borderColor};
  float: left;
`;
const SearchIconWrap = styled.div`
  float: left;
`;

const MyInput = ({
  color,
  paddingsize = '10px',
  float,
  width,
  height = '50px',
  placeholder = '내용을 입력해 주세요.',
  display,
  fontsize = '20px',
}) => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const search = useLocation();
  const name = search.search.substring(7);
  useEffect(() => {
    setQuery(name);
  }, []);

  return (
    <InputBlock
      color={color}
      size={paddingsize}
      float={float}
      width={width}
      placeholder={placeholder}
      display={display}
      height={height}
    >
      <InputWrap color={color} paddingsize={paddingsize} float={float}>
        <TextInput
          inputStyle={{
            fontSize: fontsize,
          }}
          variant="unstyled"
          placeholder={placeholder}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (query === '') {
                alert('검색어를 입력 해 주세요.');
                return;
              }
              const params = new URLSearchParams({ query });
              history.push(`search?${params.toString()}`);
            }
          }}
        />
      </InputWrap>
      <SearchIconWrap
        onClick={() => {
          const params = new URLSearchParams({ query });
          history.push(`search?${params.toString()}`);
        }}
      >
        <SearchBox color="blue" size="50px" display={display} />
      </SearchIconWrap>
    </InputBlock>
  );
};

export default MyInput;

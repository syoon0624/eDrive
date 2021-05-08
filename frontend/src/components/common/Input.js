import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SearchBox from './SearchBox';
import { inputColorMap } from '../../lib/styles/palette';

const InputBlock = styled.div`
  input {
    padding: ${props => props.size};
    padding-right: ${props => props.width};
    color: ${props => inputColorMap[props.color].color};
    box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
    border: 3px solid ${props => inputColorMap[props.color].borderColor};

    font-size: ${props => props.size};

    &::placeholder {
      color: ${props => inputColorMap[props.color].placeholder};
      text-transform: uppercase;
    }
    float: left;
  }
  float: ${props => props.float || ''};
`;
const SearchIconWrap = styled.div``;

const Input = ({
  color,
  size,
  float,
  width,
  placeholder = '내용을 입력해 주세요.',
  display,
}) => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  return (
    <InputBlock
      color={color}
      size={size}
      float={float}
      width={width}
      placeholder={placeholder}
      display={display}
    >
      <input
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
            history.push(`?${params.toString()}`);
          }
        }}
      />
      <SearchIconWrap
        onClick={() => {
          const params = new URLSearchParams({ query });
          history.push(`?${params.toString()}`);
        }}
      >
        <SearchBox color="blue" size="50px" display={display} />
      </SearchIconWrap>
    </InputBlock>
  );
};

export default Input;

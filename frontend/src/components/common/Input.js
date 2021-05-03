import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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
  }
  float: ${props => props.float || ''};
`;

const Input = ({ color, size, float, width }) => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  return (
    <InputBlock color={color} size={size} float={float} width={width}>
      <input
        placeholder="내용을 입력해 주세요."
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
    </InputBlock>
  );
};

export default Input;

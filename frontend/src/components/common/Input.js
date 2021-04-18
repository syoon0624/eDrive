import React from 'react';
import styled from 'styled-components';
import { inputColorMap } from '../../lib/styles/palette';

const InputBlock = styled.div`
  input {
    padding: 20px;
    padding-right: 200px;
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

const Input = ({ children, color, size, float }) => {
  return (
    <InputBlock color={color} size={size} float={float}>
      <input placeholder={children} color={color} />
    </InputBlock>
  );
};

export default Input;

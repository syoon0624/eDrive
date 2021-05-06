import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Button from './common/Button';

const FormBlock = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  border: 1px solid #dadce0;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  input {
    width: 93%;
    padding: 0.625rem 10px;
    font-size: 1rem;
    letter-spacing: 0.062rem;
    margin-bottom: 1.875rem;
    border: 1px solid #ccc;
    background: transparent;
    border-radius: 4px;
  }
  .label {
    position: absolute;
    top: 0;
    left: 10px;
    padding: 0.625rem 0;
    font-size: 1rem;
    color: grey;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ .label,
  input:valid ~ .label,
  input:not([value='']) ~ .label {
    top: -1.125rem;
    left: 10px;
    color: ${palette.blue6};
    font-size: 0.75rem;
    background-color: #fff;
    height: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }

  input:focus {
    outline: none;
    border: 2px solid ${palette.blue6};
  }
  input[type='submit'] {
    border: none;
    outline: none;
    color: #fff;
    background-color: ${palette.blue6};
    padding: 0.625rem 1.25rem;
    cursor: pointer;
    border-radius: 0.312rem;
    font-size: 1rem;
    float: right;
  }

  input[type='submit']:hover {
    background-color: ${palette.blue6};
    box-shadow: 0 1px 1px 0 rgba(66, 133, 244, 0.45),
      0 1px 3px 1px rgba(66, 133, 244, 0.3);
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  a {
    color: ${palette.blue6};
    text-decoration: none;
  }
`;

const Login = () => {
  return (
    <FormBlock>
      <div>Logo</div>
      <h1>로그인</h1>
      <InputBox>
        <input type="email" id="email" name="email" value="" />
        <div className="label">Email</div>
      </InputBox>
      <InputBox>
        <input type="text" name="text" value="" />
        <div className="label">Password</div>
      </InputBox>
      <ButtonBlock>
        <Link to="/">홈으로</Link>
        <Button color="blue">로그인</Button>
      </ButtonBlock>
    </FormBlock>
  );
};

export default Login;

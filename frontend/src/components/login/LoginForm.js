import React from 'react';
import { TextInput, Button, Container, CONTAINER_SIZES } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Logo from '../Logo';

const LoginFormBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const FormBlock = styled.div`
  padding-top: 2rem;
`;
const LoginForm = () => {
  const { onSubmit, errors, values, setFieldValue } = useForm({
    initialValues: {
      email: '',
      password: '',
      termOfService: false,
    },
    validationRules: {
      email: value => /^[^\s@]+@[^\s@]+$/.test(value),
    },
  });
  return (
    <LoginFormBlock>
      <Container
        size={CONTAINER_SIZES.xs}
        padding={20}
        style={{
          display: 'block',
          width: CONTAINER_SIZES.xs,
          padding: '5rem',
          border: `1px ${palette.gray5} solid`,
          borderRadius: '5px',
        }}
      >
        <Logo />
        <FormBlock>
          <TextInput
            required
            label="Email"
            placeholder="example@example.com"
            error={errors.email && 'Please specify valid email'}
            value={values.email}
            onChange={event =>
              setFieldValue('email', event.currentTarget.value)
            }
          />
          <TextInput
            required
            label="Password"
            placeholder="Your password"
            value={values.password}
            type="password"
            style={{ marginTop: '2rem' }}
            onChange={event =>
              setFieldValue('password', event.currentTarget.value)
            }
          />
          <ButtonBlock>
            <Link to="/">
              <Button variant="outline">홈으로</Button>
            </Link>
            <Button type="button" onClick={onSubmit}>
              로그인
            </Button>
          </ButtonBlock>
        </FormBlock>
      </Container>
    </LoginFormBlock>
  );
};
export default LoginForm;

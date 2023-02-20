import React from 'react';

import styled from 'styled-components';

import { useForm, SubmitHandler } from 'react-hook-form';

import useLogin from '../../hooks/use-login';

import InputId from './InputId';
import InputPassword from './InputPassword';

export type FormInputs = {
  id: string;
  password: string;
};

const LoginForm = () => {
  const { 
    handleSubmit, 
    control, 
    formState: { isValid } 
  } = useForm<FormInputs>({ mode: 'onBlur' });
  
  const login = useLogin({ redirectUrl: '/' });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    login(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputId
        control={control}
      />
      <Gap />
      <InputPassword
        control={control}
      />
      <LoginButton
        disabled={!isValid}
        type='submit'
      >
        로그인
      </LoginButton>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const Gap = styled.div`
  height: 16px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #e2e2ea;
  cursor: default;
  }
`;

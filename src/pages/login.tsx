import React from 'react';

import styled from 'styled-components';

import Link from 'next/link';
import type { NextPage } from 'next';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import TextField from '../components/TextField';

import useUser from '../hooks/use-user';
import useLogin from '../hooks/use-login';
import useLogout from '../hooks/use-logout';

type FormInputs = {
  id: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const { 
    handleSubmit, 
    control, 
    formState: { isValid } 
  } = useForm<FormInputs>({ mode: 'onBlur' });
  
  const login = useLogin({ redirectUrl: '/' });
  const logout = useLogout();

  const onSubmit: SubmitHandler<FormInputs> = data => {
    login(data);
  };
  
  const { user } = useUser();

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        {user ? 
          (
            <p onClick={logout}>logout</p>
          )
          :
          (
            <Link href='/login'>
              <p>login</p>
            </Link>
          )
        }
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="id"
          defaultValue=""
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9]{5,30}$/,
          }}
          render={({
            field: { ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              id="id"
              label="아이디"
              type="text"
              maxLength={30}
              inputRef={ref}
              error={!!error}
              errorMessage="올바른 아이디 형식으로 입력해주세요."
              {...rest}
            />
          )}
        />
        <Gap />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{
            required: true,
            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/,
          }}
          render={({
            field: { ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              id="password"
              label="비밀번호"
              type="password"
              maxLength={30}
              error={!!error}
              errorMessage="올바른 비밀번호 형식으로 입력해주세요."
              inputRef={ref}
              {...rest}
            />
          )}
        />
        <LoginButton disabled={!isValid} type='submit'>로그인</LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

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

  &:disabled {
    background-color: #e2e2ea;
  }
`;

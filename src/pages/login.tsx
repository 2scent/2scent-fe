import React from 'react';

import type { NextPage } from 'next';

import LoginForm from '../components/login/LoginForm';

const LoginPage: NextPage = () => {
  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default LoginPage;

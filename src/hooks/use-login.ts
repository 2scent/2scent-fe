import { useRouter } from 'next/router';

import { User } from '../types/user';

import axiosInstance from '../axios-instance';

import useUser from './use-user';

type UseLoginProps = {
  redirectUrl?: string;
};

type LoginData = {
  id: string;
  password: string;
};

type LoginResponse = {
  data: {
    accessToken: string;
    user: User
  };
};

const useLogin = ({ redirectUrl }: UseLoginProps = {}) => {
  const router = useRouter();

  const { updateUser } = useUser();
  
  const login = async (loginData: LoginData) => {
    const { data: { data } } = await axiosInstance.post<LoginResponse>(
      '/login',
      loginData,
    );
    
    updateUser(data.user);

    if (redirectUrl) {
      router.push(redirectUrl);
    }
  }


  return login;
};

export default useLogin;

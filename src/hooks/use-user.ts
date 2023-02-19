import { useQuery, useQueryClient } from '@tanstack/react-query';

import { User } from '../types/user';

import axiosInstance from '../axios-instance';

type FetchUserResponse = {
  data: {
    user: User;
  };
};

const fetchUser = async (user: User | null | undefined): Promise<User | null> => {
  if (!user) return null;

  const { data: { data } } = await axiosInstance.get<FetchUserResponse>(`/users/${user.id}`);

  return data.user;
};

type UseUser = {
  user?: User;
  updateUser: (user: User) => void;
  clearUser: () => void;
};

const useUser = (): UseUser => {
  const queryClient = useQueryClient();

  const { data: user } = useQuery<User>(
    ['user'],
    () => fetchUser(user),
  );
  
  const updateUser = (newUser: User) => {
    queryClient.setQueryData(['user'], newUser);
  };

  const clearUser = () => {
    queryClient.setQueryData(['user'], null);
  };

  return { user, updateUser, clearUser };
}

export default useUser;

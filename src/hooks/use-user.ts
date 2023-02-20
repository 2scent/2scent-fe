import { useAtom } from 'jotai'

import { User } from '../types/user';

import { userAtom } from '../atoms/user';

type UseUser = {
  user?: User;
  updateUser: (user: User) => void;
  clearUser: () => void;
};

const useUser = (): UseUser => {
  const [user, setUser] = useAtom(userAtom);

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const clearUser = () => {
    setUser(undefined);
  };

  return { user, updateUser, clearUser };
}

export default useUser;

import useUser from './use-user';

const useLogout = () => {
  const { clearUser } = useUser();
  
  const logout = () => {
    clearUser();
  }

  return logout;
};

export default useLogout;

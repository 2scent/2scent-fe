import React from 'react';

import styled from 'styled-components';

import Link from 'next/link';

import useUser from '../hooks/use-user';
import useLogout from '../hooks/use-logout';

const Header = () => {
  const logout = useLogout();

  const { user } = useUser();

  return (
    <Container>
      <Link href='/'>
        <Title>HAUS</Title>
      </Link>
      {user ? 
        (
          <div>
            <p>{user.name}</p>
            <p onClick={logout}>logout</p>
          </div>
        )
        :
        (
          <Link href='/login'>
            <p>login</p>
          </Link>
        )
      }
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

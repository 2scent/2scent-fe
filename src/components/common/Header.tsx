import React from 'react';

import styled from 'styled-components';

import Link from 'next/link';

import useUser from '../../hooks/use-user';
import useLogout from '../../hooks/use-logout';

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
            <Button onClick={logout}>logout</Button>
          </div>
        )
        :
        (
          <Link href='/login'>
            <Button>login</Button>
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

const Title = styled.p`
  font-size: 48px;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
`;

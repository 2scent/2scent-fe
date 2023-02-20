import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { ErrorBoundary } from 'react-error-boundary';

import Header from '../components/Header';
import ProductListContainer from '../components/ProductListContainer';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage =  Number(page ?? 1);

  return (
    <>
      <Header />
      <Container>
        <ErrorBoundary
          FallbackComponent={() => <p>존재하지 않는 페이지입니다.</p>}
        >
          <ProductListContainer
            page={currentPage}
            onClickProduct={({ id }) => router.push(`/products/${id}`)}
            setPage={(page) => router.push(`${router.basePath}?page=${page}`)}
          />
        </ErrorBoundary>
      </Container>
    </>
  );
};

export default HomePage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;

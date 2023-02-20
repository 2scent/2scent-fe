import React from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import styled from 'styled-components';

import { ErrorBoundary } from 'react-error-boundary';

import { fetchProducts } from '../hooks/use-products';

import ProductListContainer from '../components/products/ProductListContainer';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage =  Number(page ?? 1);

  return (
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
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query.page ?? 1);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products', page], () => fetchProducts({ page }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;

import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import useProducts from '../hooks/use-products';

const pageSize = 10;

const HomePage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const currentPage =  Number(page ?? 1);

  const { data } = useProducts({ page: currentPage, pageSize });

  if (!data) return <p>로딩 중</p>;
  
  const { products, totalCount } = data;

  return (
    <>
      <Header />
      <Container>
        <ProductList
          products={products}
          onClick={({ id }) => router.push(`/products/${id}`)}
        />
        <Pagination
          currentPage={currentPage}
          totalItemsCount={totalCount}
          pageSize={pageSize}
          setPage={(page) => router.push(`${router.basePath}?page=${page}`)}
        />
      </Container>
    </>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;

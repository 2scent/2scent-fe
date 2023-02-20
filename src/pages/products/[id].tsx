import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import AsyncBoundaryWithQuery from '../../components/AsyncBoundaryWithQuery';
import ProductDetailContainer from '../../components/ProductDetailContainer';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id as string ?? '';

  return (
    <>
      <Header />
      <AsyncBoundaryWithQuery
          pendingFallback={<p>로딩 중</p>}
          rejectedFallback={() => <p>존재하지 않는 페이지입니다.</p>}
        >
        <ProductDetailContainer
          productId={productId}
        />
      </AsyncBoundaryWithQuery>
    </>
  );
};

export default ProductDetailPage;

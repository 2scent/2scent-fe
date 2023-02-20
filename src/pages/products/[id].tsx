import React from 'react';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import { ErrorBoundary } from 'react-error-boundary';

import { arrayRange } from '../../utils';

import { fetchProduct } from '../../hooks/use-product';

import ProductDetailContainer from '../../components/product/ProductDetailContainer';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id as string ?? '';

  return (
    <ErrorBoundary
      FallbackComponent={() => <p>존재하지 않는 페이지입니다.</p>}
    >
      <ProductDetailContainer
        productId={productId}
      />
    </ErrorBoundary>
  );
};

export default ProductDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params?.id as string ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['product', productId], () => fetchProduct({ productId }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = arrayRange(1, 10).map((i) => ({ params: { id: String(i) }}));

  return {
    paths,
    fallback: 'blocking',
  };
}

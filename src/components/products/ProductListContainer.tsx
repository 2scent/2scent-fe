import React from 'react';

import { Product } from '../../types/product';

import useProducts from '../../hooks/use-products';

import Pagination from '../common/Pagination';

import ProductList from './ProductList';

const pageSize = 10;

type ProductListContainerProps = {
  page: number;
  onClickProduct: (product: Product) => void;
  setPage: (page: number) => void;
};

const ProductListContainer = ({ page, onClickProduct, setPage }: ProductListContainerProps) => {
  const { data } = useProducts({ page, pageSize });

  if (!data) return <p>로딩 중</p>;

  const { products, totalCount } = data;

  return (
    <>
      <ProductList
        products={products}
        onClick={onClickProduct}
      />
      <Pagination
        currentPage={page}
        totalItemsCount={totalCount}
        pageSize={pageSize}
        setPage={setPage}
      />
    </>
  );
}

export default ProductListContainer;

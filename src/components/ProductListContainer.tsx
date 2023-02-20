import React from 'react';

import { Product } from '../types/product';

import useProducts from '../hooks/use-products';

import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

const pageSize = 10;

type ProductListContainerProps = {
  page: number;
  onClickProduct: (product: Product) => void;
  setPage: (page: number) => void;
};

const ProductListContainer = ({ page, onClickProduct, setPage }: ProductListContainerProps) => {
  const { data } = useProducts({ page, pageSize });

  const { products, totalCount } = data!;

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

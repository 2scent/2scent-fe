import { useQuery } from '@tanstack/react-query';

import { Product } from '../types/product';

import axiosInstance from '../axios-instance';

type FetchProductProps = {
  productId: string;
};

type FetchProductResponse = {
  data: {
    product: Product;
  };
};

export const fetchProduct = async ({ productId }: FetchProductProps) => {
  const { data: { data: { product } } } = await axiosInstance.get<FetchProductResponse>(
    `/products/${productId}`,
  );

  return product;
};

const useProduct = ({ productId }: FetchProductProps) => {
  return useQuery(
    ['product', productId],
    () => fetchProduct({ productId }),
  );
}

export default useProduct;

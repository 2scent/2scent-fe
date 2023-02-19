import { useQuery } from '@tanstack/react-query';

import { Product } from '../types/product';

import axiosInstance from '../axios-instance';

type FetchProductsResponse = {
  data: {
    products: Product[];
    totalCount: number;
  };
};

const fetchProducts = async ({ page = 1, pageSize = 10 }) => {
  const { data: { data } } = await axiosInstance.get<FetchProductsResponse>(
    `/products?page=${page}&size=${pageSize}`,
  );

  return data;
};

const useProducts = ({ page = 1, pageSize = 10 }) => {
  return useQuery(
    ['products', page],
    () => fetchProducts({ page, pageSize }),
  );
};

export default useProducts;

import styled from 'styled-components';

import { Product } from '../types/product';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: Product[];
  onClick: (product: Product) => void;
};

const ProductList = ({ products, onClick }: ProductListProps) => (
  <Container>
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onClick={onClick}
      />
    ))}
  </Container>
);

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;

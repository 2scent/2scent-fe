import styled from 'styled-components';

import { Product } from '../../types/product';

type ProductItemProps = {
  product: Product;
  onClick: (product: Product) => void;
};

const ProductItem = ({ product, onClick }: ProductItemProps) => {
  const handleClick = () => onClick(product);

  const { name, thumbnail, price } = product;

  return (
    <Container onClick={handleClick}>
      <Thumbnail src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'} />
      <Name>{name}</Name>
      <Price>{price.toLocaleString()}원</Price>
    </Container>
  );
}

export default ProductItem;

const Container = styled.a`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;

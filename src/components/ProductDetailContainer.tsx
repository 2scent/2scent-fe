import React from 'react';

import styled from 'styled-components';

import useProduct from '../hooks/use-product';

type ProductDetailContainerProps = {
  productId: string;
};

const ProductDetailContainer = ({ productId }: ProductDetailContainerProps) => {
  const { data } = useProduct({ productId });

  const product = data!;
  
  return (
    <>
      <Thumbnail src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'} />
      <ProductInfoWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price.toLocaleString()}원</Price>
      </ProductInfoWrapper>
    </>
  );
};

export default ProductDetailContainer;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;

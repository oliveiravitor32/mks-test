import React from "react";
import {
  BuyButton,
  Container,
  ContainerWrapper,
  Image,
  ProductInfos,
} from "./style";
import Product from "../../interfaces/Product";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { photo, name, brand, price, description } = data;
  console.log(data);
  return (
    <Container>
      <Image src={photo} />
      <ProductInfos>
        <ContainerWrapper>
          <h2>
            {brand} <br /> {name}
          </h2>
          <span>R${price}</span>
        </ContainerWrapper>
        <p>{description}</p>
      </ProductInfos>
      <BuyButton>Comprar</BuyButton>
    </Container>
  );
};

export default ProductCard;

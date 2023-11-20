import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import {
  BuyButton,
  Container,
  ContainerWrapper,
  Image,
  ProductInfos,
} from "./style";
import Product from "../../interfaces/Product";
import formatCurrency from "../../utils/formatCurrency";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { photo, name, brand, price, description } = data;
  return (
    <Container>
      <Image src={photo} />
      <ProductInfos>
        <ContainerWrapper>
          <h2>
            {brand}&nbsp;{name}
          </h2>
          <span>{formatCurrency(price, "BRL")}</span>
        </ContainerWrapper>
        <p>{description}</p>
      </ProductInfos>
      <BuyButton>
        <FiShoppingBag />
        Comprar
      </BuyButton>
    </Container>
  );
};

export default ProductCard;

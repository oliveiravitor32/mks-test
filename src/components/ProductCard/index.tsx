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
import { useQueryClient } from "@tanstack/react-query";
import CartItemInterface from "../../interfaces/CartItemInterface";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const queryClient = useQueryClient();

  const { photo, name, brand, price, description } = data;

  async function handleBuyClick() {
    const updatedToCartItem: CartItemInterface = {
      ...data,
      qtd: 1,
    };

    await queryClient.setQueryData(["cart"], (oldData: CartItemInterface[]) => {
      const found = oldData.find((item) => (item.id == data.id ? item : ""));
      if (found != undefined) {
        const index = oldData.indexOf(found);
        oldData[index] = {
          ...oldData[index],
          qtd: oldData[index].qtd + 1,
        };
        queryClient.refetchQueries({
          queryKey: ["cart"],
          type: "active",
        });
        return oldData;
      }

      return [...oldData, updatedToCartItem];
    });
  }

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
      <BuyButton onClick={handleBuyClick}>
        <FiShoppingBag />
        Comprar
      </BuyButton>
    </Container>
  );
};

export default ProductCard;

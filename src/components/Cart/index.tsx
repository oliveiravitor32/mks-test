import CartItem from "../CartItem";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CloseButton,
  Container,
  ContainerWrapper,
  ItemsWrapper,
  FinalizePurchaseButton,
} from "./style";
import CartItemInterface from "../../interfaces/CartItemInterface";

const Cart = () => {
  const queryClient = useQueryClient();
  const [load, setLoad] = useState(false);

  type addCartItem = () => Promise<CartItemInterface[] | []>;

  const addItem: addCartItem = () => {
    setLoad(!load);
    const get: CartItemInterface[] | undefined = queryClient.getQueryData([
      "cart",
    ]);
    if (get! != undefined) {
      return Promise.resolve(get);
    }
    return Promise.resolve([]);
  };
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => addItem(),
  });

  return (
    <Container>
      <ContainerWrapper>
        <h2>
          Carrinho <br /> de compras
        </h2>
        <CloseButton>X</CloseButton>
      </ContainerWrapper>
      <ItemsWrapper>
        {data != undefined
          ? data.map!((item: CartItemInterface) => (
              <CartItem key={item.id} data={item} />
            ))
          : ""}
      </ItemsWrapper>
      :
      <ContainerWrapper>
        <p>Total:</p>
        <span>R$100</span>
      </ContainerWrapper>
      <FinalizePurchaseButton>Finalizar Compra</FinalizePurchaseButton>
    </Container>
  );
};

export default Cart;

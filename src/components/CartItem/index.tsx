import { useQueryClient } from "@tanstack/react-query";
import CartItemInterface from "../../interfaces/CartItemInterface";
import formatCurrency from "../../utils/formatCurrency";
import {
  Container,
  PriceAndQuantityWrapper,
  QuantityButtonWrapper,
} from "./style";

interface CardItemProps {
  data: CartItemInterface;
}

const CartItem: React.FC<CardItemProps> = ({ data }) => {
  const queryClient = useQueryClient();

  const { photo, name, brand, price, qtd } = data;

  function handleIncreaseAmount() {
    queryClient.setQueryData(["cart"], (oldData: CartItemInterface[]) => {
      const index = oldData.indexOf(data);
      console.log(data);
      oldData[index] = {
        ...oldData[index],
        qtd: oldData[index].qtd + 1,
      };

      queryClient.refetchQueries({
        queryKey: ["cart"],
        type: "active",
      });
    });
  }

  function handleDecreaseAmount() {
    queryClient.setQueryData(["cart"], (oldData: CartItemInterface[]) => {
      const index = oldData.indexOf(data);
      oldData[index] = {
        ...oldData[index],
        qtd: oldData[index].qtd - 1,
      };

      if (oldData[index].qtd <= 0) {
        oldData.splice(index, 1);
      }

      queryClient.refetchQueries({
        queryKey: ["cart"],
        type: "active",
      });
    });
  }

  return (
    <Container>
      <img src={photo} alt="" />
      <h2>
        {brand} &nbsp; {name}
      </h2>
      <PriceAndQuantityWrapper>
        <QuantityButtonWrapper>
          <button onClick={handleDecreaseAmount}>-</button>
          <span>{qtd}</span>
          <button onClick={handleIncreaseAmount}>+</button>
        </QuantityButtonWrapper>
        <span>{formatCurrency(price, "BRL")}</span>
      </PriceAndQuantityWrapper>
    </Container>
  );
};

export default CartItem;

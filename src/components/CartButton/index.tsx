import { Container } from "./style";
import { PiShoppingCartFill } from "react-icons/pi";

const CartButton = () => {
  return (
    <Container>
      <PiShoppingCartFill />
      <span>0</span>
    </Container>
  );
};

export default CartButton;

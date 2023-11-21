import {
  CloseButton,
  Container,
  ContainerWrapper,
  ItemsWrapper,
  FinalizePurchaseButton,
} from "./style";

const Cart = () => {
  return (
    <Container>
      <ContainerWrapper>
        <h2>Carrinho de compras</h2>
        <CloseButton>x</CloseButton>
      </ContainerWrapper>
      <ItemsWrapper />
      <ContainerWrapper>
        <p>Total</p>
        <span>R$100</span>
      </ContainerWrapper>
      <FinalizePurchaseButton>Finalizar Compra</FinalizePurchaseButton>
    </Container>
  );
};

export default Cart;

import CartButton from "../CartButton";
import { Container, ContainerLogo } from "./style";

const Header = () => {
  return (
    <Container>
      <ContainerLogo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </ContainerLogo>
      <CartButton />
    </Container>
  );
};

export default Header;

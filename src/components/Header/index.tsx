import { Container, ContainerLogo, CountCartItems } from "./style";

const Header = () => {
  return (
    <Container>
      <ContainerLogo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </ContainerLogo>
      <CountCartItems />
    </Container>
  );
};

export default Header;

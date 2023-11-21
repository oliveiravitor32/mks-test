import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Container from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Products />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

import Container from "./style";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../../services/api/fetchProducts";
import Query from "../../interfaces/Query";
import ProductCard from "../ProductCard";
import Loading from "../Loading";

const Products = () => {
  const query: Query = {
    page: 1,
    rows: 5,
    sortBy: "name",
    orderBy: "DESC",
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(query),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container>
        <div>Erro ao carregar produtos</div>
      </Container>
    );
  }

  return (
    <Container>
      {data!.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </Container>
  );
};

export default Products;

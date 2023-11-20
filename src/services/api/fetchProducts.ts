import Product from "../../interfaces/Product";
import Query from "../../interfaces/Query";

type GetProducts = (query: Query) => Promise<Product[]>;

const fetchProducts: GetProducts = async ({
  page,
  rows,
  sortBy,
  orderBy,
}: Query) => {
  const response = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );
  const data = await response.json();

  return data.products;
};

export default fetchProducts;

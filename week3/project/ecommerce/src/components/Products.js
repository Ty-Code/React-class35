import Product from './Product';
import useFetch from '../hooks/useFetch';

function Products({ selectedCategory }) {
  let url;
  selectedCategory === ''
    ? (url = 'https://fakestoreapi.com/products/')
    : (url = `https://fakestoreapi.com/products/category/${selectedCategory}`);

  const { data: products, isLoading, isError } = useFetch(url);

  return (
    <ul className="products">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        products &&
        products.map((product) => (
          <Product id={product.id} title={product.title} image={product.image} key={product.id} />
        ))
      )}
    </ul>
  );
}

export default Products;

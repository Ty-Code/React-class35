import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Product from './Product';

function Products({
  selectedCategory,
  checkLoading: [isLoading, setIsLoading],
  checkError: [isError, setIsError],
}) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const productList = await response.json();
        setProducts(productList);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    async function getFilteredProducts() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const filteredProductList = await response.json();
        setProducts(filteredProductList);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    selectedCategory === '' ? getProducts() : getFilteredProducts();
  }, [selectedCategory]);

  function navigateToProduct(id) {
    navigate(`/products/${id}`);
  }

  return (
    <ul className="products">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            key={product.id}
            navigate={navigateToProduct}
          />
        ))
      )}
    </ul>
  );
}

export default Products;

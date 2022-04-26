import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Product from './Product';

function Products({ selectedCategory, checkLoading: [isLoading, SetIsLoading] }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      const productList = await response.json();
      setProducts(productList);
      SetIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFilteredProducts() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      const filteredProductList = await response.json();
      setProducts(filteredProductList);
      SetIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    selectedCategory === '' ? getProducts() : getFilteredProducts();
  }, [products]);

  function navigateToProduct(id) {
    navigate(`/products/${id}`);
  }

  return (
    <ul className="products">
      {isLoading ? (
        <span>Loading...</span>
      ) : products ? (
        products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            key={product.id}
            navigate={navigateToProduct}
          />
        ))
      ) : (
        <span>BAD REQUEST!</span>
      )}
    </ul>
  );
}

export default Products;

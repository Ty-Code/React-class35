import { useContext, useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import FavoritesContext from '../context/FavoritesContext';
import Product from '../components/Product';

function FavoritesPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { favoriteIds } = useContext(FavoritesContext);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await Promise.all(
          favoriteIds.map(async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const result = await response.json();
            return result;
          })
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    loadData();
  }, [favoriteIds]);

  return (
    <div className="main">
      <SubHeader />
      <ul className="products">
        {isError ? (
          <span>BAD REQUEST!</span>
        ) : isLoading ? (
          <span>Loading...</span>
        ) : products.length ? (
          products.map((product) => (
            <Product id={product.id} title={product.title} image={product.image} key={product.id} />
          ))
        ) : (
          <div>No favorites!</div>
        )}
      </ul>
    </div>
  );
}

export default FavoritesPage;

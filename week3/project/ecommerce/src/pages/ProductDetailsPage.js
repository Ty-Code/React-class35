import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetailsPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <div className="product-details">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        product && (
          <>
            <h2>{product.title}</h2>
            <div className="product-details--container">
              <p className="product-details--text">{product.description}</p>
              <figure className="product-details--image-container">
                <img className="product-details--image" src={product.image} alt={product.title} />
              </figure>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default ProductDetailsPage;

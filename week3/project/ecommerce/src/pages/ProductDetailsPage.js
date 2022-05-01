import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function getProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const selectedProduct = await response.json();
      setProduct(selectedProduct);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  });

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <div className="product-details--container">
        <p className="product-details--text">{product.description}</p>
        <figure className="product-details--image-container">
          <img className="product-details--image" src={product.image} alt={product.title} />
        </figure>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

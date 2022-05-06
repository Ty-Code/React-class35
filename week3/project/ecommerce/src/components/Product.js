import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext.js';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

function Product({ title, image, id }) {
  const navigate = useNavigate();

  const { favoriteIds, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const favoriteProduct = favoriteIds.find((favoriteId) => favoriteId === id);

  return (
    <li className="products--item">
      <div className="product" onClick={() => navigate(`/products/${id}`)}>
        <div className="product--image-container">
          <img
            className="product--image-favorite"
            src={favoriteProduct ? heartSolid : heartRegular}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              favoriteProduct ? removeFromFavorites(id) : addToFavorites(id);
            }}
            alt={title}
          />

          <img className="product--image" src={image} alt="product_image" />
        </div>

        <span className="product--title">{title}</span>
      </div>
    </li>
  );
}

export default Product;

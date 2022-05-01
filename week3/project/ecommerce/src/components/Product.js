function Product({ title, image, id, navigate }) {
  return (
    <li className="products--item">
      <div className="product" onClick={() => navigate(id)}>
        <img className="product--image" src={image} alt="product_image" />
        <span className="product--title">{title}</span>
      </div>
    </li>
  );
}

export default Product;

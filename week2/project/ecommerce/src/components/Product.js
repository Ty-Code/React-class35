export default function Product({ title, image }) {
  return (
    <li className="products--item">
      <div className="product">
        <img className="product--image" src={image} alt="product_image" />
        <span className="product--title">{title}</span>
      </div>
    </li>
  );
}

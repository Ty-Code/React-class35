import Product from "./Product";

export default function Products({ displayedProducts }) {
  return (
    <ul className="products">
      {displayedProducts.map((product, index) => (
        <Product title={product.title} image={product.image} key={index} />
      ))}
    </ul>
  );
}
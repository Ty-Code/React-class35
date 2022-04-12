import Category from './Category';

export default function Categories({ categories, filterProducts }) {
  return (
    <div className="categories">
      {categories.map((categoryName, index) => (
        <Category title={categoryName} filterProducts={filterProducts} key={index} />
      ))}
    </div>
  );
}

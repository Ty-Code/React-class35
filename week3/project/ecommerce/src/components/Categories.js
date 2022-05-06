import Category from './Category';
import useFetch from '../hooks/useFetch';

function Categories({ selectedCategory, setSelectedCategory }) {
  const { data: categories, isLoading, isError } = useFetch('https://fakestoreapi.com/products/categories');

  function selectCategory(e) {
    const selectedCategoryName = e.target.textContent;
    setSelectedCategory(selectedCategoryName);
  }

  return (
    <div className="categories">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        categories &&
        categories.map((categoryName, index) => (
          <Category
            title={categoryName}
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default Categories;

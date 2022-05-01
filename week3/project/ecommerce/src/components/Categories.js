import Category from './Category';
import { useEffect, useState } from 'react';

function Categories({
  setSelectedCategory,
  checkLoading: [isLoading, setIsLoading],
  checkError: [isError, setIsError],
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const allCategories = await response.json();
        setCategories(allCategories);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    getCategories();
  }, []);

  function selectCategory(e) {
    const selectedCategory = e.target.textContent;
    setSelectedCategory(selectedCategory);
  }

  return (
    <div className="categories">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        categories.map((categoryName, index) => (
          <Category title={categoryName} selectCategory={selectCategory} key={index} />
        ))
      )}
    </div>
  );
}

export default Categories;

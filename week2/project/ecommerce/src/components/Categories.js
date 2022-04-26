import Category from './Category';
import { useEffect, useState } from 'react';

function Categories({ setSelectedCategory, checkLoading: [isLoading, SetIsLoading] }) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const allCategories = await response.json();
    setCategories(allCategories);
    SetIsLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function selectCategory(e) {
    const selectedCategory = e.target.textContent;
    setSelectedCategory(selectedCategory);
  }

  return (
    <div className="categories">
      {isLoading ? (
        <span>Loading...</span>
      ) : categories ? (
        categories.map((categoryName, index) => (
          <Category title={categoryName} selectCategory={selectCategory} key={index} />
        ))
      ) : (
        <span>BAD REQUEST!</span>
      )}
    </div>
  );
}

export default Categories;

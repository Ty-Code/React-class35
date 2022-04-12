import './App.css';
import categoryList from './fake-data/all-categories';
import productList from './fake-data/all-products';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  const [allProducts, setProducts] = useState(productList);

  function filterProducts(e) {
    const selectedCategory = e.target.textContent;
    const filteredProducts = productList.filter(
      (product) => `FAKE: ${product.category}` === selectedCategory
    );
    setProducts(filteredProducts);
  }
  return (
    <div className="App">
      <Header />
      <Categories categories={categoryList} filterProducts={filterProducts} />
      <Products displayedProducts={allProducts} />
    </div>
  );
}

export default App;

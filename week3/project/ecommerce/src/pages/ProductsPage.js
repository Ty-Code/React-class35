import { useState } from 'react';
import '../App.css';
import Categories from '../components/Categories';
import Products from '../components/Products';
import SubHeader from '../components/SubHeader';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="main">
      <SubHeader />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default ProductsPage;

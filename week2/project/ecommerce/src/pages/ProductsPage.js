import { useState } from 'react';
import '../App.css';
import Categories from '../components/Categories';
import Products from '../components/Products';
import SubHeader from '../components/SubHeader';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, SetIsLoading] = useState(true);
  return (
    <div className="main">
      <SubHeader setSelectedCategory={setSelectedCategory} />
      <Categories setSelectedCategory={setSelectedCategory} checkLoading={[isLoading, SetIsLoading] }  />
      <Products selectedCategory={selectedCategory} checkLoading={[isLoading, SetIsLoading] } />
    </div>
  );
}

export default ProductsPage;

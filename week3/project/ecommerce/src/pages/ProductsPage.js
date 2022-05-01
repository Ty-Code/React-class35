import { useState } from 'react';
import '../App.css';
import Categories from '../components/Categories';
import Products from '../components/Products';
import SubHeader from '../components/SubHeader';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <div className="main">
      <SubHeader setSelectedCategory={setSelectedCategory} />
      <Categories
        setSelectedCategory={setSelectedCategory}
        checkLoading={[isLoading, setIsLoading]}
        checkError={[isError, setIsError]}
      />
      <Products
        selectedCategory={selectedCategory}
        checkLoading={[isLoading, setIsLoading]}
        checkError={[isError, setIsError]}
      />
    </div>
  );
}

export default ProductsPage;

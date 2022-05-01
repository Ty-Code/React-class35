import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

<div className="App">
  <Header />
</div>;

export default App;

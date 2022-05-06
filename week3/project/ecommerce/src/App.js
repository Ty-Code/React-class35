import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import ProductsPage from './pages/ProductsPage.js';
import Favorites from './pages/FavoritesPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage.js';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
      
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </FavoritesProvider>
        
      </BrowserRouter>
    </>
  );
}

<div className="App">
  <Header />
</div>;

export default App;

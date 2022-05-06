import { createContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addToFavorites(id) {
    setFavoriteIds([...favoriteIds, id]);
  }

  function removeFromFavorites(id) {
    const newFavorites = favoriteIds.filter((favoriteId) => favoriteId !== id);
    setFavoriteIds(newFavorites);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

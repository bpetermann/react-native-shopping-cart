import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favoriteItems: [],
  showFavorites: false,
  setShowFavorites: () => {},
  toggleFavorite: () => {},
  removeFavoriteItem: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (item) => {
    const index = favoriteItems.findIndex((i) => i.id === item.id);

    if (index < 0) {
      setFavoriteItems((prev) => [...prev, item]);
    } else {
      const newItems = favoriteItems.filter((i) => i.id !== item.id);
      setFavoriteItems(newItems);
    }
  };

  const value = {
    favoriteItems: favoriteItems,
    showFavorites: showFavorites,
    setShowFavorites: setShowFavorites,
    toggleFavorite: toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

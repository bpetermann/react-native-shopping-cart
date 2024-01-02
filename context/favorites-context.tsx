// For documentation purposes only, logic moved to redux store

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { setStoreData, getStoreData } from '@/helper';
import { Product } from '@/globals';

interface FavoritesContext {
  favoriteItems: Product[];
  showFavorites: boolean;
  setShowFavorites: Dispatch<SetStateAction<boolean>>;
  toggleFavorite: (item: Product) => void;
  getFavorites: () => void;
}

export const FavoritesContext = createContext<FavoritesContext>({
  favoriteItems: [],
  showFavorites: false,
  setShowFavorites: () => {},
  toggleFavorite: () => {},
  getFavorites: () => {},
});

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (item: Product) => {
    const index = favoriteItems.findIndex((i) => i.id === item.id);

    if (index < 0) {
      setFavoriteItems((prev) => [...prev, item]);
      setStoreData([...favoriteItems, item], 'favorites');
    } else {
      const newItems = favoriteItems.filter((i) => i.id !== item.id);
      setFavoriteItems(newItems);
      setStoreData(newItems, 'favorites');
    }
  };

  const getFavorites = async () => {
    const favorites = await getStoreData('favorites');

    if (Array.isArray(favorites)) {
      setFavoriteItems(favorites);
    }
  };

  const value = {
    favoriteItems: favoriteItems,
    showFavorites: showFavorites,
    setShowFavorites: setShowFavorites,
    toggleFavorite: toggleFavorite,
    getFavorites: getFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

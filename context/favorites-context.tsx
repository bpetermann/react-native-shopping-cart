import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Product } from '@/util/types';

interface FavoritesContext {
  favoriteItems: Product[];
  showFavorites: boolean;
  setShowFavorites: Dispatch<SetStateAction<boolean>>;
  toggleFavorite: (item: Product) => void;
}

export const FavoritesContext = createContext<FavoritesContext>({
  favoriteItems: [],
  showFavorites: false,
  setShowFavorites: () => {},
  toggleFavorite: () => {},
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

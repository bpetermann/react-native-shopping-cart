import { FavoritesContext } from '@/context/favorites-context';
import { AuthContext } from '@/context/auth-context';
import { CartContext } from '@/context/cart-context';
import { useContext, useEffect } from 'react';

export default function useBreakpoints() {
  const { getUser } = useContext(AuthContext);
  const { getFavorites } = useContext(FavoritesContext);
  const { getCart } = useContext(CartContext);

  useEffect(() => {
    getUser();
    getFavorites();
    getCart();
  }, []);
}

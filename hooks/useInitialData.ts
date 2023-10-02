import { FavoritesContext } from '@/context/favorites-context';
import { AuthContext } from '@/context/auth-context';
import { CartContext } from '@/context/cart-context';
import { useContext, useEffect } from 'react';
import { users } from '@/context/auth-context';

const mockUser = {
  // password 123456!
  date: 1696270985636,
  email: 'john.doe@gmail.com',
  id: '1d46a7c5-9d12-4c2b-987a-5f5925c8d49b',
  password: '8.397415388533946e+25',
};

export default function useBreakpoints() {
  const { getUser } = useContext(AuthContext);
  const { getFavorites } = useContext(FavoritesContext);
  const { getCart } = useContext(CartContext);

  useEffect(() => {
    getUser();
    getFavorites();
    getCart();
    if (process.env.NODE_ENV === 'development') users.push(mockUser);
  }, []);
}

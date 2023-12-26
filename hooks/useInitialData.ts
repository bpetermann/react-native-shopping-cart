import { AuthContext } from '@/context/auth-context';
import { CartContext } from '@/context/cart-context';
import { users } from '@/context/auth-context';
import { setInitialFavorites } from '@/store';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStoreData } from '@/helper';

const mockUser = {
  // password 123456!
  date: 1696270985636,
  email: 'john.doe@gmail.com',
  id: '1d46a7c5-9d12-4c2b-987a-5f5925c8d49b',
  password: '8.397415388533946e+25',
};

export default function useBreakpoints() {
  const dispatch = useDispatch();
  const { getUser } = useContext(AuthContext);
  const { getCart } = useContext(CartContext);

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = await getStoreData('favorites');

      if (Array.isArray(favorites)) {
        dispatch(setInitialFavorites(favorites));
      }
    };
    getFavorites();
    getUser();
    getCart();
    if (process.env.NODE_ENV === 'development') users.push(mockUser);
  }, []);
}

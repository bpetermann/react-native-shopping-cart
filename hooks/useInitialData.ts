import { setInitialFavorites, setInitialCart } from '@/store';
import { AuthContext } from '@/context/auth-context';
import { CartContext } from '@/context/cart-context';
import { users } from '@/context/auth-context';
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

export default function useInitialData() {
  const dispatch = useDispatch();
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    const getInitialData = async () => {
      const favorites = await getStoreData('favorites');
      const cart = await getStoreData('cart');

      if (Array.isArray(favorites)) {
        dispatch(setInitialFavorites(favorites));
      }

      if (Array.isArray(cart)) {
        dispatch(setInitialCart(cart));
      }
    };
    getInitialData();
    getUser();
    if (process.env.NODE_ENV === 'development') users.push(mockUser);
  }, []);
}

import { setInitialFavorites, setInitialCart, setInitialUser } from '@/store';
import { mockUser, registerAPI } from '@/util';
import { useDispatch } from 'react-redux';
import { getStoreData } from '@/helper';
import { useEffect } from 'react';

export default function useInitialData() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialData = async () => {
      const favorites = await getStoreData('favorites');
      const cart = await getStoreData('cart');
      const user = await getStoreData('user');

      if (Array.isArray(favorites)) dispatch(setInitialFavorites(favorites));
      if (Array.isArray(cart)) dispatch(setInitialCart(cart));
      if (typeof user === 'string') dispatch(setInitialUser({ email: user }));
    };
    getInitialData();

    if (process.env.NODE_ENV === 'development') registerAPI(mockUser);
  }, []);
}

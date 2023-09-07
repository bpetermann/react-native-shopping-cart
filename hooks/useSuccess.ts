import useBreakpoints from './useBreakpoints';
import { ToastAndroid } from 'react-native';
import { useEffect } from 'react';

export default function useSuccess(success: string | undefined) {
  const { isS } = useBreakpoints();

  useEffect(() => {
    if (isS && success) {
      (function () {
        ToastAndroid.show(`${success} successful`, ToastAndroid.LONG);
      })();
    }
  }, [success]);
}

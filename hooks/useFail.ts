import useBreakpoints from './useBreakpoints';
import { ToastAndroid } from 'react-native';
import { useEffect } from 'react';

export default function useSuccess(fail: string | undefined) {
  const { isS } = useBreakpoints();

  useEffect(() => {
    if (isS && fail) {
      (function () {
        ToastAndroid.show(`${fail} failed`, ToastAndroid.LONG);
      })();
    }
  }, [fail]);
}

import { ToastAndroid } from 'react-native';
import { useEffect } from 'react';

export default function useSuccess(fail: string) {
  useEffect(() => {
    if (fail) {
      (function () {
        ToastAndroid.show(`${fail} failed`, ToastAndroid.LONG);
      })();
    }
  }, [fail]);
}

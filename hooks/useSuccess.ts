import { ToastAndroid } from 'react-native';
import { useEffect } from 'react';

export default function useSuccess(success: string) {
  useEffect(() => {
    if (success) {
      (function () {
        ToastAndroid.show(`${success} successful`, ToastAndroid.LONG);
      })();
    }
  }, [success]);
}

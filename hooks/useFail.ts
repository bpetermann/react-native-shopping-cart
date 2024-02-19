import { useToast } from 'react-native-toast-notifications';
import useBreakpoints from './useBreakpoints';
import { useEffect } from 'react';

export default function useFail(fail: string | undefined) {
  const { isS } = useBreakpoints();
  const toast = useToast();
  useEffect(() => {
    if (isS && fail) {
      toast.show(`${fail} failed`, { duration: 2000 });
    }
  }, [fail]);
}

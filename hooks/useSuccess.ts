import { useToast } from 'react-native-toast-notifications';
import useBreakpoints from './useBreakpoints';
import { useEffect } from 'react';

export default function useSuccess(success: string | undefined) {
  const { isS } = useBreakpoints();
  const toast = useToast();

  useEffect(() => {
    if (isS && success) {
      toast.show(`${success} successful`, { duration: 2000 });
    }
  }, [success]);
}

import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function useBreakpoints() {
  const { width } = useWindowDimensions();
  const [isS, setIsS] = useState('');
  const [isM, setIsM] = useState('');

  useEffect(() => {
    setIsS(width < 480 ? true : false);
    setIsM(width < 720 ? true : false);
  }, [width]);

  return { isS, isM };
}

import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function useBreakpoints() {
  const { width } = useWindowDimensions();
  const [isS, setIsS] = useState<boolean>(false);
  const [isM, setIsM] = useState<boolean>(false);

  useEffect(() => {
    setIsS(width < 480 ? true : false);
    setIsM(width < 720 ? true : false);
  }, [width]);

  return { isS, isM };
}

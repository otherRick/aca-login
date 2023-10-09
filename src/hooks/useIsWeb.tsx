import { useState, useEffect } from 'react';

export const useIsWeb = () => {
  const [isWeb, setIsWeb] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleResize() {
      setIsWeb(window.innerWidth >= 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isWeb;
};

import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

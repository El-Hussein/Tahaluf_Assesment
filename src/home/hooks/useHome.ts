import { useEffect, useState } from 'react';

const useHome = () => {
  const [homeData, setHomeData] = useState<any>('');
  useEffect(() => {
    setHomeData('hello');
  }, []);

  return homeData;
};

export default useHome;

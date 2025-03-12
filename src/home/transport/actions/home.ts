
import { useEffect, useState } from 'react';
import useFetch from '@hooks/useFetch';
import { useHomeStore } from '@home/store/home';
import { useShallow } from 'zustand/react/shallow';
import { RequestOptions } from '@appTypes/common';
import { Home } from '@appTypes/api/home';

export const useGetHomeData = () => {
  const [options, setOptions] = useState<RequestOptions>();
  const { data, error, loading } = useFetch<{ data: string[] }>(`sponsors`, options);
  const { setHomeData, homeData } = useHomeStore(useShallow(state => ({ setHomeData: state.setHomeData, homeData: state.state.data })));

  useEffect(() => {
    if (data) {
      setHomeData(data.data);
    }
  }, [data]);

  return {
    data: homeData,
    error,
    loading,
    refetch: () => {
      setOptions((prev) => ({
        refetch: !prev?.refetch,
        lazy: false,
        public: true,
      }));
    },
  };
};

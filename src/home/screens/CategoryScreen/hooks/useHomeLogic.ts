import { useHomeStore } from '@home/store/home';
import { questions } from '@mocks/home/data';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const useCategoryLogic = () => {
  const { categories, setupData } = useHomeStore(
    useShallow(state => ({
      categories: state.categories,
      setupData: state.setupData,
    })),
  );

  useEffect(() => {
    setupData(questions)
  }, [])

  return {
    categories,
  };
};

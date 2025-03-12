import React from 'react';
import { GetStyles } from '@designSystem/styles';
import { useCategoryLogic } from './hooks/useHomeLogic';
import { useTheme } from '@designSystem/themeProvider';
import CategoryList from './components/CategoryList';
import Header from '@components/Header';

const CategoryScreen = () => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const { categories } = useCategoryLogic();

  return (
    <>
      <Header title="Categories" />
      <CategoryList categories={categories} />
    </>
  );
};

export default CategoryScreen;

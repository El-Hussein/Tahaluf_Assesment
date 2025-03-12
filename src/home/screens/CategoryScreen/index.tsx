import React from 'react';
import { GetStyles } from '@designSystem/styles';
import { useCategoryLogic } from './hooks/useHomeLogic';
import { useTheme } from '@designSystem/themeProvider';
import CategoryList from './components/CategoryList';
import Header from '@components/Header';
import SubmitAnswers from './components/SubmitAnswers';

const CategoryScreen = () => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const { categories, showResults } = useCategoryLogic();

  return (
    <>
      <Header title="Categories" />
      <CategoryList categories={categories} />
      <SubmitAnswers showResults={showResults} />
    </>
  );
};

export default CategoryScreen;

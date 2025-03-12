import React from 'react';
import { GetStyles } from '@designSystem/styles';
import { useQuestionsLogic } from './hooks/useQuestionsLogic';
import { useTheme } from '@designSystem/themeProvider';
import QuestionsList from './components/QuestionList';
import { useRoute } from '@react-navigation/native';

import { RouteProp } from '@react-navigation/native';
import { CATEGORY_TYPE } from '@appTypes/api/home';
import Header from '@components/Header';

type RouteParams = {
  params: {
    categoryType: CATEGORY_TYPE;
  };
};

const QuestionsScreen = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  const { categoryType } = route.params;
  const { questions } = useQuestionsLogic(categoryType);

  console.log('questiosn', questions);
  return (
    <>
      <Header showBack title="Categories" />
      <QuestionsList questions={questions} />
    </>
  );
};

export default QuestionsScreen;

//

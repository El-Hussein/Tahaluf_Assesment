import React from 'react';
import { GetStyles } from '@designSystem/styles';
import { useQuestionsLogic } from './hooks/useQuestionsLogic';
import { useTheme } from '@designSystem/themeProvider';
import QuestionsList from './components/QuestionList';
import { useRoute } from '@react-navigation/native';

import { RouteProp } from '@react-navigation/native';
import { CATEGORY_TYPE } from '@appTypes/api/home';

type RouteParams = {
  params: {
    categoryType: CATEGORY_TYPE;
  };
};

const QuestionsScreen = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  const { categoryType } = route.params;
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const { questions } = useQuestionsLogic(categoryType);

  console.log('questiosn', questions);
  return (
    <>
      {/* <ProgressBar/> */}
      <QuestionsList questions={questions} />
    </>
  );
};

export default QuestionsScreen;

//

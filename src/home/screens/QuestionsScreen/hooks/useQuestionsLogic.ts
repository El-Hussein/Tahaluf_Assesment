import { CATEGORY_TYPE } from '@appTypes/api/home';
import { useHomeStore } from '@home/store/home';
import { questions } from '@mocks/home/data';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const useQuestionsLogic = (categoryType: CATEGORY_TYPE) => {

  const [questionLevels, setQuestionLevels] = useState({
    easy: [],
    medium: [],
    hard: [],
  })

  const { questions } = useHomeStore(
    useShallow(state => ({
      questions: state.availableQuestions,
      setupData: state.setupData,
    })),
  );

  return {
    questions: questions[categoryType].questions,
  };
};

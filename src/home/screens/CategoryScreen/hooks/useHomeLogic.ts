import { QUESTION_DIFFICULTY } from '@appTypes/api/home';
import { useHomeStore } from '@home/store/home';
import { questions } from '@mocks/home/data';
import { useCallback, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

const difficultyScores = {
  [QUESTION_DIFFICULTY.EASY]: 1,
  [QUESTION_DIFFICULTY.HARD]: 5,
  [QUESTION_DIFFICULTY.MEDIUM]: 3,
}

export const useCategoryLogic = () => {
  const { categories, setupData, questionAnswers } = useHomeStore(
    useShallow(state => ({
      categories: state.categories,
      setupData: state.setupData,
      questionAnswers: state.questionAnswers
    })),
  );

  const showResult = useCallback(() => {
    Object.values(questionAnswers).reduce((acc, item) => difficultyScores[item.difficulty] + acc, 0)
  }, [])

  useEffect(() => {
    setupData(questions)
  }, []);

  return {
    categories,
    showResult
  };
};

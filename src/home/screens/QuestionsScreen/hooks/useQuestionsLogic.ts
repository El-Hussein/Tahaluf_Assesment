import { CATEGORY_TYPE, QUESTION_DIFFICULTY } from '@appTypes/api/home';
import { useHomeStore } from '@home/store/home';
import { questions } from '@mocks/home/data';
import { useEffect, useMemo, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const useQuestionsLogic = (categoryType: CATEGORY_TYPE) => {

  const [questionLevels, setQuestionLevels] = useState({
    easy: [],
    medium: [],
    hard: [],
  });

  const { questions, currentStep } = useHomeStore(
    useShallow(state => ({
      questions: state.availableQuestions,
      currentStep: state.currentCategoryStep,
    })),
  );

  useEffect(() => {
    questions[categoryType].questions.forEach(question => {
      setQuestionLevels((questionsLevels) => ({
        ...questionsLevels,
        [question.difficulty]: [...questionsLevels[question.difficulty], question],
      }))
    });
  }, [])

  // LOL: NEED REFACTOR
  const currentStepQuestions = useMemo(() => currentStep === 1
    ? questionLevels.easy
    : currentStep === 2
      ? questionLevels.medium
      : questionLevels.hard, [currentStep, questionLevels]);

  return {
    questions: currentStepQuestions,
  };
};

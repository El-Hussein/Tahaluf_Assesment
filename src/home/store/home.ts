import { Category, CATEGORY_TYPE, Question, QuestionAnswer } from '@appTypes/api/home';
import { Control } from 'react-hook-form';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type HomeState = {
  categories: Category[];
  availableQuestions: { [categoryType in CATEGORY_TYPE]: { questions: Question[] } };
  questionAnswers: { [question_id: string]: string };
  totalAnsweredQuestions: number;
  totalQuestions: number;
  currentCategoryStep: number;
  setupData: (data: Question[]) => void;
  answerQuestion: (question: Question, answer: string) => void;
  setCurrentCategoryStep: (step: number) => void;
};

const initialAvailableQuestions = {
  [CATEGORY_TYPE.GENERAL_KNOWLEDGE]: { questions: [] },
  [CATEGORY_TYPE.GEOLOGY]: { questions: [] },
  [CATEGORY_TYPE.HISTORY]: { questions: [] },
  [CATEGORY_TYPE.SCIENCE]: { questions: [] }
}

export const useHomeStore = create(
  immer<HomeState>((set, get) => ({
    categories: [],
    availableQuestions: initialAvailableQuestions,
    questionAnswers: {},
    isLoaded: false,
    totalAnsweredQuestions: 0,
    totalQuestions: 0,
    control: null,
    currentCategoryStep: 1,

    setupData: (data) => {
      set(state => {
        let uniqueCategories: Category[] = [];
        state.availableQuestions = initialAvailableQuestions;
        data.forEach(question => {
          state.totalQuestions += 1;
          if (!uniqueCategories.find(category => category.type === question.category)) {
            uniqueCategories.push({
              id: Date.now() + Math.random() * 1000, // we can use other unique ID generators.
              title: question.category,
              type: question.category
            });
          }
          state.availableQuestions[question.category].questions.push(question);
        })
        state.categories = uniqueCategories;
      });
    },

    answerQuestion: (question, answer) => {
      set(state => {
        state.questionAnswers[question.id] = answer
        if (state.questionAnswers[question.id]) {
          state.totalAnsweredQuestions += 1;
        }
      });
    },

    setCurrentCategoryStep: (step) => {
      set(state => {
        state.currentCategoryStep = step;
      });
    },

  })),
);

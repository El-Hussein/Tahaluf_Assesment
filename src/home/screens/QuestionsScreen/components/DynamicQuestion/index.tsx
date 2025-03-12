import { Question, QUESTION_TYPE } from '@appTypes/api/home';
import AppText from '@components/AppText';
import React, { useRef } from 'react';
import CheckBox from '@react-native-community/checkbox';
import NotFound from './NotFound';
import { useHomeStore } from '@home/store/home';
import { TextInput } from 'react-native';
import { useShallow } from 'zustand/react/shallow';

const BooleanInput = ({ question }: { question: Question }) => {
  const { answerQuestion } = useHomeStore(
    useShallow((state) => ({
      answerQuestion: state.answerQuestion,
    })),
  );

  const pushAnswer = (value: boolean) => {
    answerQuestion(question, value + '');
  };

  return (
    <>
      {/* TODO: handle */}
      <CheckBox onValueChange={pushAnswer} />
      <AppText>
        {question.type} {question.id}
      </AppText>
    </>
  );
};

const FreeTextInput = ({ question }: { question: Question }) => {
  const { answerQuestion } = useHomeStore(
    useShallow((state) => ({
      answerQuestion: state.answerQuestion,
    })),
  );
  const questionRef = useRef<string>('');

  const onChangeText = (text: string) => {
    questionRef.current = text;
  };

  const pushAnswer = () => {
    answerQuestion(question, questionRef.current);
  };

  return (
    <>
      <AppText>{question.question}</AppText>
      <TextInput placeholder="type your answer..." onChangeText={onChangeText} onEndEditing={pushAnswer} />
    </>
  );
};

const MultipleInput = ({ question }: { question: Question }) => {
  return (
    <AppText>
      {question.type} {question.id}
    </AppText>
  );
};

const availableQuestionElements = {
  [QUESTION_TYPE.BOOLEAN]: BooleanInput,
  [QUESTION_TYPE.FREE_TEXT]: FreeTextInput,
  [QUESTION_TYPE.MULTIPLE]: MultipleInput,
};

type CategoryBoxProps = {
  question: Question;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({ question }) => {
  if (availableQuestionElements[question.type]) {
    return React.createElement(availableQuestionElements[question.type], { question: question });
  }
  return <NotFound question={question} />;
};

export default CategoryBox;

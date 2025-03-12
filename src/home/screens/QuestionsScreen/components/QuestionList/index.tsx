import { Category, Question } from '@appTypes/api/home';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import DynamicQuestion from '../DynamicQuestion';
import Header from '@components/Header';
import QuestionsListFooter from './ListFooter';

type QuestionsListProps = {
  questions: Question[];
};

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  const keyExtractor = useCallback((cat: Question) => `${cat.id}`, []);

  const renderItem = useCallback(({ item }: { item: Question }) => <DynamicQuestion question={item} />, []);

  return (
    <View>
      <FlatList
        ListFooterComponent={<QuestionsListFooter />}
        data={questions}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default QuestionsList;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmptyListMessage } from '@components/EmptyListMessage';
import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

export const HorizontalList = (props: FlatListProps<any>) => {
  return (
    <FlatList showsHorizontalScrollIndicator={false} horizontal {...props} ListEmptyComponent={EmptyListMessage} />
  );
};

export default HorizontalList;

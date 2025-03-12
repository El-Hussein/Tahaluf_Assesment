import { Category } from '@appTypes/api/home';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import CategoryBox from '../CategoryBox';

type CategoryListProps = {
  categories: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const keyExtractor = useCallback((cat: Category) => `${cat.id}`, []);

  const renderItem = useCallback(({ item }: { item: Category }) => <CategoryBox category={item} />, []);

  return (
    <View>
      <FlatList data={categories} keyExtractor={keyExtractor} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default CategoryList;

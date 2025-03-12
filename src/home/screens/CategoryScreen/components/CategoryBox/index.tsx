import { Category } from '@appTypes/api/home';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

type CategoryBoxProps = {
  category: Category;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({ category }) => {
  const { getStyles } = GetStyles();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const gotoCategoryQuestions = useCallback(() => navigation.push('Questions', { categoryType: category.type }), []);

  return (
    <TouchableOpacity
      onPress={gotoCategoryQuestions}
      style={getStyles(['flex-1', 'bg-light-gray', 'rounded-sm', 'm-sm', 'p-md', 'items-center'])}
    >
      <AppText style={getStyles(['text-bold'])}>{category.title}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryBox;

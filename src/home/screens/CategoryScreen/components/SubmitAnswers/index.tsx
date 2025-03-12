import { Category } from '@appTypes/api/home';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

type SubmitAnswersProps = {
  showResult: Category;
};

const SubmitAnswers: React.FC<SubmitAnswersProps> = ({ showResult }) => {
  const { getStyles } = GetStyles();

  return (
    <TouchableOpacity
      onPress={showResult}
      style={getStyles(['flex-1', 'bg-light-gray', 'rounded-sm', 'm-sm', 'p-md', 'items-center'])}
    >
      <AppText style={getStyles(['text-bold'])}>Show Result</AppText>
    </TouchableOpacity>
  );
};

export default SubmitAnswers;

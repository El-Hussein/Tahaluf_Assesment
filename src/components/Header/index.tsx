import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import { useHomeStore } from '@home/store/home';
import { useShallow } from 'zustand/react/shallow';
import ProgressBar from '@components/ProgressBar';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HeaderProps {
  title: string;
  showBack: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBack }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { getStyles } = GetStyles();

  const { totalAnsweredQuestions, totalQuestions } = useHomeStore(
    useShallow((state) => ({
      totalAnsweredQuestions: state.totalAnsweredQuestions,
      totalQuestions: state.totalQuestions,
    })),
  );

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={getStyles(['flex', 'py-md', 'px-md', 'mt-md', 'flex-column-center', 'items-center'])}>
      <View style={getStyles(['w-full', 'border-bottom-gray'])}>
        {showBack && (
          <TouchableOpacity onPress={goBack}>
            <AppText>back</AppText>
          </TouchableOpacity>
        )}
        <AppText style={getStyles(['text-h3', 'mb-md'])}>{title}</AppText>
      </View>

      <AppText style={getStyles(['text-gray', 'text-h6', 'my-md'])}> Your Progress </AppText>
      <ProgressBar total={100} progress={10} />
    </View>
  );
};

export default Header;

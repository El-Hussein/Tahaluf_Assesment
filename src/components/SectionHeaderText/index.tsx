import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import React from 'react';
import { View } from 'react-native';

type SectionHeaderTextProps = { text: string };
export const SectionHeaderText = ({ text }: SectionHeaderTextProps) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['bg-light-green', 'rounded-xsm', 'w-xTiny', 'flex-column-center', 'p-xs'])}>
      <AppText style={getStyles(['text-white', 'text-bold', '-mt-xs'])}>{text}</AppText>
    </View>
  );
};

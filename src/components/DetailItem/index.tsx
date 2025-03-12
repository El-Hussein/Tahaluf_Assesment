import React from 'react';
import { View, TextStyle, ViewStyle } from 'react-native';
import { GetStyles } from '@designSystem/styles';
import AppText from '@components/AppText';

type DetailItemProps = {
  label: string;
  value: string;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

const DetailItem: React.FC<DetailItemProps> = ({ label, value, labelStyle, valueStyle, containerStyle }) => {
  const { getStyles } = GetStyles();

  return (
    <View style={[getStyles(['flex-row-between', 'items-start']), containerStyle]}>
      <AppText styles={[getStyles(['text-[14]', 'text-black', 'text-bold', 'line-height-lg']), labelStyle]}>
        {label} :{' '}
      </AppText>
      <View style={getStyles(['flex-1', 'flex-row-start'])}>
        <AppText styles={[getStyles(['text-[14]', 'text-black', 'line-height-lg']), valueStyle]}>{value}</AppText>
      </View>
    </View>
  );
};

export default DetailItem;

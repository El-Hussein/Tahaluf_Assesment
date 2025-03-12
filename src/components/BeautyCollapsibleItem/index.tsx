import { View } from 'react-native';
import React from 'react';
import AppText from '@components/AppText';
import AppIcon from '@components/AppIcon';
import { GetStyles } from '@designSystem/styles';
import AppButton from '@components/AppButton';

type BeautyCollapsibleItemProps = {
  time: string;
  title: string;
  onPress: () => void;
};

const BeautyCollapsibleItem = ({ time, title, onPress }: BeautyCollapsibleItemProps) => {
  const { getStyles } = GetStyles();

  return (
    <AppButton
      onPress={() => {
        onPress();
      }}
    >
      <View style={getStyles(['flex-row-start', 'flex-1'])}>
        <View style={getStyles(['rounded-sm', 'bg-white', 'w-full'])}>
          <AppText styles={getStyles(['p-xs', 'text-dark-gray', 'text-bold', 'mr-sm', 'w-full'])}>{time}</AppText>
        </View>
        <View style={getStyles(['rounded-sm', 'w-full'])}>
          <AppText styles={getStyles(['p-xs', 'text-white', 'text-bold', 'w-full'])}>{title}</AppText>
        </View>
      </View>
      <AppIcon family="AntDesign" name="right" size={20} style={getStyles([])} color="white" />
    </AppButton>
  );
};

export default BeautyCollapsibleItem;

import React, { useMemo } from 'react';
import { View, TouchableOpacity, ViewProps } from 'react-native';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import { useHomeStore } from '@home/store/home';
import { useShallow } from 'zustand/react/shallow';
import { useTheme } from '@react-navigation/native';

interface ProgressBarProps {
  total: number;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, progress }) => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  // TODO fix this typing
  const progressStyle: any = useMemo(
    () => ({ width: `${progress / total}%`, backgroundColor: 'red' }),
    [progress, total],
  );

  return (
    <View style={getStyles(['h-xs', 'rounded-md', 'w-full', 'bg-light-gray'])}>
      <View style={progressStyle} />
    </View>
  );
};

export default ProgressBar;

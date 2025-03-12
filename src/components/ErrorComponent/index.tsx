import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';

interface ErrorComponentProps {
  message: string;
  onRetry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, onRetry }) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['p-md', 'rounded-lg', 'text-bold', 'text-error'])}>
      <AppText styles={getStyles(['text-center', 'mb-sm'])}>{message}</AppText>
      {onRetry && (
        <TouchableOpacity onPress={onRetry} style={getStyles(['py-sm', 'px-md', 'rounded-md'])}>
          <AppText styles={getStyles([])}>Retry</AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ErrorComponent;

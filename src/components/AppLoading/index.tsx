import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { GetStyles, StyleKeys } from '@designSystem/styles';

type LoadingComponentProps = {
  styles?: StyleKeys[];
};

const LoadingComponent = ({ styles = [] }: LoadingComponentProps) => {
  const { getStyles } = GetStyles();

  return (
    <View style={[getStyles(['flex-column-center', 'flex-1', 'bg-white']), ...styles]}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingComponent;

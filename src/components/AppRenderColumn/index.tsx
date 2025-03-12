import React from 'react';
import { View } from 'react-native';
import { GetStyles } from '@designSystem/styles';
import AppText from '@components/AppText';

type RenderColumnItemProps = {
  item: { key: string; value: string | number };
};

const RenderColumnItem: React.FC<RenderColumnItemProps> = ({ item }) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['flex-row-start', 'mx-xs'])}>
      <AppText styles={getStyles(['text-green', 'text-h6', 'text-normal', 'line-height-lg'])}>{item.key} : </AppText>
      <View style={getStyles(['flex-1', 'flex-row-start'])}>
        <AppText styles={getStyles(['text-green', 'text-h6', 'text-normal', 'line-height-lg'])}>{item.value}</AppText>
      </View>
    </View>
  );
};

export default React.memo(RenderColumnItem);

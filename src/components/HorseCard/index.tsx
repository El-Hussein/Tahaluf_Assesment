import React from 'react';
import { View, FlatList } from 'react-native';
import { GetStyles } from '@designSystem/styles';
import AppImage from '@components/AppImage';
import RenderColumnItem from '@components/AppRenderColumn';
import AppText from '@components/AppText';
import Strings from '@translation/index';

export interface HoresCardProps {
  leftColumn: { key: string; value: string }[];
  rightColumn: { key: string; value: string }[];
  horseImage: string;
  horseName: string;
}

const HorseCard: React.FC<HoresCardProps> = ({ leftColumn, rightColumn, horseImage, horseName }) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['bg-light-white', 'rounded-md', 'p-md', 'relative', 'mt-4xl'])}>
      <View style={getStyles(['flex-row-center', 'mt-md'])}>
        <AppImage
          source={{
            uri: horseImage,
          }}
          style={getStyles(['square-sp', 'rounded-full', 'float-bottom'])}
        />
      </View>

      <AppText
        style={getStyles([
          'text-center',
          'text-h5',
          'mt-xs',
          'mb-md',
          'border-bottom',
          'text-black',
          'mx-2xl',
          'text-bold',
        ])}
      >
        {Strings.jockey.horse} : {horseName}
      </AppText>

      <View style={getStyles(['flex-row-between', 'items-start'])}>
        <View style={getStyles(['flex-1'])}>
          <FlatList
            data={leftColumn}
            renderItem={({ item }) => <RenderColumnItem item={item} />}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
          />
        </View>

        <View style={getStyles(['flex-1'])}>
          {rightColumn.length > 0 && (
            <FlatList
              data={rightColumn}
              renderItem={({ item }) => <RenderColumnItem item={item} />}
              keyExtractor={(item) => item.key}
              scrollEnabled={false}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default HorseCard;

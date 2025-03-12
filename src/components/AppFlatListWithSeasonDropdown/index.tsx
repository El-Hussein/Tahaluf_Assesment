import React from 'react';
import { View, FlatList } from 'react-native';
import { GetStyles } from '@designSystem/styles';
import SeasonDropdown from '@components/AppFilterItem/seasonFilter';
import { Season } from '@appTypes/api/season';
import { EmptyListMessage } from '@components/EmptyListMessage';

type FlatListWithSeasonProps<T> = {
  data: T[];
  seasons: Season;
  renderDetails: (item: T) => { label: string; value: string }[];
  keyExtractor: (item: T) => string;
  renderItem: (info: { item: T }) => React.ReactElement;
  selectedSeason: number;
  onSeasonChange: (season: number) => void;
};

const FlatListWithSeason = <T,>({
  data,
  seasons,
  keyExtractor,
  renderItem,
  selectedSeason,
  onSeasonChange,
}: FlatListWithSeasonProps<T>) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['flex-1', 'bg-white', 'mt-xl'])}>
      <View style={getStyles(['flex-row-start', 'relative'])}>
        <SeasonDropdown selectedSeason={selectedSeason} seasons={seasons} onSeasonChange={onSeasonChange} />
      </View>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => renderItem({ item })}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
};

export default React.memo(FlatListWithSeason);

import React from 'react';
import { View, FlatList } from 'react-native';
import { GetStyles } from '@designSystem/styles';
import DetailItem from '@components/DetailItem/';
import { EmptyListMessage } from '@components/EmptyListMessage';

type Detail = {
  label: string;
  value: string;
};

type RenderContentProps = {
  details: Detail[];
};

const RenderContent: React.FC<RenderContentProps> = ({ details }) => {
  const { getStyles } = GetStyles();

  return (
    <View style={getStyles(['p-sm'])}>
      <FlatList
        data={details}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <DetailItem
            label={item.value}
            value={item.label}
            valueStyle={getStyles(['text-white', 'text-h5'])}
            labelStyle={getStyles(['text-white', 'text-h6'])}
          />
        )}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
};

export default React.memo(RenderContent);

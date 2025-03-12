import AppButton from '@components/AppButton';
import React, { FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { GetStyles, StyleKeys } from '@designSystem/styles';
import { EmptyListMessage } from '@components/EmptyListMessage';

export type Tab = {
  id: string;
  title: string;
};

interface Props {
  tabs: Tab[];
  buttonContainerStyles?: StyleKeys[];
  buttonTextStyles?: StyleKeys[];
  onTabChange: (activeTabId: string) => void;
  defaultActiveTabs?: string;
}

export const AppFilterTabs: FC<Props> = ({
  tabs,
  buttonContainerStyles = [],
  buttonTextStyles = [],
  onTabChange,
  defaultActiveTabs,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTabs || tabs[1]?.id);

  const { getStyles } = GetStyles();

  const handleTabPress = (id: string) => {
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const renderTabTitle = ({ item }: { item: Tab }) => {
    const isActive = item.id === activeTab;

    return (
      <AppButton
        title={item.title}
        onPress={() => handleTabPress(item.id)}
        containerStyles={[
          ...getStyles(['my-xs', 'mx-xs']),
          isActive ? getStyles(['bg-main']) : {},
          ...buttonContainerStyles,
        ]}
        textStyles={[...buttonTextStyles, isActive ? getStyles(['text-white']) : getStyles(['text-main'])]}
        type={isActive ? 'primary' : ''}
      />
    );
  };

  return (
    <View style={getStyles([])}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.id}
        renderItem={renderTabTitle}
        horizontal
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
};

export default AppFilterTabs;

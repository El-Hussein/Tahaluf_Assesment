import AppButton from '@components/AppButton';
import React, { FC, useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { GetStyles, StyleKeys } from '@designSystem/styles';

export type Tab = {
  id: string;
  title: string;
  component: FC;
};

interface Props {
  tabs: Tab[];
  buttonContainerStyles?: StyleKeys[];
  buttonTextStyles?: StyleKeys[];
  contentContainerStyle?: StyleKeys[];
}

export const AppTabs: FC<Props> = ({
  tabs,
  buttonContainerStyles = [],
  contentContainerStyle = [],
  buttonTextStyles = [],
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const { getStyles } = GetStyles();

  const ActiveTabContent = useMemo(() => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    if (!tab) {
      return null;
    }
    const Component = tab.component;
    return <Component />;
  }, [activeTab, tabs]);

  const renderTabTitle = ({ item }: { item: Tab }) => {
    const isActive = item.id === activeTab;

    return (
      <AppButton
        key={item.id}
        title={item.title}
        onPress={() => setActiveTab(item.id)}
        containerStyles={[...getStyles(['p-0', 'px-md']), ...buttonContainerStyles]}
        textStyles={[
          ...getStyles(['p-xs']),
          ...buttonTextStyles,
          isActive ? getStyles(['text-white']) : getStyles(['text-main']),
        ]}
        type={isActive ? 'primary' : 'text-outline'}
      />
    );
  };

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[getStyles(['min-w-full']), ...contentContainerStyle]}
        horizontal
        style={getStyles(['min-w-full'])}
      >
        {tabs.map((tab) => renderTabTitle({ item: tab }))}
      </ScrollView>

      <View style={getStyles(['flex', 'p-lg'])}>{ActiveTabContent}</View>
    </View>
  );
};

export default AppTabs;

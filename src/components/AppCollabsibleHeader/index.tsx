import React, { useState } from 'react';
import { View, TouchableOpacity, LayoutAnimation, Platform, UIManager, StyleProp, ViewStyle } from 'react-native';
import AppText from '@components/AppText';
import AppIcon from '@components/AppIcon';
import { GetStyles, StyleKeys } from '@designSystem/styles';
import { iconSizes } from '@designSystem/constants';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleHeaderProps {
  id: number;
  title: string | undefined;
  renderContent: () => React.ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  textStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<StyleKeys[]>;
}

const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = ({
  id,
  title,
  renderContent,
  headerStyle,
  iconSize = iconSizes.lg,
  textStyle,
  contentStyle,
  iconStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getStyles } = GetStyles();

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={getStyles(['mt-sm', 'rounded-md', 'bg-white', 'shadow-sm'])}>
      <TouchableOpacity
        style={[...getStyles(['flex-row-between', 'p-sm', 'py-md', 'rounded-md', 'bg-light-gray']), headerStyle]}
        onPress={toggleExpand}
        key={id}
      >
        <AppText style={[...getStyles(['text-h5', 'flex-1', 'mx-xs', 'text-black', 'mx-md', 'text-bold']), textStyle]}>
          {title}
        </AppText>
        <AppIcon
          family="IcoMoon"
          name={isExpanded ? 'arrow_up_lg' : 'arrow_down_lg'}
          size={iconSize}
          color="black"
          style={[...getStyles(['mr-md']), iconStyle]}
        />
      </TouchableOpacity>

      {isExpanded && <View style={[...getStyles(['bg-secondary']), contentStyle]}>{renderContent()}</View>}
    </View>
  );
};

export default CollapsibleHeader;

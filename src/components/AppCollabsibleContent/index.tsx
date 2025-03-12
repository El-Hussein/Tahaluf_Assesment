import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleProp,
  ViewStyle,
  I18nManager,
} from 'react-native';
import AppText from '@components/AppText';
import AppIcon from '@components/AppIcon';
import { GetStyles } from '@designSystem/styles';
import { useFavorite } from '@champions/hooks/useFavorites';
import { useTheme } from '@theme/ThemeProvider';
import { iconSizes } from '@designSystem/constants';
// import Strings from '@translation/index';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleItemProps {
  eventId: number;
  title: string;
  description: string;
  renderContent: () => React.ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  showFavorite?: boolean;
  shouldExpand?: boolean;
  eventHeader?: string;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  eventId,
  title,
  renderContent,
  headerStyle,
  contentStyle,
  showFavorite = false,
  shouldExpand,
  // description,
  eventHeader,
}) => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorite(eventId.toString());
  const isRTL = I18nManager.isRTL;

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(shouldExpand);
    }
  }, [shouldExpand]);
  return (
    <View style={getStyles(['mt-sm', 'rounded-md', 'bg-white', 'shadow-sm'])}>
      <TouchableOpacity
        style={[...getStyles(['flex-row-between', 'p-sm', 'py-md', 'bg-light-gray', 'rounded-md']), headerStyle]}
        onPress={toggleExpand}
      >
        {showFavorite && (
          <TouchableOpacity onPress={toggleFavorite}>
            <AppIcon
              color={`${colors['light-error']}`}
              family="AntDesign"
              name={isFavorite ? 'star' : 'staro'}
              size={iconSizes.lg}
              style={getStyles(['p-tiny'])}
            />
          </TouchableOpacity>
        )}

        {/* <AppText numberOfLines={1} style={[getStyles(['text-h5', 'mx-xs', 'text-dark-gray', 'flex-1'])]}>
          {Strings.championship.eventNumber} {description}
        </AppText> */}

        <View style={getStyles(['flex-row-between', 'flex-1', 'h-full'])}>
          <AppText
            numberOfLines={1}
            style={[
              getStyles(['text-h6', 'mx-xs', 'text-dark-gray', 'text-bold', 'text-black', 'text-center', 'h-full']),
              { alignSelf: !isRTL ? 'flex-end' : 'flex-start' },
            ]}
          >
            {title}
          </AppText>
          <AppText
            numberOfLines={1}
            style={[
              getStyles([
                'text-h6',
                'px-xs',
                'text-dark-gray',
                'flex-1',
                'text-bold',
                'text-black',
                'text-center',
                'h-full',
              ]),
              { alignSelf: !isRTL ? 'flex-end' : 'flex-start' },
            ]}
          >
            {eventHeader}
          </AppText>
        </View>

        <AppIcon
          family="IcoMoon"
          name={isExpanded ? 'arrow_up_lg' : 'arrow_down_lg'}
          size={iconSizes.lg}
          style={getStyles([])}
          color="black"
        />
      </TouchableOpacity>

      {isExpanded && <View style={[...getStyles(['text-white']), contentStyle]}>{renderContent()}</View>}
    </View>
  );
};

export default CollapsibleItem;

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
import { iconSizes } from '@designSystem/constants';
import { getFormatDate } from '@utils/getFormatDate';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleItemProps {
  title: string;
  description: string;
  renderContent: () => React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  shouldExpand?: boolean;
  date?: string;
  startHeader?: string;
}

const BeautyCollapsibleList: React.FC<CollapsibleItemProps> = ({
  title,
  renderContent,
  contentStyle,
  shouldExpand,
  date,
  startHeader,
}) => {
  const { getStyles } = GetStyles();
  const isRTL = I18nManager.isRTL;
  const [formattedData, setFormattedData] = useState({
    dayNumberOfMonth: 0,
    dayName: '',
    dayNameArabic: '',
  });
  useEffect(() => {
    const fetchFormattedDate = async () => {
      if (date) {
        const result = await getFormatDate(date);
        setFormattedData(result);
      }
    };

    fetchFormattedDate();
  }, [date]);
  const { dayNumberOfMonth, dayName, dayNameArabic } = formattedData;

  const [isExpanded, setIsExpanded] = useState(false);

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
        style={getStyles(['flex-row-between', 'bg-white', 'rounded-md', 'border-xs', 'border-main', 'px-sm', 'py-sm'])}
        onPress={toggleExpand}
      >
        <View style={getStyles(['flex-1', 'flex-row-start', 'p-xs', 'items-center'])}>
          {date && (
            <View style={getStyles(['flex-column-center', 'mx-xs'])}>
              <AppText numberOfLines={1} styles={getStyles(['text-h6', 'text-black', 'text-bold', 'flex-1'])}>
                {dayNumberOfMonth}
              </AppText>
              <AppText numberOfLines={1} styles={getStyles(['text-h6', 'text-black', 'text-bold', 'flex-1'])}>
                {isRTL ? dayNameArabic : dayName}
              </AppText>
            </View>
          )}
          {startHeader && (
            <View style={getStyles(['mx-xs'])}>
              <AppText numberOfLines={1} styles={getStyles(['text-h6', 'text-black', 'text-bold', 'h-md'])}>
                {startHeader}
              </AppText>
            </View>
          )}
          <View style={getStyles(['flex-1'])}>
            <AppText numberOfLines={1} styles={getStyles(['text-h6', 'text-black', 'text-bold', 'w-full', 'h-md'])}>
              {title}
            </AppText>
          </View>
        </View>

        <View style={getStyles(['w-tiny'])}>
          <AppIcon
            family="IcoMoon"
            name={isExpanded ? 'arrow_up_lg' : 'arrow_down_lg'}
            size={iconSizes.lg}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={[getStyles(['bg-main', 'rounded-sm', 'p-sm', 'relative', '-z-10', 'pt-lg']), contentStyle]}>
          {renderContent()}
        </View>
      )}
    </View>
  );
};

export default BeautyCollapsibleList;

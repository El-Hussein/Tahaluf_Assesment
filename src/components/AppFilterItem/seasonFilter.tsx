import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import AppText from '@components/AppText';
import AppIcon from '@components/AppIcon';
import { GetStyles } from '@designSystem/styles';
import { Season } from '@appTypes/api/season';
import Strings from '@translation/index';
import { useTheme } from '@theme/ThemeProvider';
import { iconSizes } from '@designSystem/constants';
import { EmptyListMessage } from '@components/EmptyListMessage';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type SeasonDropdownProps = {
  selectedSeason: string;
  seasons: string[];
  onSeasonChange: (season: string) => void;
  defaultSelectedSeason?: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  dropdownItemStyle?: StyleProp<ViewStyle>;
};
const SeasonDropdown = ({
  selectedSeason,
  seasons,
  onSeasonChange,
  defaultSelectedSeason = Strings.championship.seasons,
  containerStyle,
  buttonStyle,
  textStyle,
  iconStyle,
  dropdownStyle,
  dropdownItemStyle,
}: SeasonDropdownProps) => {
  const { getStyles } = GetStyles();
  const { isDark } = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDropdownOpen(!isDropdownOpen);
    Animated.timing(animatedValue, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const renderSeasonItem = ({ item }: { item: Season }) => (
    <TouchableOpacity
      style={[getStyles(['p-xs', 'rounded-md']), dropdownItemStyle]}
      onPress={() => {
        onSeasonChange(item);
        toggleDropdown();
      }}
    >
      <AppText styles={[getStyles(['text-h4', 'text-black', 'text-center', 'mx-md'])]}>{item.hijiriYear}</AppText>
    </TouchableOpacity>
  );

  const dropdownHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View style={[getStyles(['bg-white', 'p-xs']), containerStyle]}>
      <TouchableOpacity
        style={[
          getStyles([
            'flex-row-between',
            'p-md',
            'border-xs',
            'rounded-md',
            'px-xl',
            `${isDark ? 'border-green' : 'rounded-md'}`,
          ]),
          buttonStyle,
        ]}
        onPress={toggleDropdown}
      >
        <AppIcon
          family="AntDesign"
          name={isDropdownOpen ? 'up' : 'down'}
          size={iconSizes.lg}
          color="#000"
          style={[getStyles(['text-black', 'absolute', 'left-0', 'mx-sm']), iconStyle]}
        />
        <AppText styles={[getStyles(['text-h5', 'text-black', 'text-center', 'mx-lg']), textStyle]}>
          {selectedSeason?.hijiriYear || defaultSelectedSeason}
        </AppText>
      </TouchableOpacity>

      <Animated.View
        style={[
          getStyles(['bg-white', 'shadow-sm', 'ml-sm', 'mt-xs', 'absolute', 'left-0', 'right-0', 'rounded-sm']),
          { top: '100%', height: dropdownHeight, zIndex: 1001 },
          dropdownStyle,
        ]}
      >
        <FlatList
          data={isDropdownOpen ? seasons : []}
          renderItem={renderSeasonItem}
          keyExtractor={(item) => item.seasonId.toString()}
          scrollEnabled={isDropdownOpen}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={EmptyListMessage}
        />
      </Animated.View>
    </View>
  );
};
export default SeasonDropdown;

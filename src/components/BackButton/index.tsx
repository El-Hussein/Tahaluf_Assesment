import AppIcon from '@components/AppIcon';
import AppText from '@components/AppText';
import { iconSizes } from '@designSystem/constants';
import { GetStyles } from '@designSystem/styles';
import { useTheme } from '@theme/ThemeProvider';
import React, { FC } from 'react';
import { View, I18nManager, TextStyle } from 'react-native';

interface Props {
  title?: string;
  textStyles?: TextStyle | TextStyle[];
  iconColor?: string;
  iconBgColor?: string;
}

const BackButton: FC<Props> = ({ title, textStyles, iconColor, iconBgColor }) => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const isRTL = I18nManager.isRTL;

  return (
    <View style={[getStyles(['flex', 'flex-row-start', 'items-start']), {}]}>
      <View
        style={[
          getStyles(['bg-medium-gray', 'p-tiny', 'mt-sm']),
          { backgroundColor: iconBgColor || '', borderRadius: 20000 },
        ]}
      >
        <AppIcon
          name={isRTL ? 'arrowright' : 'arrowleft'}
          family="AntDesign"
          size={iconSizes.lg}
          color={iconColor || colors.black}
        />
      </View>
      <AppText
        style={[
          getStyles(['text-black', 'text-left', 'text-h5', 'text-bold']),
          ...(textStyles ? (Array.isArray(textStyles) ? textStyles : [textStyles]) : []),
        ]}
      >
        {' '}
        {title}{' '}
      </AppText>
    </View>
  );
};

export default BackButton;

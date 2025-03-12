import React, { FC } from 'react';
import { TextStyle, TextProps, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { GetStyles } from '@designSystem/styles';
import { useTheme } from '@designSystem/themeProvider';

interface Props extends TextProps {
  title?: string;
  activeOpacity?: number;
  containerStyles?: TextStyle | TextStyle[];
  textStyles?: TextStyle | TextStyle[];
  type?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline' | 'text-outline' | 'error';
  loading?: boolean;
}

export const AppButton: FC<Props> = (props) => {
  const { title, containerStyles, textStyles, type = 'primary', loading, children, ...rest } = props;

  const { allStyles } = GetStyles();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={[
        allStyles[`button-${type}`],
        allStyles['flex-row-center'],
        allStyles['rounded-lg'],
        ...(containerStyles ? (Array.isArray(containerStyles) ? containerStyles : [containerStyles]) : []),
      ]}
    >
      {children ? (
        children
      ) : (
        <Text
          style={[
            allStyles['text-normal'],
            type.includes('outline') ? allStyles['text-light-black'] : allStyles['text-white'],
            ...(textStyles ? (Array.isArray(textStyles) ? textStyles : [textStyles]) : []),
          ]}
        >
          {title}
        </Text>
      )}

      {loading && (
        <ActivityIndicator
          style={allStyles['ml-md']}
          animating={loading}
          size="small"
          color={type.includes('outline') ? colors.error : colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

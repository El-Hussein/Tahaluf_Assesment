import React, { FC } from 'react';
import { TextStyle, TextProps, Text, Platform } from 'react-native';
import { GetStyles } from '@designSystem/styles';

interface Props extends TextProps {
  styles?: TextStyle | TextStyle[];
}

export const AppText: FC<Props> = (props) => {
  const { children, styles, testID } = props;

  const { allStyles } = GetStyles();

  return (
    <Text
      testID={testID}
      style={[
        allStyles['text-normal'],
        allStyles['text-black'],
        allStyles['-mt-xs'],
        Platform.OS === 'ios' && allStyles['text-left'],
        ...(styles ? (Array.isArray(styles) ? styles : [styles]) : []),
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;

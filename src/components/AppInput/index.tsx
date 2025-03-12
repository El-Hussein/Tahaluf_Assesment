/* eslint-disable @typescript-eslint/no-explicit-any */
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import { useTheme } from '@theme/ThemeProvider';
import React, { FC } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { I18nManager, Switch, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  type?: 'toggle' | 'default';
  label: string;
  name: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  control: Control<any>;
  rules?: Omit<RegisterOptions<any, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'> | undefined;
  containerStyles?: any;
  inputStyles?: any;
}

const AppInput: FC<InputProps> = ({
  type = 'default',
  containerStyles = [],
  inputStyles = [],
  error,
  control,
  name,
  leftIcon,
  rightIcon,
  rules,
  ...props
}) => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const isRTL = I18nManager.isRTL;

  if (type === 'toggle') {
    return (
      <>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={getStyles(['flex-row-start', 'h-lg'])}>
              <Switch value={value} onValueChange={onChange} onBlur={onBlur} {...(props as any)} />
              <AppText styles={getStyles(['text-normal', 'text-light-black'])}>{props.label}</AppText>
            </View>
          )}
          name={name}
        />
        {error && <AppText styles={getStyles(['text-error'])}>{error}</AppText>}
      </>
    );
  }

  return (
    <View style={getStyles(['mx-xs'])}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[getStyles(['simple-input-container']), ...containerStyles]}>
            {leftIcon && leftIcon}
            <TextInput
              placeholderTextColor={colors.black}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[getStyles(['simple-input']), ...inputStyles]}
              {...props}
            />
            {rightIcon && rightIcon}
          </View>
        )}
        name={name}
      />
      {error && (
        <AppText styles={getStyles(['text-error', !isRTL ? 'text-right' : 'text-left', 'mb-sm'])}>{error}</AppText>
      )}
    </View>
  );
};

export default AppInput;

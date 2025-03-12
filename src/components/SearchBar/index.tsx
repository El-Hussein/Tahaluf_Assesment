import React from 'react';
import AppInput from '@components/AppInput';
import { useForm } from 'react-hook-form';
import AppIcon from '@components/AppIcon';
import { GetStyles } from '@designSystem/styles';
import { I18nManager } from 'react-native';
import Strings from '@translation/index';
import { useTheme } from '@theme/ThemeProvider';
import { iconSizes } from '@designSystem/constants';

export const SearchBar = () => {
  const { getStyles } = GetStyles();
  const { colors } = useTheme();

  const isRTL = I18nManager.isRTL;
  const form = useForm();
  const { control } = form;
  return (
    <AppInput
      leftIcon={<AppIcon family="IcoMoon" name="header_search" color={colors['gray-bg']} size={iconSizes.md} />}
      control={control}
      name="search"
      label="search"
      placeholder={Strings.home.search}
      containerStyles={getStyles(['bg-white', 'rounded-md', 'border-success', 'flex-row-start', 'px-md', 'h-xl'])}
      inputStyles={getStyles(['text-dark-gray', isRTL ? 'text-right' : 'text-left', 'text-subtitle2', 'h-lg'])}
    />
  );
};

export default SearchBar;

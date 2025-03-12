import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';
import Strings from '@translation/index';
import React from 'react';

export const EmptyListMessage = ({ text }: { text: string }) => {
  const { getStyles } = GetStyles();

  return (
    <AppText styles={getStyles(['text-center', 'text-center', 'w-full-width'])}>
      {text ? text : Strings.settings.emptyMessage}
    </AppText>
  );
};

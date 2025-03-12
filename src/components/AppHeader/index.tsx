import { TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { GetStyles } from '@designSystem/styles';
import { useNavigation } from '@react-navigation/native';
import AppButton from '@components/AppButton';

interface Props {
  title?: string;
  icon?: JSX.Element | null;
  backButton?: JSX.Element | null;
  backgroundContainer?: string;
}

const AppHeader: FC<Props> = ({ icon, backButton, backgroundContainer }) => {
  const { getStyles } = GetStyles();

  const { goBack, canGoBack } = useNavigation();
  return (
    <TouchableOpacity style={getStyles(['flex', 'flex-row-between', 'p-md'])}>
      {canGoBack() && (
        <AppButton
          onPress={goBack}
          containerStyles={[getStyles(['bg-white']), { backgroundColor: backgroundContainer || '' }]}
        >
          {backButton}
        </AppButton>
      )}
      {icon}
    </TouchableOpacity>
  );
};

export default AppHeader;

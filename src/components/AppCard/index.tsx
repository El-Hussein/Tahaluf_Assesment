import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import AppImage from '@components/AppImage';
import AppText from '@components/AppText';
import { GetStyles } from '@designSystem/styles';

interface AppCardProps {
  title?: string;
  id?: number;
  description?: string;
  image?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  overlayStyle?: ViewStyle;
  textColor?: string;
  fullWidth?: boolean;
  height?: 'h-image-sm' | 'h-image-md' | 'h-image-md';
  padding?: 'px-lg' | 'px-md' | 'px-sm' | 'px-xs';
  header?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  image,
  header,
  onPress = () => {},
  containerStyle,
  overlayStyle,
  textColor = 'white',
  fullWidth = true,
  height = 'h-image-sm',
  padding = 'px-lg',
}) => {
  const { getStyles } = GetStyles();

  return (
    <TouchableOpacity
      style={[getStyles([fullWidth ? 'w-full-width' : 'w-lg', padding]), containerStyle]}
      onPress={onPress}
    >
      <View style={getStyles(['rounded-xl', height])}>
        {image && (
          <AppImage
            source={{ uri: image?.url || image }}
            style={getStyles(['rounded-xl', height])}
            resizeMode="cover"
          />
        )}
        <View style={[getStyles(['absolute', 'bottom-0', 'left-0', 'right-0', 'p-sm']), overlayStyle]}>
          <AppText styles={[getStyles(['text-h6']), { color: textColor }]}>{header || title || ''}</AppText>
          {description && (
            <AppText styles={[getStyles(['text-h6', 'mt-xs']), { color: textColor }]}>{description}</AppText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppCard;

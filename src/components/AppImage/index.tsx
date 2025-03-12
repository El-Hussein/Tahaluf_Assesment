import React from 'react';
import { Image, ImageProps, ImageURISource } from 'react-native';

const AppImage: React.FC<ImageProps> = (props) => {
  if (typeof props.source === 'number' || (props.source as ImageURISource)?.uri) {
    return <Image {...props} />;
  }

  return <Image resizeMode="contain" {...props} source={{ uri: 'https://placeholder.com/150' }} />;
};

export default AppImage;

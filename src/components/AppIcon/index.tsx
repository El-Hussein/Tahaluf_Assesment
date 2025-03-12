import { iconSizes, widthRatio } from '@designSystem/constants';
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '@assets/icomoon/selection.json';

const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig, 'IcoMoon', 'icomoon.ttf');

export type IconFamily =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial'
  | 'FontAwesome6Brands'
  | 'IcoMoon';

interface AppIconProps {
  name: string;
  family?: IconFamily;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
  onPress?(): void;
}

const IconComponents = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  FontAwesome6Brands,
  IcoMoon,
};

const AppIcon: React.FC<AppIconProps> = ({
  family = 'FontAwesome',
  name,
  size = iconSizes['2xl'],
  color = 'black',
  style,
  onPress,
}) => {
  const IconComponent = IconComponents[family];

  return <IconComponent name={name} size={widthRatio * size} color={color} style={style} onPress={onPress} />;
};

export default AppIcon;

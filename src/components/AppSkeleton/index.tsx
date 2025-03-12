import { Animated, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { GetStyles, StyleKeys } from '@designSystem/styles';

type AppSkeletonProps = {
  styles?: StyleKeys[];
  width?: number;
  height?: number;
  skeletonColor?: string;
};

const AppSkeleton = ({ styles = [], width = 0, height = 0 }: AppSkeletonProps) => {
  const { getStyles, allStyles } = GetStyles();

  const skeletonWidth = width ? width : allStyles['w-xl'].width;
  const skeletonHeight = height ? height : allStyles['h-image-sm'].height;

  const translateX = useRef(new Animated.Value(-skeletonWidth)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, { toValue: skeletonWidth, useNativeDriver: true, duration: 1500 }),
    ).start();
  }, []);

  return (
    <View
      style={[
        getStyles(['over-hidden', 'relative', 'h-image-sm', 'mx-auto', 'w-xl', 'rounded-lg', 'bg-light-gray']),
        { width: skeletonWidth, height: skeletonHeight },
        ...styles,
      ]}
    >
      <Animated.View
        style={[getStyles(['w-full', 'h-full', 'absolute', 'bg-linen']), { transform: [{ translateX: translateX }] }]}
      ></Animated.View>
    </View>
  );
};

export default AppSkeleton;

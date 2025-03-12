import { Dimensions, StyleSheet } from 'react-native';
// import colors from './colors';
import {
  borders,
  fontSizes,
  heights,
  imageHeights,
  margins,
  paddings,
  widths,
  circles,
  lineHeights,
  widthRatio,
} from './constants';
import { useTheme } from './themeProvider';

export const GetStyles = () => {
  const { colors } = useTheme();

  const textStyles = StyleSheet.create({
    'text-h1': {
      fontSize: fontSizes['4xl'],
      fontFamily: 'Cairo-ExtraBold',
    },
    'text-h2': {
      fontSize: fontSizes['3xl'],
      fontFamily: 'Cairo-Bold',
    },
    'text-h3': {
      fontSize: fontSizes['2xl'],
      fontFamily: 'Cairo-Bold',
    },
    'text-h4': {
      fontSize: fontSizes.xl,
      fontFamily: 'Cairo-Bold',
    },
    'text-h5': {
      fontSize: fontSizes.lg,
      fontFamily: 'Cairo-Regular',
    },
    'text-h6': {
      fontSize: fontSizes.md,

      fontFamily: 'Cairo-Regular',
    },
    'text-[14]': {
      fontSize: fontSizes['[14px]'],
      fontFamily: 'Cairo-Regular',
    },
    'text-subtitle': {
      fontSize: fontSizes.lg,

      fontFamily: 'Cairo-Regular',
    },
    'text-subtitle2': {
      fontSize: fontSizes.md,
      fontFamily: 'Cairo-Light',
    },

    'text-normal': {
      fontSize: fontSizes.md,
      fontFamily: 'Cairo-Regular',
    },
    'text-normal2': {
      fontSize: fontSizes.sm,
      fontFamily: 'Cairo-Light',
    },
    'text-disabled': {
      fontSize: fontSizes.md,
      color: colors['gray-text'],
      fontFamily: 'Cairo-Regular',
    },
    'text-underline': {
      textDecorationLine: 'underline',
    },
    'text-error': {
      width: '100%',
      paddingHorizontal: paddings.md,
      fontSize: fontSizes.md,
      color: colors.error,
      fontFamily: 'Cairo-Regular',
    },
    'text-primary': {
      color: colors.main,
    },
    'text-center': {
      textAlign: 'center',
    },
    'text-right': {
      textAlign: 'right',
    },
    'text-left': {
      textAlign: 'left',
    },
    'text-black': {
      color: colors.black,
    },
    'text-light-black': {
      color: colors['light-black'],
    },
    'text-white': {
      color: colors.white,
    },
    'text-main': {
      color: colors.main,
    },
    'text-secondary': {
      color: colors.secondary,
    },
    'text-blue': {
      color: colors.blue,
    },
    'text-gray': {
      color: colors['gray-text'],
    },
    'text-dark-gray': {
      color: colors['dark-gray-text'],
    },
    'text-light-gray': {
      color: colors['light-gray-text'],
    },
    'text-green': {
      color: colors.green,
    },
    'text-light-green': {
      color: colors['light-green'],
    },
    'text-one-line': {
      flexWrap: 'nowrap',
      overflow: 'hidden',
    },
    'text-bold': {
      fontFamily: 'Cairo-Bold',
    },
    'text-weight-600': {
      fontFamily: 'Cairo-Regular',
    },
    'self-center': {
      alignSelf: 'center',
    },
    'over-hidden': {
      overflow: 'hidden',
    },
    'line-height-lg': {
      lineHeight: lineHeights.lg,
    },
  });

  const borderStyles = StyleSheet.create({
    border: {
      borderWidth: borders.sm,
      borderColor: colors['light-black'],
    },
    'border-main': {
      borderWidth: borders.sm,
      borderColor: colors.main,
    },
    'border-green': {
      borderWidth: borders.sm,
      borderColor: colors['light-green'],
    },
    'border-success': {
      borderWidth: borders.sm,
      borderColor: colors.success,
    },
    'border-light': {
      borderWidth: borders.sm,
      borderColor: colors.border,
    },
    'border-gray-light': {
      borderWidth: borders.xs,
      borderColor: colors.borderGrayLight,
    },
    'border-light-white': {
      borderWidth: borders.xs,
      borderColor: colors['light-white'],
    },
    'border-xs': {
      borderWidth: borders.xs,
    },
    'border-sm': {
      borderWidth: borders.sm,
    },
    'border-md': {
      borderWidth: borders.md,
    },
    'border-lg': {
      borderWidth: borders.lg,
    },
    'border-bottom': {
      borderBottomWidth: borders.sm,
      borderBottomColor: colors.main,
      // borderBottomLeftRadius: borders['radius-xl'],
    },
    'border-primary': {
      borderWidth: borders.xs,
      borderColor: colors.main,
    },
    'border-secondary': {
      borderWidth: borders.sm,
      borderColor: colors.secondary,
    },
    'border-bottom-gray': {
      borderBottomWidth: borders.sm,
      borderColor: colors['medium-gray-bg'],
    },
    'border-bottom-card': {
      borderBottomWidth: borders.sm,
      borderColor: colors.borderCardsMain,
    },

    'border-error': {
      borderWidth: borders.sm,
      borderColor: colors.error,
    },
    'rounded-full': {
      borderRadius: borders['radius-full'],
    },
    'rounded-sm': {
      borderRadius: borders['radius-sm'],
    },
    'rounded-xsm': {
      borderRadius: borders['radius-xsm'],
    },
    'rounded-md': {
      borderRadius: borders['radius-md'],
    },
    'rounded-lg': {
      borderRadius: borders['radius-lg'],
    },
    'rounded-xl': {
      borderRadius: borders['radius-xl'],
    },
    'rounded-2xl': {
      borderRadius: borders['radius-2xl'],
    },
    'rounded-top': {
      borderTopLeftRadius: borders['radius-2xl'],
      borderTopRightRadius: borders['radius-2xl'],
    },
    'rounded-bottom': {
      borderBottomLeftRadius: borders['radius-2xl'],
      borderBottomRightRadius: borders['radius-2xl'],
    },
    'rounded-top-sm': {
      borderTopLeftRadius: borders['radius-md'],
      borderTopRightRadius: borders['radius-md'],
    },
    'rounded-top-md': {
      borderTopLeftRadius: borders['radius-xl'],
      borderTopRightRadius: borders['radius-xl'],
    },
    'rounded-bottom-sm': {
      borderBottomLeftRadius: borders['radius-lg'],
      borderBottomRightRadius: borders['radius-lg'],
    },
    'rounded-bottom-md': {
      borderBottomLeftRadius: borders['radius-xl'],
      borderBottomRightRadius: borders['radius-xl'],
    },
  });

  const basicStyles = StyleSheet.create({
    button: {
      ...textStyles['text-normal'],
      borderRadius: borders['radius-lg'],
      padding: paddings.sm,
    },
    container: {
      flex: 1,
      padding: paddings.md,
      marginVertical: margins.md,
    },
  });

  const buttonStyles = StyleSheet.create({
    'button-primary': {
      ...basicStyles.button,
      backgroundColor: colors.main,
      color: colors.white,
    },
    'button-secondary': {
      ...basicStyles.button,
      backgroundColor: colors.secondary,
      color: colors.black,
    },
    'button-error': {
      ...basicStyles.button,
      backgroundColor: colors.error,
      color: colors.white,
    },
    'button-primary-outline': {
      ...basicStyles.button,
      backgroundColor: colors.white,
      color: colors.main,
      ...borderStyles['border-primary'],
    },
    'button-secondary-outline': {
      ...basicStyles.button,
      backgroundColor: colors.white,
      color: colors.secondary,
      ...borderStyles['border-secondary'],
    },
    'button-error-outline': {
      ...basicStyles.button,
      backgroundColor: colors.white,
      color: colors.error,
      ...borderStyles['border-error'],
    },
    'button-text-outline': {
      ...basicStyles.button,
      backgroundColor: colors.white,
      color: colors.black,
    },
  });

  const containerStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      padding: paddings.lg,
    },
    'row-container': {
      ...basicStyles.container,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    'column-container': {
      ...basicStyles.container,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    'wrap-content': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    'flex-row-start': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    'flex-row-between': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    'flex-row-end': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    'flex-row-center': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    'flex-column-start': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    'flex-column-end': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    'flex-column-center': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    'flex-1': {
      flex: 1,
      display: 'flex',
    },
    'flex-row-reverse': {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    'items-start': {
      alignItems: 'flex-start',
    },
    'items-end': {
      alignItems: 'flex-end',
    },
    'items-center': {
      alignItems: 'center',
    },
    'scroll-x': {
      overflow: 'scroll',
    },
  });

  const marginsStyles = StyleSheet.create({
    'm-0': {
      margin: 0,
    },
    'm-tiny': {
      margin: margins.tiny,
    },
    'm-xs': {
      margin: margins.xs,
    },
    'm-sm': {
      margin: margins.sm,
    },
    'm-md': {
      margin: margins.md,
    },
    'm-lg': {
      margin: margins.lg,
    },
    'mb-xs': {
      marginBottom: margins.xs,
    },
    'mb-sm': {
      marginBottom: margins.sm,
    },
    'mb-md': {
      marginBottom: margins.md,
    },
    'mb-lg': {
      marginBottom: margins.lg,
    },
    'mb-xl': {
      marginBottom: margins.xl,
    },
    'mb-2xl': {
      marginBottom: margins['2xl'],
    },
    'mb-3xl': {
      marginBottom: margins['3xl'],
    },
    'mb-4xl': {
      marginBottom: margins['4xl'],
    },
    'mb-5xl': {
      marginBottom: margins['5xl'],
    },
    'mt-xs': {
      marginTop: margins.xs,
    },
    'mt-sm': {
      marginTop: margins.sm,
    },
    'mt-md': {
      marginTop: margins.md,
    },
    'mt-lg': {
      marginTop: margins.lg,
    },
    'mt-xl': {
      marginTop: margins.xl,
    },
    'mt-2xl': {
      marginTop: margins['2xl'],
    },
    'mt-3xl': {
      marginTop: margins['3xl'],
    },
    'mt-4xl': {
      marginTop: margins['4xl'],
    },
    'mt-5xl': {
      marginTop: margins['5xl'],
    },
    '-mt-xs': {
      marginTop: -margins.xs,
    },
    'ml-xs': {
      marginLeft: margins.xs,
    },
    'ml-sm': {
      marginLeft: margins.sm,
    },
    'ml-md': {
      marginLeft: margins.md,
    },
    'ml-lg': {
      marginLeft: margins.lg,
    },
    'ml-xl': {
      marginLeft: margins.xl,
    },
    'ml-2xl': {
      marginLeft: margins['2xl'],
    },
    'ml-3xl': {
      marginLeft: margins['3xl'],
    },
    'ml-4xl': {
      marginLeft: margins['4xl'],
    },
    'ml-5xl': {
      marginLeft: margins['5xl'],
    },
    'mr-xs': {
      marginRight: margins.xs,
    },
    'mr-sm': {
      marginRight: margins.sm,
    },
    'mr-md': {
      marginRight: margins.md,
    },
    'mr-lg': {
      marginRight: margins.lg,
    },
    'mr-xl': {
      marginRight: margins.xl,
    },
    'mr-2xl': {
      marginRight: margins['2xl'],
    },
    'mr-3xl': {
      marginRight: margins['3xl'],
    },
    'mr-4xl': {
      marginRight: margins['4xl'],
    },
    'mr-5xl': {
      marginRight: margins['5xl'],
    },
    'mx-xs': {
      marginHorizontal: margins.xs,
    },
    'mx-sm': {
      marginHorizontal: margins.sm,
    },
    'mx-md': {
      marginHorizontal: margins.md,
    },
    'mx-lg': {
      marginHorizontal: margins.lg,
    },
    'mx-xl': {
      marginHorizontal: margins.xl,
    },
    'mx-2xl': {
      marginHorizontal: margins['2xl'],
    },
    'mx-3xl': {
      marginHorizontal: margins['3xl'],
    },
    'mx-4xl': {
      marginHorizontal: margins['4xl'],
    },
    'mx-5xl': {
      marginHorizontal: margins['5xl'],
    },
    'mx-auto': {
      marginHorizontal: 'auto',
    },
    'my-xs': {
      marginVertical: margins.xs,
    },
    'my-sm': {
      marginVertical: margins.sm,
    },
    'my-md': {
      marginVertical: margins.md,
    },
    'my-lg': {
      marginVertical: margins.lg,
    },
    'my-xl': {
      marginVertical: margins.xl,
    },
    'my-2xl': {
      marginVertical: margins['2xl'],
    },
    'my-3xl': {
      marginVertical: margins['3xl'],
    },
    'my-4xl': {
      marginVertical: margins['4xl'],
    },
    'my-5xl': {
      marginVertical: margins['5xl'],
    },
    'my-auto': {
      marginVertical: 'auto',
    },
  });

  const paddingsStyles = StyleSheet.create({
    'p-0': {
      padding: 0,
    },
    'p-tiny': {
      padding: paddings.tiny,
    },
    'p-xs': {
      padding: paddings.xs,
    },
    'p-sm': {
      padding: paddings.sm,
    },
    'p-md': {
      padding: paddings.md,
    },
    'p-lg': {
      padding: paddings.lg,
    },
    'p-xl': {
      padding: paddings.xl,
    },
    'p-2xl': {
      padding: paddings['2xl'],
    },
    'p-3xl': {
      padding: paddings['3xl'],
    },
    'p-4xl': {
      padding: paddings['4xl'],
    },
    'pb-xs': {
      paddingBottom: paddings.xs,
    },
    'pb-sm': {
      paddingBottom: paddings.sm,
    },
    'pb-md': {
      paddingBottom: paddings.md,
    },
    'pb-lg': {
      paddingBottom: paddings.lg,
    },
    'pb-xl': {
      paddingBottom: paddings.xl,
    },
    'pb-2xl': {
      paddingBottom: paddings['2xl'],
    },
    'pb-3xl': {
      paddingBottom: paddings['3xl'],
    },
    'pb-4xl': {
      paddingBottom: paddings['4xl'],
    },
    'pb-5xl': {
      paddingBottom: paddings['5xl'],
    },
    'pt-xs': {
      paddingTop: paddings.xs,
    },
    'pt-sm': {
      paddingTop: paddings.sm,
    },
    'pt-md': {
      paddingTop: paddings.md,
    },
    'pt-lg': {
      paddingTop: paddings.lg,
    },
    'pt-xl': {
      paddingTop: paddings.xl,
    },
    'pt-2xl': {
      paddingTop: paddings['2xl'],
    },
    'pt-3xl': {
      paddingTop: paddings['3xl'],
    },
    'pt-4xl': {
      paddingTop: paddings['4xl'],
    },
    'pt-5xl': {
      paddingTop: paddings['5xl'],
    },
    'pl-xs': {
      paddingLeft: paddings.xs,
    },
    'pl-sm': {
      paddingLeft: paddings.sm,
    },
    'pl-md': {
      paddingLeft: paddings.md,
    },
    'pl-lg': {
      paddingLeft: paddings.lg,
    },
    'pl-xl': {
      paddingLeft: paddings.xl,
    },
    'pl-2xl': {
      paddingLeft: paddings['2xl'],
    },
    'pl-3xl': {
      paddingLeft: paddings['3xl'],
    },
    'pl-4xl': {
      paddingLeft: paddings['4xl'],
    },
    'pl-5xl': {
      paddingLeft: paddings['5xl'],
    },
    'pr-xs': {
      paddingRight: paddings.xs,
    },
    'pr-sm': {
      paddingRight: paddings.sm,
    },
    'pr-md': {
      paddingRight: paddings.md,
    },
    'pr-lg': {
      paddingRight: paddings.lg,
    },
    'pr-xl': {
      paddingRight: paddings.xl,
    },
    'pr-2xl': {
      paddingRight: paddings['2xl'],
    },
    'pr-3xl': {
      paddingRight: paddings['3xl'],
    },
    'pr-4xl': {
      paddingRight: paddings['4xl'],
    },
    'pr-5xl': {
      paddingRight: paddings['5xl'],
    },
    'px-0': {
      paddingHorizontal: 0,
    },
    'px-xs': {
      paddingHorizontal: paddings.xs,
    },
    'px-sm': {
      paddingHorizontal: paddings.sm,
    },
    'px-md': {
      paddingHorizontal: paddings.md,
    },
    'px-lg': {
      paddingHorizontal: paddings.lg,
    },
    'px-xl': {
      paddingHorizontal: paddings.xl,
    },
    'px-2xl': {
      paddingHorizontal: paddings['2xl'],
    },
    'px-3xl': {
      paddingHorizontal: paddings['3xl'],
    },
    'px-4xl': {
      paddingHorizontal: paddings['4xl'],
    },
    'px-5xl': {
      paddingHorizontal: paddings['5xl'],
    },
    'px-auto': {
      paddingHorizontal: 'auto',
    },
    'py-xs': {
      paddingVertical: paddings.xs,
    },
    'py-sm': {
      paddingVertical: paddings.sm,
    },
    'py-md': {
      paddingVertical: paddings.md,
    },
    'py-lg': {
      paddingVertical: paddings.lg,
    },
    'py-xl': {
      paddingVertical: paddings.xl,
    },
    'py-2xl': {
      paddingVertical: paddings['2xl'],
    },
    'py-3xl': {
      paddingVertical: paddings['3xl'],
    },
    'py-4xl': {
      paddingVertical: paddings['4xl'],
    },
    'py-5xl': {
      paddingVertical: paddings['5xl'],
    },
    'py-auto': {
      paddingVertical: 'auto',
    },
  });

  const width = StyleSheet.create({
    'w-tiny': {
      width: widths.tiny,
    },
    'w-xTiny': {
      width: widths.xTiny,
    },
    'w-xs': {
      width: widths.xs,
    },
    'w-xsm': {
      width: widths.xsm,
    },
    'w-sm': {
      width: widths.sm,
    },
    'w-md': {
      width: widths.md,
    },
    'w-lg': {
      width: widths.lg,
    },
    'w-xl': {
      width: widths.xl,
    },
    'w-1/4': {
      width: '25%',
    },
    'w-3/4': {
      width: '75%',
    },
    'w-1/3': {
      width: '33.3%',
    },
    'w-2/3': {
      width: '66.6%',
    },
    'w-1/2': {
      width: '50%',
    },
    'w-full-width': {
      width: Dimensions.get('window').width,
    },
    'w-full': {
      width: '100%',
    },

    'w-auto': {
      width: 'auto',
    },
    'w-1/5': {
      width: '20%',
    },
    'w-2/5': {
      width: '40%',
    },
    'w-3/5': {
      width: '60%',
    },
    'w-4/5': {
      width: '80%',
    },
    'w-1/6': {
      width: '16.666666%',
    },
    'w-2/6': {
      width: '33.333333%',
    },
    'w-3/6': {
      width: '50%',
    },
    'w-4/6': {
      width: '66.666666%',
    },
    'w-5/6': {
      width: '83.333333%',
    },
    'w-full-modal': {
      width: '93.333333%',
    },

    'max-w-1/4': {
      maxWidth: '25%',
    },
    'max-w-1/3': {
      maxWidth: '33.3%',
    },
    'max-w-1/2': {
      maxWidth: '50%',
    },
    'max-w-2/3': {
      maxWidth: '66.6%',
    },
    'max-w-3/4': {
      maxWidth: '75%',
    },
    'max-w-4/5': {
      maxWidth: '80%',
    },
    'max-w-5/6': {
      maxWidth: '83.333333%',
    },
    'min-w-full': {
      minWidth: '100%',
    },
    'w-[75px]': {
      minWidth: widths['[75px]'],
    },
  });

  const height = StyleSheet.create({
    'h-line': {
      height: 0.5,
    },
    'h-tiny': {
      height: heights.tiny,
    },
    'h-xs': {
      height: heights.xs,
    },
    'h-sm': {
      height: heights.sm,
    },
    'h-md': {
      height: heights.md,
    },
    'h-lg': {
      height: heights.lg,
    },
    'h-xl': {
      height: heights.xl,
    },
    'h-2xl': {
      height: heights['2xl'],
    },
    'h-3xl': {
      height: heights['3xl'],
    },
    'h-4xl': {
      height: heights['4xl'],
    },
    'h-image-xs': {
      height: imageHeights.xs,
    },

    'h-image-sm': {
      height: imageHeights.sm,
    },
    'h-image-md': {
      height: imageHeights.md,
    },
    'h-image-lg': {
      height: imageHeights.lg,
    },
    'h-image-xl': {
      height: imageHeights.xl,
    },
    'h-image-2xl': {
      height: imageHeights['2xl'],
    },
    'h-1/2': {
      height: '50%',
    },
    'h-1/4': {
      height: '25%',
    },
    'h-3/4': {
      height: '75%',
    },
    'h-1/3': {
      height: '33.3%',
    },
    'h-2/3': {
      height: '66.6%',
    },
    'h-1/5': {
      height: '20%',
    },
    'h-2/5': {
      height: '40%',
    },
    'h-3/5': {
      height: '60%',
    },
    'h-4/5': {
      height: '80%',
    },
    'h-1/6': {
      height: '16.666666%',
    },
    'h-2/6': {
      height: '33.333333%',
    },
    'h-3/6': {
      height: '50%',
    },
    'h-4/6': {
      height: '66.666666%',
    },
    'h-5/6': {
      height: '83.333333%',
    },
    'h-full': {
      height: '100%',
    },
    'h-[70px]': {
      height: heights['[70px]'],
    },
  });

  const shapes = StyleSheet.create({
    'circle-tiny': {
      width: circles.tiny,
      height: circles.tiny,
      borderRadius: borders['radius-full'],
    },
    'circle-xs': {
      width: circles.xs,
      height: circles.xs,
      borderRadius: borders['radius-full'],
    },
    'circle-sm': {
      width: circles.sm,
      height: circles.sm,
      borderRadius: borders['radius-full'],
    },
    'circle-md': {
      width: circles.md,
      height: circles.md,
      borderRadius: borders['radius-full'],
    },
    'circle-lg': {
      width: circles.lg,
      height: circles.lg,
      borderRadius: borders['radius-full'],
    },
    'circle-xl': {
      width: circles.xl,
      height: circles.xl,
      borderRadius: borders['radius-full'],
    },
    'square-sm': {
      width: circles.sm,
      height: circles.sm,
      borderRadius: borders.md,
    },
    'square-md': {
      width: circles.md,
      height: circles.md,
      borderRadius: borders.lg,
    },
    'square-sp': {
      width: circles.sp,
      height: circles.sp,
      borderRadius: borders['radius-2xl'],
    },
    'square-lg': {
      width: circles.lg,
      height: circles.lg,
      borderRadius: borders['radius-xl'],
    },
    'square-xl': {
      width: circles.xl,
      height: circles.xl,
      borderRadius: borders['radius-2xl'],
    },
  });

  const backgroundStyles = StyleSheet.create({
    'bg-transparent': {
      backgroundColor: '#00000000',
    },
    'bg-white-opacity': {
      backgroundColor: '#00000080',
    },
    'bg-main': {
      backgroundColor: colors.main,
    },
    'bg-light-main': {
      backgroundColor: colors['light-main'],
    },
    'bg-green': {
      backgroundColor: colors.green,
    },
    'bg-light-green': {
      backgroundColor: colors['light-green'],
    },
    'bg-very-light-main': {
      backgroundColor: colors['very-light-main'],
    },
    'bg-secondary': {
      backgroundColor: colors.secondary,
    },
    'bg-error': {
      backgroundColor: colors.error,
    },
    'bg-white': {
      backgroundColor: colors.white,
    },
    'bg-light-white': {
      backgroundColor: colors['light-white'],
    },
    'bg-black': {
      backgroundColor: colors.black,
    },
    'bg-light-black': {
      backgroundColor: colors['light-black'],
    },
    'bg-gray': {
      backgroundColor: colors['gray-bg'],
    },
    'bg-light-gray': {
      backgroundColor: colors['light-gray-bg'],
    },
    'bg-very-light-gray': {
      backgroundColor: colors['very-light-gray-bg'],
    },
    'bg-medium-gray': {
      backgroundColor: colors['medium-gray-bg'],
    },
    'bg-success': {
      backgroundColor: colors.success,
    },
    'bg-brown': {
      backgroundColor: colors.brown,
    },
    'bg-linen': {
      backgroundColor: colors.linen,
    },
    'bg-black-opacity': {
      backgroundColor: colors.blackOpacity,
    },
  });

  const positioning = StyleSheet.create({
    absolute: {
      position: 'absolute',
      zIndex: 10,
    },
    relative: {
      position: 'relative',
      zIndex: 10,
    },
    '-top-xs': {
      top: -1 * heights.xs,
    },
    'top-0': {
      top: 0,
    },
    '-top-50': {
      top: -50,
    },
    'top-height-tiny': {
      top: 24,
    },
    'top-height-xs': {
      top: 48,
    },
    'top-height-sm': {
      top: 80,
    },
    'top-height-md': {
      top: 160,
    },
    'top-height-lg': {
      top: 250,
    },
    'top-height-xl': {
      top: 400,
    },
    'top-height-2xl': {
      top: 600,
    },
    'top-1/4': {
      top: '25%',
    },
    'top-1/3': {
      top: '33.3%',
    },
    'top-1/2': {
      top: '50%',
    },
    'top-3/4': {
      top: '75%',
    },
    'top-full': {
      top: '100%',
    },
    'bottom-0': {
      bottom: 0,
    },
    '-bottom-xs': {
      bottom: -1 * heights.xs,
    },
    'bottom-height-tiny': {
      bottom: 32,
    },
    'bottom-height-xs': {
      bottom: 56,
    },
    'bottom-height-sm': {
      bottom: 100,
    },
    'bottom-height-md': {
      bottom: 160,
    },
    'bottom-height-lg': {
      bottom: 250,
    },
    'bottom-height-xl': {
      bottom: 400,
    },
    'bottom-height-2xl': {
      bottom: 600,
    },
    'bottom-1/4': {
      bottom: '25%',
    },
    'bottom-1/3': {
      bottom: '33.3%',
    },
    'bottom-1/2': {
      bottom: '50%',
    },
    'bottom-3/4': {
      bottom: '75%',
    },
    'bottom-full': {
      bottom: '100%',
    },
    'bottom-padding-tiny': {
      bottom: paddings.tiny,
    },
    'bottom-padding-xs': {
      bottom: paddings.xs,
    },
    'bottom-padding-sm': {
      bottom: paddings.sm,
    },
    'bottom-padding-md': {
      bottom: paddings.md,
    },
    'bottom-padding-lg': {
      bottom: paddings.lg,
    },
    'bottom-padding-xl': {
      bottom: paddings.xl,
    },
    'bottom-padding-2xl': {
      bottom: paddings['2xl'],
    },
    'bottom-padding-3xl': {
      bottom: paddings['3xl'],
    },
    'bottom-padding-4xl': {
      bottom: paddings['4xl'],
    },
    'left-0': {
      left: 0,
    },
    'left-1/3': {
      left: '33.3%',
    },

    'left-padding-tiny': {
      left: paddings.tiny,
    },
    'left-padding-xs': {
      left: paddings.xs,
    },
    'left-padding-sm': {
      left: paddings.sm,
    },
    'left-padding-md': {
      left: paddings.md,
    },
    'left-padding-lg': {
      left: paddings.lg,
    },
    'left-padding-xl': {
      left: paddings.xl,
    },
    'left-padding-2xl': {
      left: paddings['2xl'],
    },
    'left-padding-3xl': {
      left: paddings['3xl'],
    },
    'left-padding-4xl': {
      left: paddings['4xl'],
    },
    'right-0': {
      right: 0,
    },
    'right-padding-tiny': {
      right: paddings.tiny,
    },
    'right-padding-xs': {
      right: paddings.xs,
    },
    'right-padding-sm': {
      right: widthRatio * 8,
    },
    'right-padding-md': {
      right: paddings.md,
    },
    'right-padding-lg': {
      right: paddings.lg,
    },
    'right-padding-xl': {
      right: paddings.xl,
    },
    'right-padding-2xl': {
      right: paddings['2xl'],
    },
    'right-padding-3xl': {
      right: paddings['3xl'],
    },
    'right-padding-4xl': {
      right: paddings['4xl'],
    },
    'float-top': {
      position: 'absolute',
      top: 0,
      zIndex: 2,
    },
    'float-bottom': {
      position: 'absolute',
      bottom: 0,
      zIndex: 2,
    },
    'float-left': {
      position: 'absolute',
      left: 0,
      zIndex: 2,
    },
    flex: {
      display: 'flex',
    },
    'float-right': {
      position: 'absolute',
      right: 0,
      zIndex: 2,
    },
    'flex-shrink': {
      display: 'flex',
      flexShrink: 1,
    },
    'flex-grow': {
      display: 'flex',
      flexGrow: 1,
    },
    'flex-shrink-0': {
      display: 'flex',
      flexShrink: 0,
    },
    'flex-grow-0': {
      display: 'flex',
      flexGrow: 0,
    },
    '-z-10': {
      zIndex: -10,
    },
    'z-10': {
      zIndex: -10,
    },
    'z-20': {
      zIndex: 20,
    },
    'z-30': {
      zIndex: 30,
    },
  });

  const inputStyles = StyleSheet.create({
    'simple-input-container': {
      ...height['h-2xl'],
      ...borderStyles['border-light'],
      ...containerStyles['flex-row-start'],
      borderRadius: borders['radius-lg'],
      backgroundColor: colors.white,
      // padding: paddings.lg,
    },
    'simple-input': {
      backgroundColor: colors.white,
      color: colors['light-black'],
      padding: 0,
      marginHorizontal: margins.md,
      height: 20,
    },
  });

  const shadows = StyleSheet.create({
    'shadow-sm': {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 2.84,
      elevation: 1,
    },
  });

  const allStyles = StyleSheet.create({
    ...textStyles,
    ...borderStyles,
    ...buttonStyles,
    ...containerStyles,
    ...marginsStyles,
    ...paddingsStyles,
    ...width,
    ...height,
    ...positioning,
    ...backgroundStyles,
    ...inputStyles,
    ...shadows,
    ...shapes,
  });

  type StyleKeys = keyof typeof allStyles;
  function getStyles(styles: StyleKeys[]): any {
    return styles.map(style => allStyles[style]);
  }
  return { allStyles, getStyles };
};

export type StyleKeys = keyof ReturnType<typeof GetStyles>['allStyles'];

// export everything from src\theme\index.ts:

import COLORS from './colors';
import * as CONSTANTS from './constants';
import APP_STYLES from './styles';

const theme = {
  COLORS,
  ...CONSTANTS,
  ...APP_STYLES,
};

export default theme;

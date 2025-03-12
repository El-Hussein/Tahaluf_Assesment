/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import AppContainer from './src/navigation';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://cda745b5cded7339de674b4306ff81ba@o4508135137280000.ingest.de.sentry.io/4508135139967056',
  tracesSampleRate: 1.0,
  _experiments: {
    profilesSampleRate: 1.0,
  },
});

function App(): React.JSX.Element {
  return <AppContainer />;
}

export default Sentry.wrap(App);

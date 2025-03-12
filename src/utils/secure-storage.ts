import Keychain from 'react-native-keychain';
import Sentry from '@sentry/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
type SetSecureValue = (key: string, value: string) => Promise<void>;
type GetSecureValue = (key: string) => Promise<string | false>;
type RemoveSecureValue = (key: string) => Promise<boolean>;

const setSecureValue: SetSecureValue = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
  // return Keychain.setGenericPassword(key, value);
};

const getSecureValue: GetSecureValue = async key => {
  try {
    console.log('key', key);
    const result = await AsyncStorage.getItem(key);
    // const result = await Keychain.getGenericPassword({ service: key });
    console.log('result', result);
    if (result) {
      return result;
    }
    return '';
    // if (result) {
    //   return result.password;
    // }
    // return false;
  } catch (error) {
    console.log('Error in getSecureValue', error);
    Sentry.captureException(error);
    return '';
  }
  // const result = await Keychain.getGenericPassword({ service: key });
  // if (result) {
  //   return result.password;
  // }
  // return false;
};

const removeSecureValue: RemoveSecureValue = key =>
  Keychain.resetGenericPassword({ service: key });

export { setSecureValue, getSecureValue, removeSecureValue };

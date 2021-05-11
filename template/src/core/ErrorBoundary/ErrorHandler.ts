import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import Toast from 'react-native-toast-message';

import { translate } from '../I18n';

const ALLOW_IN_DEV_MODE = false;

export function errorHandler(error: Error, isFatal: boolean): void {
  if (isFatal) {
    Toast.show({
      text1: translate('error.fatal.title'),
      text2: JSON.stringify(error),
      visibilityTime: 5000,
      position: 'bottom',
      type: 'error',
    });
  } else {
    // do anything else
  }
}

export function nativeErrorCallback(errorString: string): void {
  // You can do something like call an api to report to dev team here
  // example
  // fetch('http://<YOUR API TO REPORT TO DEV TEAM>?error='+errorString);
}

setJSExceptionHandler(errorHandler, ALLOW_IN_DEV_MODE);

/**
 * This is specifically occuring when you use wix library for navigation along with react-native-exception-handler.
 * Whenever an error occurs, it will recreate the application above the crash screen.
 *
 * Fix:
 * You need to set second parametera as false while calling setNativeExceptionHandler.
 * The second parameter is an android specific field which stands for forceQuitOnError.
 * When set to false it doesnt quit the app forcefully on error.
 *
 * @see https://github.com/a7ul/react-native-exception-handler#react-native-navigation-wix
 */
setNativeExceptionHandler(nativeErrorCallback, false);

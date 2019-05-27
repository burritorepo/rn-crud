import {
  createStackNavigator
} from 'react-navigation';

import {
  LoginScreen,
  LoginLoadingScreen
} from './components';

const loginRoute = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    LoginLoading: {
      screen: LoginLoadingScreen
    }
  }
);

export {
  loginRoute
}
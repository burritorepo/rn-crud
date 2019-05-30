import {
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import {
  LoginScreen,
  LoginLoadingScreen,
  UserRoute
} from '../features';

const rootRoutes = createSwitchNavigator(
  {
    LoginLoading: {
      screen: LoginLoadingScreen
    },
    App: {
      screen: UserRoute
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'LoginLoading',
  }
);

export {
  rootRoutes
}
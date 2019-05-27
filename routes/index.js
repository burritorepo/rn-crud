import { createSwitchNavigator } from 'react-navigation';

import {
  LoginScreen,
  LoginLoadingScreen,
  UserRoute
} from '../features';

const rootRoutes = createSwitchNavigator(
  {
    LoginLoading: LoginLoadingScreen,
    App: UserRoute,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'LoginLoading',
  }
);

export {
  rootRoutes
}
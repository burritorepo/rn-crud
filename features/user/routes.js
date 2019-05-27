import {
  createStackNavigator
} from 'react-navigation';

import {
  UserScreen,
  UserDetailScreen,
  UserEditScreen
} from './components';

const UserRoute = createStackNavigator(
  {
    User: {
      screen: UserScreen
    },
    UserDetail: {
      screen: UserDetailScreen
    },
    UserEdit: {
      screen: UserEditScreen
    }
  }
);

export {
  UserRoute
}
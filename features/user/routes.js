import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import { HeaderButton } from '../../components'
import {
  UserScreen,
  UserDetailScreen,
  UserEditScreen,
  UserAddScreen
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
    },
    UserAdd: {
      screen: UserAddScreen
    }
  },
  {
    initialRouteName: 'User',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
      title: 'Usuarios',
      headerRight: <HeaderButton />
    },
    headerBackTitleVisible: false
  }
);

export {
  UserRoute
}
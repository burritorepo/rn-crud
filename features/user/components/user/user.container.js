import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { UserService } from '../../../../api';
import { CardUser } from '../index';

const box = StyleSheet.create({
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
  }
});
class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
    //this.userService = new UserService();
  }

  componentDidMount() {
    console.log('didmount!!!')
    //this.getUsers();
  }

  handleDeleteUser(id) {
    this.userService
      .deleteUser(id)
      .then(() => {
        this.getUsers();
      })
  }

  getUsers() {
    // this.userService
    //   .getAllUser()
    //   .then(response => {
    //     this.setState({ users: response })
    //   })
    console.log('this.userService', this.userService)
  }

  render() {
    const users = this.state.users;
    return (
      <View style={box.padding}>
        <Text>Hola</Text>
      </View>
    );
  }
}

export {
  UserScreen
}
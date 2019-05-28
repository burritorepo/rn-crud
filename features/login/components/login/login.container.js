import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const form = StyleSheet.create({
  row: {
    marginBottom: 20
  },
  control: {
    borderColor: '#444',
    borderWidth: 1
  }
})
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }

  handleInputChange(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  render() {
    return (
      <View>
        <View>
          <Text>Login</Text>
        </View>
        <View style={form.row}>
          <Text>Usuario</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'user')}
            value={this.state.text}
          />
        </View>
        <View style={form.row}>
          <Text>Contraseña</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'password')}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

export {
  LoginScreen
}

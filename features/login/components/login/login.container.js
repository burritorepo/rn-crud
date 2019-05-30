import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const form = StyleSheet.create({
  row: {
    marginBottom: 20
  },
  control: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4
  },
  label: {
    fontSize: 14,
    marginBottom: 5
  }
});

const box = StyleSheet.create({
  padding: {
    paddingLeft: 20,
    paddingRight: 20
  },
  alignTop: {
  },
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
  }
});

const color = {
  primary: 'red',
  secondari: 'grey'
};
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

  handleSubmit() {
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={Object.assign({}, box.padding, box.alignCenter)}>
        <View>
          <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>Login</Text>
        </View>
        <View style={form.row}>
          <Text style={form.label}>Usuario</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'user')}
            value={this.state.text}
          />
        </View>
        <View style={form.row}>
          <Text style={form.label}>Contraseña</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'password')}
            value={this.state.text}
          />
        </View>
        <View style={form.row}>
          <Button
            onPress={this.handleSubmit.bind(this)}
            title="Entrar"
            color={color.primary}
          />
        </View>
      </View>
    );
  }
}

export {
  LoginScreen
}

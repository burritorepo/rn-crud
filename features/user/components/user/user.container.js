import React, { Component } from 'react';
import { Text, View } from 'react-native';

class UserScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>UserPage</Text>
      </View>
    );
  }
}

export {
  UserScreen
}

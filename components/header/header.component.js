import React from 'react';
import { Text } from 'react-native';
import { NavigationService } from '../../api/core/navigation.service';
class HeaderButton extends React.Component {
  render() {
    return <Text style={{ fontSize: 12, color: 'white', paddingRight: 10 }} onPress={() => { NavigationService.navigate('UserAdd') }}>Agregar</Text>;
  }
}

export {
  HeaderButton
}
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

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
function CardUser(props) {
  console.log('card!!', props)
  const {
    id,
    name,
    lastname,
    git,
    avatar,
    about,
    handleDeleteUser
  } = props;

  return (
    <View style={box.padding}>
      <Text>CardUser</Text>
    </View>
  );
}

export {
  CardUser
}



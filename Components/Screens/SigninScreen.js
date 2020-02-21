import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SigninScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SigninScreen</Text>
      </View>
    );
  }
}
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

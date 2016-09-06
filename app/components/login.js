/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <Image style={styles.container} resizeMode="stretch" source={require('../images/party.jpg')}>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


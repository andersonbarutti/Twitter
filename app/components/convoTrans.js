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
  ListView,
  View
} from 'react-native';
import Nav from './widgets/nav'
import SndNav from './widgets/sndNav'

export default class ConvoTrans extends Component {
  render() {
    return (
      <Image style={styles.column} source={require('../images/transBack.jpg')} resizeMode="contain" >
      <Nav />
      <SndNav />
      <View style={styles.column} />
      
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  column:{
    flex:1,
    width:null,
    height: null,
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


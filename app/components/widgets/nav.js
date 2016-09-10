/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Nav extends Component {
  render() {
    return (
      <View style={{height:50, backgroundColor:'#01addf', justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
      <TouchableOpacity onPress ={() => this.props.navigator.replace({id:'home'})} style={styles.row}>
      <Icon name = "home" size={20} style={{margin:5, fontWeight:"600"}} color="#fff" />
      <Text style={{color:'#fff', fontSize:12, fontWeight:'800'}}>
      HOME
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
      <Iconz name = "ios-at-outline" size={20} style={{margin:5, fontWeight:"600"}} color="#fff" />
      <Text style={{color:'#fff', fontSize:12, fontWeight:'800'}}>
      CONNECT
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress ={() => this.props.navigator.replace({id:'discover'})} style={styles.row}>
      <Icon name = "search" size={20} style={{margin:5, fontWeight:"600"}} color="#fff" />
      <Text style={{color:'#fff', fontSize:12, fontWeight:'800'}}>
      DISCOVER
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
      <Icon name = "person" size={20} style={{margin:5, fontWeight:"600"}} color="#fff" />
      <Text style={{color:'#fff', fontSize:12, fontWeight:'800'}}>
      ME
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, row:{
    flexDirection:'row',
    alignItems:'center',
    margin:7,
  }
});


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
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
  render() {
    return (
      <Image style={styles.container} resizeMode="stretch" source={require('../images/party.jpg')}>
      <View style={{flex:8, alignItems:'flex-end', justifyContent:'center'}}>
      <View style={{width:((width/2) + 40), padding:5, borderTopLeftRadius:40, borderBottomLeftRadius:40, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center'}}>
      <TouchableOpacity style={styles.circle}>
      <Image source={require('../images/bird.png')} resizeMode="contain" style={{height:30, width:30}} />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontSize:19, margin:12}}>Get Started</Text>
      </View>
      <Image source={require('../images/icon.png')} resizeMode="contain" style={{height:50, width:110, margin:20, alignSelf:'center'}} />
      </View>
      <TouchableOpacity style={{flex:1, backgroundColor:'rgba(0,0,0,0)', alignItems:'center', padding:10}}>
      <Text style={{color:'#e7e7e7', fontSize:17}}>
      Already Have An Account?
      </Text>
      <Text style={{color:'#8dd7ff', fontSize:18}}>
      Sign In
      </Text>
      </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null,

    backgroundColor: '#F5FCFF',
  },
  circle:{
    backgroundColor:'rgba(85,172,239,0.2)',
    height:60,
    width:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,

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


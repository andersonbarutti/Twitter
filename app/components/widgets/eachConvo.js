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

var convo = [
  {
    name: "Alicia Keys",
    date: "15 June",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed libero dictum erat lacinia tristique."
  }
]

export default class ConvoTrans extends Component {
  
  render() {
    return (
      <View style={styles.column} >
      <Image source={require('../../images/alicia.jpg')} resizeMode="stretch" style={{flex:2, height:null, width:null}}>

      </Image>
      <View style={{flex:3, backgroundColor:'rgba(255,255,255,0.4)', borderLeftWidth:1, borderRightWidth:1, borderColor:'#e3e3e3',}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:"#888", margin:10, fontSize:11}}>
      TALKING TO
      </Text>
      <Text style={{color:"#888", margin:10, fontSize:11}}>
      15 june
      </Text>
      </View>
      <Text style={styles.name}>ALICIA KEYS</Text>
      <View style={styles.convo}>
      </View>
      </View>

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
  },convo:{

  },
  column:{
    flex:1,
    width:155,

  },
  name:{
    fontSize:25,
    margin:5,
    marginBottom:0,
    marginTop:0,
    fontWeight:'900',
    color:'#333'
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


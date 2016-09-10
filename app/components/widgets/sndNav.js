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
  ScrollView,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

props = {
  pinned : 16,
  talking: 5,
  media: 213,
  messages: 3
}

export default class SndNav extends Component {
  render() {
    return (
      <View style={{height:50, backgroundColor:'#222', justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
      <View style={{flex:2}}>
      <Text style={{color:'#fff', fontWeight:'900', fontSize:12, marginLeft:10}}>@RADDEVIANT</Text>
      </View>
      <ScrollView horizontal ={true} style={{flex:5}}>
      <TouchableOpacity style={styles.row} onPress ={() => this.props.navigator.replace({id:"convoTrans"})}>
            <Text style={{color:'#fff', fontWeight:'500', fontSize:11, marginLeft:5}}>TALKING TO </Text>
            <Text style ={{color:'#01addf', fontSize:11}}>({props.talking})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress ={() => this.props.navigator.replace({id:'visualize'})}>
            <Text style={{color:'#fff', fontWeight:'400', fontSize:11, marginLeft:5}}>PINNED TWEETS </Text>
            <Text style ={{color:'#01addf', fontSize:11}}> ({props.pinned})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress ={() => this.props.navigator.replace({id:'gallery'})} style={styles.row}>
            <Text style={{color:'#fff', fontWeight:'400', fontSize:11, marginLeft:5}}>PHOTOS & VIDEOS </Text>
            <Text style ={{color:'#01addf', fontSize:11}}> ({props.media})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress ={() => this.props.navigator.replace({id:'chat'})}>
            <Text style={{color:'#fff', fontWeight:'400', fontSize:14, marginLeft:5}}>You have</Text>
            <Text style ={{color:'#01addf', fontSize:14}}> ({props.messages}) new</Text>
            <Text style={{color:'#fff', fontWeight:'400', fontSize:14, marginLeft:5}}>messages</Text>

      </TouchableOpacity>
      </ScrollView>
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


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
  ScrollView,
  Image,
  ListView,
  View
} from 'react-native';
import Nav from './widgets/nav'
import SndNav from './widgets/sndNav'
import EachConvo from './widgets/eachConvo'


var rihanna = require('../images/rihanna.jpg')
var kanye = require('../images/kanye.jpg')
var alicia = require('../images/alicia.jpg')
var pharell = require('../images/pharell.jpg')
var miley = require('../images/miley.jpg')
var geasy = require('../images/geasy.jpg')

export default class ConvoTrans extends Component {

  render() {
    return (
      <Image style={styles.column} source={require('../images/transBack.jpg')} resizeMode="contain" >
          <Nav {...this.props} />
      <SndNav {...this.props} />
      <View style = {{flex:1, flexDirection:'row'}}>
      <View style={styles.column} />
      <ScrollView style ={{flex:3, backgroundColor:'#fff', shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }}} horizontal={true} >
      <EachConvo username="@aliciakeys" name="ALICIA KEYS" image = {alicia} />
      <EachConvo username="@akanyewest" name="KANYE WEST" image = {kanye} />
      <EachConvo username="@apharell" name="PHARELL" image = {pharell} />
      <EachConvo username="@geasy" name="GEASY" image = {geasy} />
      <EachConvo username="@amileycyrus" name="MILEY CYRUS" image = {miley} />
      </ScrollView>
      </View>
      
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
    flex:2,
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


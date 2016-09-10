import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Login from './login'
import Home from './home'
import Convo from './convo'
import Gallery from './gallery'
import ConvoTrans from './convoTrans'
import Tweets from './tweets'
import Discover from './discover'
import Visualize from './visualize'
import Pinned from './pinned'
import Profile from './profile'
import Chat from './chat'




export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'login') {
      return (
        <Login
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'convo') {
      return (
        <Convo
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'gallery') {
      return (
        <Gallery
        {...this.props} 
        navigator={navigator} />
        );
    }if (routeId === 'discover') {
      return (
        <Discover
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'convoTrans') {
      return (
        <ConvoTrans
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'tweets') {
      return (
        <Tweets
        {...this.props} 
        navigator={navigator} />
        );
    }
     if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'visualize') {
      return (
        <Visualize
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'chat') {
      return (
        <Chat
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'pinned') {
      return (
        <Pinned
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'profile') {
      return (
        <Profile
        {...this.props} 
        navigator={navigator} />
        );
    }
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'home', name: 'home'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}

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
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Nav from './widgets/nav'
import SndNav from './widgets/sndNav'

import Icon from 'react-native-vector-icons/MaterialIcons';


// This view needs a ton of algorithms to generate custom fits for images. I'm a bit lazy, so I'm going to make it all static
// If you like things perfect, feel free to come in here and modify. I'll actually apprciate that a lot.

// There should also be a listview here instead of the scrollview. I know I know
var black = "rgba(0,0,0,0.6)";
var blue = "rgba(0,185,242,0.6)"

var julian = require('../images/discover/julian.png')
var archer = require('../images/discover/archer.png')
var ironman = require('../images/discover/ironman.png')
var jour = require('../images/discover/jour.png')
var couple = require('../images/discover/couple.png')
var gary = require('../images/discover/gary.png')
var house = require('../images/discover/house.png')
var childish = require('../images/discover/childish.png')
var casey = require('../images/discover/casey.png')
var cali = require('../images/discover/californication.png')

var data =[
{
  color:black,
  user: "projectX",
  tweet:'We justs want a half decent party',
  image: ironman,
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:blue,
    user: "childish",
  tweet:'Been grinding my whole life, Ni**a',
  image: childish ,
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:black,
  tweet:'I want you to keep doubting. Lets see what happens.',
  image: gary,
    user: "garyvee",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:blue,
  tweet:"Hahaha James Bond? No I'm not like James Bond",
  image: archer,
    user: "archerfx",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},

{
  color:blue,
  tweet:'@mercedes Thanks for the car you guys',
  image: casey,
    user: "caseyneistat",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:black,
  tweet:'Welcome to the new economy!',
  image: house,
    user: "houseoflies",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:black,
  tweet:"We're a positive spin on child soldiers... sort of",
  image: jour,
    user: "jourmungand",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:blue,
  tweet:"I've got nothing to say",
    user: "juliancasablancas",
  image: julian,
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
{
  color:blue,
  tweet:"Every new begining is some other new begining's end",
  image: cali,
    user: "californication",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},{
  color:black,
  tweet:"We're just really good friends",
  image: couple,
    user: "childish",
  date: "june 5",
  retweets: "23,535",
  favourites: "1,661"
},
]
export default class Discover extends Component {
  
  square(x){

  }

  eachTweet(x, y){
    var iconColorX
    var locationColorX
    var iconColorY
    var locationColorY
    var blueI = "rgba(0,185,242,1)"

    if(x.color == black){
      iconColorX = "#e3e3e3"
      locationColorX = blueI
    }else{
      iconColorX = "#fff"
      locationColorX = "#fff"
    }
  
    if(y.color == black){
      iconColorY = "#e3e3e3"
      locationColorY = blueI
    }else{
      iconColorY = "#fff"
      locationColorY = "#fff"
    }
  
    return(
      <View style={{flex:1, width:width-50, height:height-100}}>
      <Image source = {x.image} resizeMode='stretch' style={{position:"absolute", height:height-100, width:width-50, alignItems:'flex-end'}}>
      <View style={{backgroundColor:x.color, height:110, width:150, }}>
        <View style={{flex:2, flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
      <Icon name="location-on" size={21} color={locationColorX }/>
      <View style={{ flexDirection:'row'}}>
      <Icon name="reply" size={18} color={iconColorX} style={{margin:2}} />
      <Icon name="repeat" size={18} color={iconColorX} style={{margin:2}} />
      <Icon name="star" size={18} color="#fff" style={{margin:2}} />
        </View>
        </View>
      <View style={{flex:1, flexDirection:'row'}}>
      </View>
      <View style={{flex:5, justifyContent:'center'}}>
      <Text style={{marginLeft:10, color:"#fff", fontWeight:'700', fontSize:12}}>@{x.user}</Text>
      <Text style={{margin:10, color:"#fff", fontWeight:'600', fontSize:11}}>{x.tweet}</Text>

      </View>
      </View>
      </Image>
      <Image source = {y.image} resizeMode='stretch' style={{position:"absolute", height:height-100, width:width-50, justifyContent:'flex-end'}}>
      <View style={{backgroundColor:y.color, height:110, width:150}}>
      <View style={{flex:2, flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
      <Icon name="location-on" size={21} color={locationColorY }/>
      <View style={{ flexDirection:'row'}}>
      <Icon name="reply" size={18} color={iconColorY} style={{margin:2}} />
      <Icon name="repeat" size={18} color={iconColorY} style={{margin:2}} />
      <Icon name="star" size={18} color="#fff" style={{margin:2}} />
        </View>
        </View>
      <View style={{flex:5, justifyContent:'center'}}>
      <Text style={{marginLeft:10, color:"#fff", fontWeight:'700', fontSize:12}}>@{y.user}</Text>
      <Text style={{margin:10, color:"#fff", fontWeight:'600', fontSize:11}}>{y.tweet}</Text>

      </View>
      </View>
      </Image>
      </View>
      )
  }  

// Done
  render() {
    return (
      <View style={{flex:1}}> 
      <Nav {...this.props}/>
      <SndNav {...this.props}/>
      <ScrollView horizontal ={true} style={styles.container}>
      {this.eachTweet(data[4],data[5])}
     {this.eachTweet(data[0],data[1])}
     {this.eachTweet(data[2],data[3])}
     {this.eachTweet(data[6],data[7])}
     {this.eachTweet(data[8],data[9])}
     
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null,
    flexDirection:'row',
    backgroundColor: '#F5FCFF',

}}
);


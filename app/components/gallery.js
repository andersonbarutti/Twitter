/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Nav from './widgets/nav'
import SndNav from './widgets/sndNav'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
var image1 = require('../images/image1.jpg')
var image2 = require('../images/image2.jpg')
var image3 = require('../images/image3.jpg')
var image4 = require('../images/image4.jpg')
var image5 = require('../images/image5.jpg')
var image6 = require('../images/image6.jpg')
var image7 = require('../images/image7.jpg')
var image8 = require('../images/image8.jpg')
var image9 = require('../images/image9.jpg')
var image10 = require('../images/image10.jpg')

var count = 1;

var images = [{
  image:image1,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image2,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image3,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image4,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image5,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image6,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image7,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image8,
  tweet:'Thanks for comming in @Rihanna'
},
{
  image:image9,
  tweet:'Thanks for comming in @Rihanna'
},{
  image:image10,
  tweet:'Thanks for comming in @Rihanna'
}
]


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Gallery extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(images),
    }
  }

  blueBlock(x){
    return(
      <View style={{flex:1, backgroundColor:'#01addf'}}>
      <View style={{flex:2, flexDirection:'row', padding:20, paddingTop:0, paddingBottom:0, justifyContent:'space-between', alignItems:'center'}}>
      <Image source={require('../images/bird.png')} resizeMode="contain" style={{height:30, width:30}} />
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity><Icon name="reply" size={18} color="#fff" style={{marginLeft:10}} /></TouchableOpacity>
      <TouchableOpacity><Icon name="repeat" size={18} color="#fff" style={{marginLeft:10}} /></TouchableOpacity>
      <TouchableOpacity><Icon name="star" size={18} color="#fff" style={{marginLeft:10}} /></TouchableOpacity>
      </View>
      </View>
      <View style={{flex:8, justifyContent:'space-between'}}>
      <View style={{margin:20}}>
      <Text style={{color:'#fff', fontWeight:'700'}}>Vogue</Text>
      <Text style={{color:'#fff'}}>@Vogue</Text>
      </View>
      <View style={{margin:20}}>
      <Text style={{color:'#fff', fontWeight:'300'}}>15 June</Text>
      <Text style={{color:'#fff', fontWeight:'700'}}>{x.tweet}</Text>
      </View>
      </View>
      </View>
      )
  }

  eachBlock(x){
    if(count % 2){
      count++;
        return(
          <View style={{height:height-100, width:width-160}}>
          <Image source ={x.image} style ={{flex:1, width:null, height:null}} resizeMode="stretch" />
          {this.blueBlock(x)}
          </View>
          )}else{
          count++
          return(
          <View style={{height:height-100, width:width-160}}>
          {this.blueBlock(x)}
          <Image source ={x.image} style ={{flex:1, width:null, height:null}} resizeMode="stretch" />
          
          </View>
          )
        }
  }

  render() {
    return (
      <View style={styles.container}>
      <Nav {...this.props} />
      <SndNav {...this.props} />
      <ScrollView>
      <ListView
      horizontal = {true}
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachBlock(rowData)}
      style = {{flex:1}}
       />
       <ListView
      horizontal = {true}
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachBlock(rowData)}
      style = {{flex:1}}
       />
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

}}
);


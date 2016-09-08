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
  TouchableOpacity,
  Image,
  ListView,
  View
} from 'react-native';

var rihanna = require('../../images/rihanna.jpg')
var kanye = require('../../images/kanye.jpg')
var alicia = require('../../images/alicia.jpg')
var pharell = require('../../images/pharell.jpg')
var miley = require('../../images/miley.jpg')
var geasy = require('../../images/geasy.jpg')

import Icon from 'react-native-vector-icons/MaterialIcons';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ConvoTrans extends Component {
  constructor(props){
    super(props)

    var convo = [
  {
    name: this.props.name,
    date: "15 June",
    usernmae: this.props.username,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed libero dictum erat lacinia tristique.",
    image: this.props.image
  },
   {
    name: "Rihanna",
    date: "16 June",
    usernmae: "@aRihanna",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed libero dictum erat lacinia tristique.",
    image: rihanna
  }, {
    name: this.props.name,
    date: "16 June",
    usernmae: this.props.usernmae,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed libero dictum erat lacinia tristique.",
    image: this.props.image
  },
  {
    name: "Rihanna",
    date: "16 June",
    usernmae: "@aRihanna",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed libero dictum erat lacinia tristique.",
    image: rihanna
  },
]

    
        this.state = {
      dataSource: ds.cloneWithRows(convo)
    }
  }

  eachTweet(x){
    return(
      <TouchableOpacity style={{flex:1, height:130, padding:10, borderBottomWidth: 1, borderColor:'rgba(0,0,0,0.05)'}}>
      <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
      <Image source={x.image} resizeMode='contain' style={{height:40, width:40, borderRadius:20, margin:5}} />
      <View>
      <Text style={{fontWeight:'700', fontSize:11, color:'#555'}}>{x.name}</Text>
      <Text style={{fontWeight:'500', fontSize:11, color:'#555'}}>{x.usernmae}</Text>
      </View>
      </View>
      <View style={{flexDirection:'row', flex:1}}>
      <Text numberOfLines ={3} style = {{margin:5, flex:1, fontSize:11, color:'#555'}}>{x.message}</Text>
      </View>
      </TouchableOpacity>
      )
  }
  
  render() {
    return (
      <View style={styles.column} >
      <Image source={this.props.image} resizeMode="stretch" style={{flex:2, height:null, width:null, flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end'}}>
      <TouchableOpacity style={styles.icons}>
      <Icon name="reply" color="#fff" style={{margin:5}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icons}>
      <Icon name="repeat" color="#fff" style={{margin:5}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icons}>
      <Icon name="move-to-inbox" color="#fff" style={{margin:5}} />
      </TouchableOpacity>
 
      <TouchableOpacity style={{ width:22,
         height:22,
         borderRadius:11,
         margin:5,
         backgroundColor:'#01addf'}}>
      <Icon name="star" color="#fff" style={{margin:5}} />
      </TouchableOpacity>
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
      <Text style={styles.name}>{this.props.name}</Text>
      <ListView style={styles.convo} 
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachTweet(rowData)}
      />
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
    flex:1
  },
  column:{
    flex:1,
    width:155,
    backgroundColor:'#fff',
    marginLeft:-3,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }


  },
  icons:{
    width:22,
    height:22,
    borderRadius:11,
    margin:5,
    backgroundColor:'#c7c7c7'
  },
  name:{
    fontSize:24,
    margin:20,
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


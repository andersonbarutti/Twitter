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
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';

var {height, width} = Dimensions.get('window');
var hasAnimated = false

var music = [
{
  name:"Diamonds",
  views:225512,
  selected: true
},{
  name:"Numb",
  views:165425,
  selected: false
},{
  name:"Pour It Up",
  views:35215,
  selected: false
},{
  name:"Right Now",
  views:55423,
  selected: false
},{
  name:"Jump",
  views:174842,
  selected: false
},{
  name:"Lovee Song",
  views:74849,
  selected: false
},
{
  name:"What Now",
  views:67415,
  selected: false
},{
  name:"Stay",
  views:89537,
  selected: false
},{
  name:"Presh Out The Runaway",
  views:53184,
  selected: false
},{
  name:"Nobody's Business",
  views:32461,
  selected: false
},{
  name:"Get It Over With",
  views:225512,
  selected: false
},{
  name:"Love Without Tragedy",
  views:111648,
  selected: false
},
]

var val = 10
var rotateVal = 0;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Visualize extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(music)
    }
  }
  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    setInterval(() =>
    {this.animation()}, 8000 )
  }

  animation(){
    if(!hasAnimated){
      hasAnimated = true
      Animated.timing(this._animatedValue, {
            toValue: 250,
            duration: 3000
        }).start(); 

    }else{
      Animated.timing(this._animatedValue, {
            toValue: 0,
            duration: 3000
        }).start(); 

      hasAnimated = false
    }
  }

  eachNode(x){
    val = val -10;
    rotateVal = rotateVal + 32;
    var rotateValS = rotateVal + "deg";
    if(!x.selected){
        return(<View style ={{position:'absolute', flexDirection:'row', top:325, left:110, width:140, height:50, transform: [{rotate: rotateValS}]}}>
          <View style ={{marginLeft:140, flexDirection:'row'}}>
          <Text style ={{color:"#fff", transform: [{rotate: "181deg" }]}}>{x.name}</Text>
          <Text style ={{color:"#00b6e9", transform: [{rotate: "181deg" }]}}>( {x.views} )</Text>
          </View>
       </View>)   }else{
        return(<View style ={{position:'absolute', flexDirection:'row', top:350, left:110, width:140, height:50, transform: [{rotate: rotateValS}]}}>
          <View style ={{marginLeft:140, flexDirection:'row'}}>
          <Text style ={{color:"#fff", fontWeight:'600', fontSize:20,  transform: [{rotate: "181deg" }]}}>{x.name}</Text>
          <Text style ={{ fontWeight:'500', color:'#00b6e9', fontSize:20,transform: [{rotate: "181deg" }]}}>( {x.views} )</Text>
          </View>
       </View>)   }

  }

  render() {
      var interpolatedRotateAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Image style={styles.container} resizeMode="stretch" source={require('../images/rihannaBack.jpg')}>
      <Image style={styles.container} resizeMode="stretch" source={require('../images/backOverlay.png')}>
      <View style={styles.column}></View>
      <View style={{flex:2,}}>
      <Animated.View  style={{ width:500, height:700, alignItems:'center', justifyContent:'center', transform: [{rotate: interpolatedRotateAnimation}]}}>
            
          <ListView
      dataSource = {this.state.dataSource}
      style ={{height:400, width:400 }}
      contentContainerStyle = {{alignItems:'center', justifyContent:'center',width:400, height:400,}} 
      renderRow = {(rowData) => this.eachNode(rowData)}
      />

            </Animated.View>

      </View>
      </Image>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null,
    flexDirection:'row'
  },
  column:{
    flex:1,
    justifyContent:'center'
  }
  
});


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
  name:"Loveeeeee Song",
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
    {this.animation()}, 6000 )
  }

  animation(){
    if(!hasAnimated){
      hasAnimated = true
      Animated.timing(this._animatedValue, {
            toValue: 200,
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
    rotateVal = rotateVal + 36;
    var rotateValS = rotateVal + "deg";
    return(<View style ={{position:'absolute', flexDirection:'row', top:100, left:100, width:10, height:50, transform: [{rotate: rotateValS}]}}>
      <Text style ={{color:"#fff", textAlign:'right'}}>A</Text>
   </View>)   
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
      <View style={styles.column}>
      <Animated.Image source={require('../images/spinner.png')} resizeMode="contain" style={{width:280, height:280, transform: [{rotate: interpolatedRotateAnimation}]}}>
            
          <ListView
      dataSource = {this.state.dataSource}
      style ={{height:500, width:500, marginLeft:-50 }}
      contentContainerStyle = {{alignItems:'center', justifyContent:'center',width:250, height:200,}} 
      renderRow = {(rowData) => this.eachNode(rowData)}
      />

            </Animated.Image>

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


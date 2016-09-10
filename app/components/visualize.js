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
import Nav from './widgets/nav'
import SndNav from './widgets/sndNav'

var {height, width} = Dimensions.get('window');
var hasAnimated = false

var calender =[
{name: "OCT", selected:false}, 
{name: "SPET", selected:false}, 
{name: "AUG", selected:false},
{name: "JULY", selected:false}, 
{name: "JUNE",  selected:false},
{name: "MAY", selected:false}, 
{name: "APR", selected:false}, 
{name: "MAR", selected:false}, 
{name: "FEB", selected:false}, 
{name: "JAN", selected:false},
];
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
var rotateVal = -30;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Visualize extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(music),
      calender: ds.cloneWithRows(calender),
    }
  }
  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animation()
  }

  animation(){
    if(!hasAnimated){
      hasAnimated = true
      Animated.timing(this._animatedValue, {
            toValue: 350,
            duration: 38000
        }).start(); 

    }else{
      Animated.timing(this._animatedValue, {
            toValue: 0,
            duration: 3000
        }).start(); 

      hasAnimated = false
    }
  }

  calenderRow(x){
    return(<TouchableOpacity style={{flexDirection:'row', margin:5,}}>
      <View style={{height:1, alignSelf:'center', width:40, margin:10, backgroundColor:'#036487'}} />
      <Text style={{color:'#e3e3e3', fontSize:11, alignSelf:'center'}}>{x.name}</Text>
      </TouchableOpacity>)
  }

  eachNode(x){
    val = val -10;
    rotateVal = rotateVal + 30;
    var rotateValS = rotateVal + "deg";
    if(!x.selected){
        return(<TouchableOpacity onPress={() => this.animation()} style ={{position:'absolute', flexDirection:'row', top:320, left:160, width:160, height:50, transform: [{rotate: rotateValS}]}}>
          <View style ={{marginLeft:140, flexDirection:'row'}}>
          <Text style ={{color:"#fff", transform: [{rotate: "182deg" }]}}>{x.name}</Text>
          <Text style ={{color:"#00b6e9", transform: [{rotate: "182deg" }]}}>  ( {x.views} )  </Text>
          </View>
       </TouchableOpacity>)   }else{
        return(<View style ={{position:'absolute', flexDirection:'row', top:310, left:160, width:160, height:50, transform: [{rotate: rotateValS}]}}>
          <View style ={{marginLeft:140, flexDirection:'row'}}>
          <Text style ={{color:"#fff", fontWeight:'600', fontSize:20,  transform: [{rotate: "180deg" }]}}>{x.name}</Text>
          <Text style ={{ fontWeight:'500', color:'#00b6e9', fontSize:20,transform: [{rotate: "180deg" }]}}> ( {x.views} ) </Text>
          </View>
       </View>)   }

  }

  render() {
      var interpolatedRotateAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Image style={{flex:1, width:null, height:null}} resizeMode="stretch" source={require('../images/rihannaBack.jpg')}>
      <Nav {...this.props} />
      <SndNav {...this.props} />
      <Image style={styles.container} resizeMode="stretch" source={require('../images/backOverlay.png')}>
      <View style={styles.column}>
      <Text style={styles.year}>
      2012
      </Text>
          <ListView 
      dataSource = {this.state.calender}
      renderRow = {(rowData) => this.calenderRow(rowData)}/>
      <Text style={styles.year}>
      2013
      </Text>
      <ListView 
      dataSource = {this.state.calender}
      renderRow = {(rowData) => this.calenderRow(rowData)}/>
      </View>
      <View style={{flex:2,}}>
      <Animated.View  style={{ width:500, height:700, alignItems:'center', justifyContent:'center', transform: [{rotate: interpolatedRotateAnimation}]}}>
            
          <ListView
      dataSource = {this.state.dataSource}
      style ={{height:400, width:500 }}
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
  year:{
    color:'#00c2fe',
    fontWeight:'600',
    fontSize:18,
    margin: 10,
    marginTop:30
  },
  column:{
    flex:1,
    justifyContent:'center'
  }
  
});


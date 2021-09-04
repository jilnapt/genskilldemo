import  React,{Component} from 'react';
import {  View, Text,StyleSheet,Image,TouchableOpacity,SafeAreaView, ScrollView, Button, Alert, TouchableHighlightBase} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherI from 'react-native-vector-icons/Feather'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { GestureResponderEvent } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './Profile';
import { TouchableHighlight } from 'react-native';
  const Home =({navigation})=>{
  
    return(
     
   
      <View><ScrollView>

        <View style={styles.container}>
       
            <View style={styles.top}>
                <FeatherI name="menu" size={24} color="orange" style={{ color: "white", marginLeft: 16, position: 'absolute', marginTop: 14 }} />
                
                <Text style={{ backgroundColor: "red", justifyContent: 'center', fontSize: 2, textAlign: 'center', width: 18, height: 16, borderRadius: 8, borderWidth: 1, borderColor: 'red', borderStyle: 'solid', marginTop: 13, position: "absolute", marginLeft: 10 }}></Text>
                <Text style={{ color: "white", marginTop: 14, position: "absolute", fontSize: 11, marginLeft: 12 }}>23</Text>
                <TouchableOpacity style={styles.button1} ><Text style={{paddingLeft:6.5,marginTop:6.5,position:"absolute"}}>
                <FontAwesome name="user-o" size={16} color="orange" /></Text>
                </TouchableOpacity>
                
                <View style={styles.ovalbox}>
                
                    <Text style={styles.text}>Hi mubeena,{"\n"}Welcome to Genskill</Text>
                    <Image
            style={{marginLeft: 32, marginTop: 98, position: 'absolute',height:46,width:43 }}
            source={require('../../../imgs/img3.3.jpg')} />
                    <Text style={{ color: "black", marginTop: 17, marginLeft: 80 }}>0</Text>
                    <Text style={{ color: "grey", marginLeft: 80 }}>Genskill Points</Text>
                    <Image
            style={{ height: 139, width: 138, marginLeft: 276, marginTop: 30, position: 'absolute' }}
            source={require('../../../imgs/img2.1.png')} />
                </View>

                <View style={styles.smallbox}>
                    <Text style={styles.text1}>Complete Referral Now!</Text>
                    <Text style={{ color: "black", fontSize: 14.5, paddingTop: 51, position: 'absolute' }}>{"     "}Complete your<Text style={{ color: "orange" }}>{" "}personal information{" "}<Text style={{ color: "black" }}>and get 2{"\n"}{"     "}premium quiz decks for free</Text></Text></Text>
                </View>
                <View style={styles.mark}>
                    <AntDesign name="close" size={24} color="orange" />
                </View> 
                <TouchableOpacity style={styles.butt} onPress={()=> navigation.navigate('Profile')}>
        <Text style={{textAlign:"left",color:"white",fontSize:15}}>Goto Profile</Text></TouchableOpacity>
            {/* <Button title=" Goto Profile" onPress={()=> Alert.alert('Profile')} color="white" ></Button></TouchableHighlight></View>*/}
                  {/* <Text style={{ textAlign: "center", color: "white", fontSize: 15}}>Goto Profile</Text>*/}
                <Text style={styles.text3}>27% complete</Text>
                <View style={styles.percent}></View>
                  <View style={styles.per1}></View>
                <View style={styles.big}>
                
                    <Text style={styles.text2}>Get 12 months unlimited access to all {"\n"}content on Genskill app</Text>
                    </View>
                <Text style={styles.ads}>ADVERTISMENT</Text>
                <Image
          style={{ height: 55, width: 52, marginLeft: 5, marginTop: 428, position: 'absolute' }}
        source={require('../../../imgs/img4.jpg')} />
                <View style={styles.genskill}>
      
                    <Text style={{color:"white",paddingLeft:151,position:'absolute',paddingTop:5,fontSize:20,marginTop:7}}>Gen<Text style={{color:"orange",paddingLeft:4,position:'absolute'}}>skill</Text></Text>
                    <Text style={{ color: "orange", fontSize: 14.5, paddingTop: 42, position: 'absolute',paddingLeft: 32 ,fontWeight:"bold",marginTop:4,marginLeft:12}}>GET<Text style={{ color: "white" }}>{" "}12{" "}<Text style={{ color: "orange",fontWeight:"bold" }}>MONTH'S UNLIMITED ACCESS TO {"\n"}{"      "}ALL CONTENT ON GENSKILL APP{"\n"}
                    <Text style={{color:"white",fontSize:11}}>{"               "}{"\n"}Subscribe now to be PREMIUM Plan and get access to {"\n"}{"             "}all Training courses.Interview Prep Quizes and {"\n"}{"                                "} Placement Assistance</Text></Text></Text></Text>
                   <View style={styles.flat}>
                     <Text style={{color:"white",position:"absolute",marginTop:5,fontSize:12.5,fontWeight:"bold",marginLeft:12}}>FLAT 50% OFF FOR FIRST FEW - ONLY RS.999/-</Text>
                   </View>
              </View></View></View></ScrollView>
                <View style={styles.navi}/>
                
                    <Ionicons name="home-outline" size={30} color="orange" style={{position:"absolute",marginTop:615,marginLeft:62}}/>
                    <View style={{position:"absolute",marginTop:645}}><Text style={styles.text5}>Home</Text></View>
                    <Ionicons name="ios-notifications-outline" size={33} color="orange" style={{position:"absolute",marginTop:615,marginLeft:193}} />
                    <View style={{position:"absolute",marginTop:645}}><Text style={styles.text6}>Notifications</Text></View>
                    <SimpleLineIcons name="event" size={28} color="orange" style={{position:"absolute",marginTop:615,marginLeft:320}}/>
                    <View style={{position:"absolute",marginTop:645}}><Text style={styles.text7}>Events</Text></View>
                    
          </View>
          
    );    
    }
    export default Home;
const styles=StyleSheet.create({ 
  button1:{
    position:'absolute',marginTop:10,width:30,height:30,
    paddingTop:8,marginLeft:368,backgroundColor:'white',
    borderRadius:6,borderWidth: 1,borderColor: 'white'
  },
  but:{
    height: 32,width:120,marginLeft:35,position:"absolute",marginTop:345,
     justifyContent:'flex-start',alignItems:'flex-start'
  },
    scroll:{
      backgroundColor:"green",marginVertical:1,height:1
    },
  container:{
    height:720,width:1,backgroundColor:"white"
  },
  top:{
    backgroundColor:"#722e52",height:50,width:413,position:"absolute"
  },
  ovalbox:{
    marginTop: 50,
  width: 206 * 2,
  height: 180,borderBottomRightRadius:18,
  backgroundColor: 'white',borderBottomLeftRadius:18
  },
  text:{
     fontSize:26,top:14,color:"black",marginLeft:12,height:80
  },
  smallbox:{
    marginTop: 13,
    width: 191* 2,marginLeft:15,borderTopLeftRadius:18,borderTopRightRadius:18,
    height: 150,borderBottomRightRadius:18,marginRight:8,
    backgroundColor: 'white',borderBottomLeftRadius:18
  },
  text1:{
    fontSize:22,top:12,color:"black",marginLeft:19,height:70
  },
  text2:{
    fontSize:15,paddingLeft:6
  },
  text3:{
    fontSize:8,color:"gray",marginLeft:290,marginTop:345,position:'absolute',fontSize:14
  },
  mark:{
    textAlign:'left',marginLeft:343,marginTop:260,position:'absolute',
  },
  button:{
    position:'absolute',marginTop:340,width:110,height:39,
    paddingTop:8,paddingBottom:5,marginLeft:30,marginRight:30,backgroundColor:'#ff6900',
    borderRadius:10,borderWidth: 1,borderColor: '#fff'
  },
  big:{
      marginTop: 20,
      width: 183 * 2,marginLeft:30,paddingTop:22,paddingLeft:29,
      height: 320,borderBottomRightRadius:20,marginRight:8,borderTopLeftRadius:20,borderTopRightRadius:20,
      backgroundColor: 'white',borderBottomLeftRadius:20,marginTop:14
  },
  ads:{
    position:'absolute',marginTop:474,paddingTop:2,marginLeft:67,
    height: 19,backgroundColor:'#fce9e3',fontSize:12,paddingLeft:5,
    borderColor: '#F9DB90',width:100,color:"orange"  
  },
  genskill:{
    position:'absolute',marginTop:510,width:368,marginLeft:29.5,
    height: 195,backgroundColor:'#852048',fontSize:12,
    borderColor: '#F9DB90',color:"orange" 
  },
  flat:{
    position:'absolute',marginTop:150,paddingTop:2,marginLeft:37,
    height: 30,fontSize:12,paddingLeft:5,borderRadius:8,
    borderColor: '#ff9800',width:300,backgroundColor:"#ff9800"
  },
  contentContainer: {
    paddingVertical: 20
  },
  navi:{
    position:'absolute',marginTop:610,width:411,height: 50,backgroundColor:'white',
    borderColor: '#F9DB90',color:"orange",
  },
  text5:{
    color:"orange",fontSize:10,marginLeft:63
  },
  text6:{
    color:"orange",fontSize:10,marginLeft:182
  },
  text7:{
    color:"orange",fontSize:10,marginLeft:320
  },
  percent:{
    position:'absolute',marginTop:363,height:5,width:30,backgroundColor:'brown',
    marginLeft:288, borderRadius:10,borderWidth: 1,borderColor: 'brown'
  },
  per1:{
    position:'absolute',marginTop:362.7,height:5,width:64,backgroundColor:'orange',
    marginLeft:315.5,borderWidth: 1,borderColor: 'orange',borderRadius:10
  },
  butt:{
    height:"15%",width:"17%",position:"absolute",marginLeft:32,marginTop:343,
    borderColor:"gray",padding:2,marginHorizontal:"1%",height:37,borderWidth:.5,
    padding: 5,width:89,borderRadius:7,backgroundColor:"orange"
  }
})

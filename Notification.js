import  React,{Component} from 'react';
import {  View, Text,StyleSheet,Image,TouchableOpacity,SafeAreaView, ScrollView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherI from 'react-native-vector-icons/Feather'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

  export default function App ({navigation}){

    return(
      
   
      <View>
        <ScrollView>
        <View style={styles.container}>
       
            <View style={styles.top}>
                <Text style={{color:"white",fontSize:22,textAlign:"center",paddingTop:7}}>Notifications</Text>
            </View></View></ScrollView></View>
);
}
const styles=StyleSheet.create({ 
 scroll:{
      backgroundColor:"green",marginVertical:1,height:1
    },
  container:{
    height:720,width:1,backgroundColor:"white"
  },
  top:{
    backgroundColor:"#722e52",height:50,width:413,position:"absolute"
  }
})
import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import Profile from './src/components/screen/Profile.js';
import Home from './src/components/screen/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import Testing from './src/components/screen/Testing.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Notification from './src/components/screen/Notification.js';
import Events from './src/components/screen/Events.js';
import { createStackNavigator } from '@react-navigation/stack';
const Tab=createBottomTabNavigator();
 const Stack=createStackNavigator();
 function TabNavigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
  </Stack.Navigator>
  );
}
  export default function App(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen options={{headerShown:false,tabBarActiveTintColor:"orange",tabBarIcon:({focused,Color,size})=>(
          <Ionicons name="home-outline" size={30} color="orange"/>)
        }}
        name="Home " component={Home}/>
      <Tab.Screen options={{headerShown:false,tabBarActiveTintColor:"orange",tabBarIcon:({focused,Color,size})=>(
           <Ionicons name="ios-notifications-outline" size={33} color="orange"/>)
      }}
       name="Notification" component={Profile} />
       <Tab.Screen options={{headerShown:false,tabBarActiveTintColor:"orange",tabBarIcon:({focused,Color,size})=>(
         <SimpleLineIcons name="event" size={28} color="orange"/>)
        }}
       name="Events" component={Events}/>
      </Tab.Navigator>
      
      </NavigationContainer>
       
    ); } 
   
 

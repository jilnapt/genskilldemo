import React,{Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

 export default function Profile  ({navigation}) {
   
    return (

      <ScrollView style={{height:650}}>
        
        <View style={styles.container}>
           
          <View style={styles.top}>
            <AntDesign name="arrowleft" size={25} color="white" style={{ top: 13, marginLeft: 10, position: "absolute" }} />

            <Text style={{ color: "white", fontSize: 23, textAlign: "center", paddingTop: 8 }}>Profile</Text>
            <View style={styles.ovalbox}>
              <Text style={{ color: "#722e52", fontSize: 22, marginLeft: 120, top: 16 }}>mubeena{"\n"}<Text style={{ color: "gray", fontSize: 16 }}>Toc H institute of science and {"\n"}technology{"\n"}</Text></Text>
              <Text style={{ color: "orange", fontSize: 17, position: "absolute", top: 72, marginLeft: 118 }}>{"\n"}Edit Profile</Text>


              <View style={styles.circle}></View>
              <View style={styles.mark}><FontAwesome name="user-o" size={36} color="orange" /></View>
              <View style={styles.circle1}></View>
              <View style={styles.mark1}><EvilIcons name="pencil" size={28} color="orange" /></View>
              <View style={styles.mark2}><EvilIcons name="pencil" size={25} color="orange" /></View>

            </View>
            <View style={styles.ovalbox1}>
              <Text style={{ color: "white", fontSize: 22, marginLeft: 9, top: 16 }}>{"  "}Genskill Leaderboard</Text>
              <View style={styles.circle2}><Text style={{ color: "#722e52", position: "absolute", marginLeft: 14, marginTop: 16, fontSize: 32 }}>MK</Text></View>
              <Text style={{ color: "white", fontSize: 22, position: "absolute", marginLeft: 130, marginTop: 56 }}>mubeena kabeer</Text>
              <Text style={{ color: "orange", fontSize: 17, position: "absolute", marginLeft: 130, marginTop: 86 }}>0 Points</Text>
              <Text style={{ color: "orange", fontSize: 17, position: "absolute", marginLeft: 130, marginTop: 109 }}>Rank #0</Text>
              <Text style={{ color: "orange", fontSize: 18, position: "absolute", marginLeft: 159, marginTop: 149, textAlign: "center" }}>View All</Text>

            </View>
            <View style={styles.mark3}><FontAwesome5 name="award" size={36} color="yellow" style={{ position: "absolute", marginLeft: 69, marginTop: 304 }} />
              <Text style={{ color: "white", fontSize: 14, position: "absolute", marginLeft: 79, marginTop: 307 }}>3</Text></View>
            <View style={styles.ovalbox2}>

              <Text style={{ color: "#722e52", fontSize: 21, position: "absolute", marginTop: 20, marginLeft: 22 }}>Genskill Level: Novice</Text>

              <Text style={styles.sb}></Text>
              <Text style={styles.sb1}></Text>
              <Text style={{
                position: 'absolute', marginTop: 59, marginLeft: 93.3, height: 9, fontSize: 12, paddingLeft: 5,
                borderColor: 'grey', width: 33, height: 11, borderWidth: .6
              }}></Text>
              <Text style={{
                position: 'absolute', marginTop: 59, marginLeft: 129, height: 9, fontSize: 12, paddingLeft: 5,
                borderColor: 'grey', width: 33, height: 11, borderWidth: .7
              }}></Text>
              <Text style={{
                position: 'absolute', marginTop: 59, marginLeft: 165, height: 9, fontSize: 12, paddingLeft: 5,
                borderColor: 'grey', width: 33, height: 11, borderWidth: .7, borderBottomRightRadius: 8, borderTopRightRadius: 8
              }}></Text>
            </View>
            <View style={styles.coin}>
              <Image
                style={{ marginLeft: 18, marginTop: 12, position: 'absolute', height: 53, width: 46 }}
                source={require('../../../imgs/img5.jpg')} />
              <Text style={{ color: "#722e52", fontSize: 20, marginLeft: 69, top: 20 }}>0{"\n"}<Text style={{ color: "gray", fontSize: 15 }}>Lifetime Points</Text></Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: "center", color: "orange", fontSize: 15, fontWeight: "bold" }}>History</Text>
              </TouchableOpacity></View>
              
              <Text style={{ color: "#722e52", fontSize: 17.4, marginLeft: 20, paddingTop: 578, position: "absolute" }}>Suggection to improve score:</Text>  
          
            
              <ScrollView horizontal={true} style={{height:50}}>
                  <View style={{height:50}}>
                   <View style={styles.box1}>
                 <Text style={{ color: "#8b0000", fontSize: 20, position: "absolute", paddingLeft: 14, paddingTop: 10 }}>Complete Courses</Text>
                 
                  <Text style={{ color: "black", fontSize: 15, position: "absolute", paddingTop: 39, paddingLeft: 14 }}>Upskill yourself and become Interview{"\n"}Ready.</Text>
                  <TouchableOpacity style={styles.button1}>
                    <Text style={{ textAlign: "center", color: "orange", fontSize: 15, fontWeight: "bold" }}>Go to Courses</Text></TouchableOpacity>
                  </View>
                
                <View style={styles.box2}>
                  <Text style={{ color: "#8b0000", fontSize: 20, position: "absolute", paddingLeft: 14, paddingTop: 10}}>Complete Quizzes</Text>

                  <Text style={{ color: "black", fontSize: 15, position: "absolute", paddingLeft: 14, paddingTop: 39 }}>Upskill yourself and become Interview{"\n"}Ready.</Text>
                  <TouchableOpacity style={styles.button2}>
                    <Text style={{ textAlign: "center", color: "orange", fontSize: 15, fontWeight: "bold" }}>Go to Courses</Text></TouchableOpacity>
               
                     </View></View></ScrollView></View></View></ScrollView>



    );
  
 }
const styles = StyleSheet.create({
  
  container: {
    height: 780, width: 1, backgroundColor: "white"
  },
  top: {
    backgroundColor: "#722e52", height: 47, width: 429, position: "absolute"
  },
  ovalbox: {
    marginTop: 11,
    width: 206 * 2,
    height: 130, borderBottomRightRadius: 18,
    backgroundColor: 'white', borderBottomLeftRadius: 18
  },
  ovalbox1: {
    marginTop: 16, marginLeft: 12, borderRadius: 12,
    width: 192 * 2,
    height: 180,
    backgroundColor: '#722e52'
  },
  ovalbox2: {
    marginTop: 16, marginLeft: 12, borderRadius: 12,
    width: 192 * 2,
    height: 380,
    backgroundColor: 'white'
  },
  circle: {
    width: 75, position: "absolute", marginTop: 12, marginLeft: 17,
    height: 75,
    borderRadius: 100 / 2,
    backgroundColor: "#ffecb3"
  },
  circle1: {
    width: 35, position: "absolute", marginTop: 50, marginLeft: 62, borderColor: "white",
    height: 35, borderWidth: 4, borderRadius: 100 / 2, backgroundColor: "#d9d9d9"
  },
  circle2: {
    width: 75, position: "absolute", marginTop: 65, marginLeft: 35,
    height: 75, borderRadius: 140 / 2, backgroundColor: "blue"
  },
  mark: {
    position: "absolute", marginLeft: 40, marginTop: 30,
  },
  mark1: {
    position: "absolute", marginLeft: 66, marginTop: 53, color: "red"
  },
  mark2: {
    position: "absolute", marginLeft: 204, marginTop: 92, color: "red"
  },
  sb: {
    position: 'absolute', marginTop: 59, marginLeft: 24, height: 9, backgroundColor: 'orange', fontSize: 12, paddingLeft: 5,
    borderColor: 'grey', width: 32, height: 11, borderTopLeftRadius: 8, borderBottomLeftRadius: 8
  },
  sb1: {
    position: 'absolute', marginTop: 59, marginLeft: 58.3, height: 9, fontSize: 12, paddingLeft: 5,
    borderColor: 'grey', width: 33, height: 11, borderWidth: .8
  },
  coin: {
    position: 'absolute', marginTop: 473, marginLeft: 12.3, height: 14, backgroundColor: "#fff8dc",
    borderColor: 'grey', width: 384, height: 90,
  },
  button: {
    position: 'absolute', marginTop: 29, width: 90, height: 39, backgroundColor: "white",
    paddingTop: 8, paddingBottom: 5, marginLeft: 275, marginRight: 30,
    borderRadius: 10, borderWidth: 1, borderColor: 'orange'
  },
  box1: {
    marginTop: -160, marginLeft: 26, borderRadius: 8, borderColor: "gray", 
    borderWidth: .2, backgroundColor: "white", height: 140, width: 140 * 2, elevation: 4,
    shadowOpacity: 0.5, shadowColor: "gray",
  

  },
  box2: {
    marginTop: 610, marginLeft: 345, borderRadius: 8, position: "absolute", borderColor: "gray", flex: 1,
    borderWidth: .2, backgroundColor: "white", height: 140, width: 150 * 2, elevation: 4,
    shadowOpacity: 0.5, shadowColor: "gray",
    shadowRadius: 60, shadowOffset: { width: 150 * 2, height: 150 }
  },
  button1: {
    position: 'absolute', marginTop: 87, width: 130, height: 39, backgroundColor: "white",
    paddingTop: 8, paddingBottom: 5, marginLeft: 12,
    borderRadius: 7, borderWidth: 1, borderColor: 'orange'
  },
  button2: {
    position: 'absolute', marginTop: 87, width: 130, height: 39, backgroundColor: "white",
    paddingTop: 8, paddingBottom: 5, marginLeft: 12,
    borderRadius: 7, borderWidth: 1, borderColor: 'orange'
  },
  mark3: {
    position: "absolute", marginLeft: 23, color: "yellow"
  }


})
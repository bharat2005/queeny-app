import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Colors from "../../src/constants/Colors";
import LoveLogo from '../../assets/svg/LoveLogo'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';

const MainLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: Colors.MAINPINK, tabBarInactiveTintColor:'gray'}}>
      <Tabs.Screen name="home" 
                  options={{
        tabBarIcon:({size, color})=><AntDesign name="home" size={size -1} color={color} />,
        tabBarLabel:'Home'
      }}  

      />
      <Tabs.Screen name="magzines"
            options={{
        tabBarIcon:({size, color})=><FontAwesome5 name="book-reader" size={size - 5} color={color} />,
           tabBarLabel:'Magzines'
      }}  
      />
      <Tabs.Screen name="love" 
                  options={{
        tabBarIcon:({size, color})=><View style={{height:60, width:60, position:'absolute', bottom:4, overflow:"hidden"}}>
          <LinearGradient style={{height:'100%', width:'100%', borderRadius:30}} colors={[Colors.LIGHTPINK, Colors.MAINPINK, Colors.MAINPINK, Colors.LIGHTPINK]} start={{x:0, y:0}} locations={[0.1,0.4, 0.6,0.9]} end={{x:1, y:1}} >
 <LoveLogo />
          </LinearGradient>
        </View>,
            tabBarLabel:'LOVE'
      }}  
      />
      <Tabs.Screen name="favorite" 
                  options={{
        tabBarIcon:({size, color})=><Entypo name="heart" size={size} color={color} />
      }}  
      />
      <Tabs.Screen name="profile" 
                  options={{
        tabBarIcon:({size, color})=><Ionicons name="person-circle-outline" size={size} color={color} />
      }}  
      />
    </Tabs>
  );
};

export default MainLayout;

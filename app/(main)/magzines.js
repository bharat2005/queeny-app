import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { TabView } from 'react-native-tab-view'
import MagzinesTabView from "../../src/components/Magzines.js/MagzinesTabView";
import { SafeAreaView } from 'react-native-safe-area-context'
import MagzineTabBar from "../../src/components/Magzines.js/MagzineTabBar";


const Magzines = () => {
  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState([
    { title: "All", key: "all" },
    { title: "Hairs", key: "hairs" },
    { title: "Nails", key: "nails" },
    { title: "Eyelashe", key: "eyelash" },
    { title: "Relax", key: "relax" },
  ]);


const renderScene = ({route}) => {
return <MagzinesTabView categoryId={route.key}  />
} 


  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>

      <MagzineTabBar index={index} setIndex={setIndex} routes={routes}  />
    
      <TabView 
      initialLayout={{width:Dimensions.get('screen').width}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      swipeEnabled={true}
      onIndexChange={setIndex}
      renderTabBar={()=> null}
      />
  
    </SafeAreaView>
  );
};

export default Magzines;

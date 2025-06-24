import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useCurrentUser } from '../../src/hooks/user/useCurrentUser'
import { TabView } from 'react-native-tab-view'
import MyHairStyles from '../../src/components/Home/Hairstyles/MyHairStyles'
import MyNailStyles from '../../src/components/Home/NailStyles/MyNailStyles'
import HomeTabBar from '../../src/components/Home/HomeTabBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import HairStyleSearchBar from '../../src/components/Shared/HairStyleSearchBar'
import Colors from '../../src/constants/Colors'


const Home = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {title:'Hairstyles', key:'hairstyles'},
    {title:'Nailstyles', key:'nailstyles'}
  ])


  const renderScene = ({route}) =>{
    switch(route.key){
      case 'hairstyles':
        return <MyHairStyles />
      case 'nailstyles':
        return <MyNailStyles />
    }
  }




  return (
    <SafeAreaView style={{flex:1, backgroundColor:Colors.BACK}} edges={['top']}>

      <HomeTabBar routes={routes} index={index} setIndex={setIndex} />

      <HairStyleSearchBar index={index}/>

      <TabView 
      swipeEnabled={false}
      initialLayout={{width:Dimensions.get('screen').width}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={()=> null}
      
      />
      
    </SafeAreaView>
  )
}

export default Home
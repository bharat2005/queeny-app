import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import FavSalon from '../../src/components/Favorite/FavSalon/FavSalon'
import FavStylist from '../../src/components/Favorite/FavStylist/FavStylist'
import FavHairStyles from '../../src/components/Favorite/FavHairStyles/FavHairStyles'
import FavNailStyles from '../../src/components/Favorite/FavNailStyles/FavNailStyles'
import FavTabHeader from '../../src/components/Favorite/FavTabHeader'

const Favorite = () => {
  const [index, setIndex] = useState(0)
  const [routes, setrRoutes] = useState([
     { title: "Salons", key: "salon" },
    { title: "Stylists", key: "stylist" },
    { title: "HairStyles", key: "hairstyle" },
    { title: "NailStyles", key: "nailstyle" },
  ])

  const renderScene = ({route}) =>{
    switch(route.key){
      case 'salon':
        return <FavSalon />
      case 'stylist':
        return <FavStylist />
      case 'hairstyle':
        return <FavHairStyles />
      case 'nailstyle':
        return <FavNailStyles />
    }
  }


  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>

      <FavTabHeader index={index} setIndex={setIndex} routes={routes} />
      
      <TabView
      swipeEnabled={false}
      initialLayout={{width:Dimensions.get('screen').width}}
      onIndexChange={setIndex}
      navigationState={{routes, index}}
      renderScene={renderScene}
      renderTabBar={()=> null}

      />

    
    </SafeAreaView>
  )
}

export default Favorite
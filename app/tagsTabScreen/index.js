import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { useHairStyleTagsByGroup } from '../../src/hooks/hairstyleTags/useHairStyleTagsByGroup'
import { TabView } from 'react-native-tab-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import TagsTabBar from '../../src/components/TagsTabScreen/TagsTabBar'
import TagsTabView from '../../src/components/TagsTabScreen/TagsTabView'
import Entypo from '@expo/vector-icons/Entypo'
import Colors from '../../src/constants/Colors'

const TagsTabScreen = () => {
   const {group, tagIndex} = useLocalSearchParams()
  const {data, error} = useHairStyleTagsByGroup(group)
      const [index, setIndex] = useState(Number(tagIndex))
      const [routes, setRoutes] = useState([])
      const navigation = useNavigation()

  useEffect(()=>{
    navigation.setOptions({
   
  headerTitleAlign:'center',
  headerTitleStyle:{fontFamily:'medium'},
  title:`# ${group}`,
  headerLeft:()=> <Entypo name="chevron-thin-left" size={24} onPress={()=> router.back()} color={Colors.MAINPINK} />

    })
  },[])
     
      useEffect(()=> {
        if(data){
         setRoutes(data.map(item => ({title:item.label, key: item.label})))
        }

      },[data])

  const renderScene = ({route}) => (
    <TagsTabView tag={route.key} />
  )

  return (
    <SafeAreaView style={{flex:1}} edges={['bottom']}>


    <TagsTabBar routes={routes} index={index} setIndex={setIndex} /> 
      <TabView
      swipeEnabled={true}
      initialLayout={{width:Dimensions.get('screen').width}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderTabBar={()=> null}
      renderScene={renderScene}
      />
    
    </SafeAreaView>
  )
}

export default TagsTabScreen
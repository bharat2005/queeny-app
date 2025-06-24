import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TagList from './TagList/TagList'
import HairLengthList from './HairLengthList/HairLengthList'
import FeatureList from './FeatureList/FeatureList'

const MyHairStyles = () => {
  return (
    <ScrollView style={{flex:1}}>

<View style={{flex:1, gap:32}}>

      <TagList />

      <HairLengthList />

      <FeatureList />

   
</View>   
    </ScrollView>
  )
}

export default MyHairStyles
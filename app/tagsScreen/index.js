import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TagsListGroup from '../../src/components/TagsScreen/TagsListGroup'


const tagGroups = [
    'frequentlysearched',
    "popular",
    "trending"
]

const TagsScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>

      

        <FlatList 
        data={tagGroups}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item, index})=>< TagsListGroup group={item} index={index} />}
        />
     
    </View>
  )
}

export default TagsScreen
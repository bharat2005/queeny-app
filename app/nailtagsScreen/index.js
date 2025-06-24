import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NailTagsListGroup from '../../src/components/TagsScreen/NailTagsListGroup'


const tagGroups = [
    'frequentlysearched',
    "popular",
    "trending"
]

const NailTagsScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>

        <FlatList 
        data={tagGroups}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item, index})=><NailTagsListGroup group={item}  index={index}/>}
        />
     
    </View>
  )
}

export default NailTagsScreen
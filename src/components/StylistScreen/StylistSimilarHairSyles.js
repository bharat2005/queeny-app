import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTagedHairStylesByStylistIdLimit } from '../../hooks/hairstyleStylist/useHairStylesByStylistIdLimit'
import HairStyleCard, {} from '../Shared/HairStyleCard'
import { router } from 'expo-router'
import _ from 'lodash'
import Colors from '../../constants/Colors'

const StylistSimilarHairSyles = ({stylistId, stylistName}) => {
const {data, error} = useTagedHairStylesByStylistIdLimit(stylistId)
const [newData, setNewData] = useState([])

useEffect(()=> {
  if(data){
      setNewData(_.shuffle(data))
  }

},[data])

  return (
    <View style={{width:'100%'}}>

        <FlatList 
        scrollEnabled={false}
        numColumns={3}
        data={newData}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <HairStyleCard  item={item} />}
        />

        <Pressable style={{ marginHorizontal:'auto', marginVertical:18}} onPress={()=> router.push({pathname:'/stylistStylesInfiniteScreen', params:{stylistId, stylistName}})}>
          <Text style={{color:Colors.MAINPINK, fontFamily:'regular',fontSize:16}}>See More</Text>
        </Pressable>

    </View>
  )
}

export default StylistSimilarHairSyles
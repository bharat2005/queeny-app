import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useHairStyleLikesList } from '../../../hooks/hairstyleTags/useHairStyleLikesList'
import HairStyleCard from '../../Shared/HairStyleCard'
import LikesHeaaderCounter from '../../Shared/LikesHeaaderCounter'

const FavHairStyles = () => {
  const {data, error} = useHairStyleLikesList()





  return (
    <View style={{flex:1}}>
      <LikesHeaaderCounter count={data?.length}/>

      <FlatList
        numColumns={3}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index})=> <HairStyleCard item={item} />}
      />
      
 
    </View>
  )
}

export default FavHairStyles
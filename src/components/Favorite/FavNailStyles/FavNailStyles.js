import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NailStyleCard from '../../Shared/NailStyleCard'
import { useNailStyleLikesList } from '../../../hooks/nailStyles/useNailStyleLikesList'
import LikesHeaaderCounter from '../../Shared/LikesHeaaderCounter'

const FavNailStyles = () => {
const {data, error} = useNailStyleLikesList()


  return (
    <View style={{flex:1}}>

            <LikesHeaaderCounter count={data?.length}/>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index})=> <NailStyleCard item={item} />}
      />

    </View>
  )
}

export default FavNailStyles
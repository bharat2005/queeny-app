import { View, Text, FlatList, Dimensions, Pressable, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { userInfiniteHairStylesByTag } from '../../hooks/hairstyleTags/useInfiniteHairStylesByTag'
import { userInfiniteHairStylesByTa2 } from '../../hooks/hairstyleTags/useInfiniteHairStyleByTag2'
import HairStyleCard from '../Shared/HairStyleCard'
import Colors from '../../constants/Colors'

const TagsTabView = ({tag, fromInfinite=false, type}) => {
  const returnFuntion = () => {
    if(fromInfinite){
      return userInfiniteHairStylesByTa2(tag, type)
    } else {
      return userInfiniteHairStylesByTag(tag)
    }
  }
    const {data, error, hasNextPage, fetchNextPage, isFetchingNextPage} = returnFuntion()

  const cleanedList = useMemo(()=>{
    return data?.pages?.flatMap(page => page.list)
  })





  return (
    <View style={{flex:1}}>
        


        <FlatList 
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        numColumns={3}
        ListFooterComponent={isFetchingNextPage &&  <ActivityIndicator color={Colors.MAINPINK}  size='large'style={{height:80}}/> }
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <HairStyleCard item={item} />}
        
        />




    </View>
  )
}

export default TagsTabView
import { View, Text, FlatList, Dimensions, Pressable, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { userInfiniteNailStylesByTag } from '../../hooks/hairstyleTags/useInfiniteNailStylesByTag'
import { userInfiniteNailStylesByTa2 } from '../../hooks/hairstyleTags/useInfiniteNailStyleByTag2'
import NailStyleCard from '../Shared/NailStyleCard'
import Colors from '../../constants/Colors'

const TagsTabView = ({tag, fromInfinite=false, type}) => {
  const returnFuntion = () => {
    if(fromInfinite){
      return userInfiniteNailStylesByTa2(tag, type)
    } else {
      return userInfiniteNailStylesByTag(tag)
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
        numColumns={2}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color={Colors.MAINPURPLE} size={'large'} style={{height:80}} /> : null }
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <NailStyleCard item={item} />}
        
        />




    </View>
  )
}

export default TagsTabView
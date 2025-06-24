import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteHairStyleByCategory } from '../../src/hooks/hairstylecategory/useInfiniteHairStyleByCategory'
import HairStyleCard from '../../src/components/Shared/HairStyleCard'
import HairStyleInfiniteScreenHeader from '../../src/components/Home/Hairstyles/HairStyleInfiniteScreenHeader'
import Colors from '../../src/constants/Colors'

const HairStyleINfinteScreen = () => {
  const {categoryId} = useLocalSearchParams()
  const [currentType, setCurrentType] = useState('popular')
  const {data, error, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteHairStyleByCategory(categoryId, currentType)

  const cleanedList = useMemo(()=>{
    return data?.pages?.flatMap(page => page.list)
  })


  return (
    <View style={{flex:1}}>
  <HairStyleInfiniteScreenHeader categoryId={categoryId} {...{setCurrentType, currentType}} />

    <FlatList 
    numColumns={3}
    onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
    onEndReachedThreshold={0}
    data={cleanedList}
    ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color={Colors.MAINPINK} size={'large'} style={{paddingVertical:30}} /> : null}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={({item, index})=> <HairStyleCard item={item} />}
    />


    </View>
  )
}

export default HairStyleINfinteScreen
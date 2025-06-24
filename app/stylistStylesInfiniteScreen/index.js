import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useInfiniteHairStylesByStylistId } from '../../src/hooks/hairstyleStylist/useInfiniteHairStylesByStylistId'
import HairStyleCard from '../../src/components/Shared/HairStyleCard'
import StylistStyleInfiniteScreenCounterHeader from '../../src/components/StylistStylesInfiniteScreen/StylistStyleInfiniteScreenCounterHeader'

const StylistStylesInfiniteScreen = () => {
    const {stylistId,stylistName} = useLocalSearchParams()
    const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteHairStylesByStylistId(stylistId)
    const navigation = useNavigation()

    const cleanedList = useMemo(()=>{
        return data?.pages.flatMap(page => page.list)
    })

    
  return (
    <View style={{flex:1}}>


<StylistStyleInfiniteScreenCounterHeader stylistId={stylistId}/>
        <FlatList 
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        numColumns={3}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <HairStyleCard item={item} />}
        />
    
    </View>
  )
}

export default StylistStylesInfiniteScreen
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteHairStylesBySalonId } from '../../src/hooks/hairstyleSalon/useInfiniteHairStylesBySalonId'
import HairStyleCard from '../../src/components/Shared/HairStyleCard'
import SalonStyleInfiniteScreenCounterHeader from '../../src/components/SalonScreen/SalonStyleInfiniteScreenCounterHeader'
import Colors from '../../src/constants/Colors'


const SalonStylesINfiniteScreen = () => {
    const {salonId} = useLocalSearchParams()
     const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteHairStylesBySalonId(salonId)
    
    const cleanedList = useMemo(()=>{
        return data?.pages.flatMap(page => page.list)
    })


    
  return (
    <View style={{flex:1}}>


<SalonStyleInfiniteScreenCounterHeader salonId={salonId} />
        <FlatList 
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        numColumns={3}
        ListFooterComponent={true ? <ActivityIndicator color={Colors.MAINPINK} size={'large'} style={{height:80}}  /> : null}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <HairStyleCard item={item} />}
        />
    
    </View>
  )
}

export default SalonStylesINfiniteScreen
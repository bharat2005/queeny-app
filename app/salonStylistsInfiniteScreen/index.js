import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteHairStylistsBySalonId } from '../../src/hooks/hairStylist/useInfiniteHairStylistBySalonId'
import StylistCard from '../../src/components/Shared/StylistCard'
import SalonStylistInfiniteScreenCounterHeader from '../../src/components/SalonScreen/SalonStylistInfiniteScreenCounterHeader'
import Colors from '../../src/constants/Colors'


const SalonStylistINfinteScrren = () => {
    const {salonId} = useLocalSearchParams()
         const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteHairStylistsBySalonId(salonId)

        
        const cleanedList = useMemo(()=>{
            return data?.pages.flatMap(page => page.list)
        })
    
    
  return (
    <View style={{flex:1}}>
        <SalonStylistInfiniteScreenCounterHeader salonId={salonId}/>
        <FlatList
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        contentContainerStyle={{paddingVertical:12}}
        ListFooterComponent={ isFetchingNextPage ? <ActivityIndicator size={'large'} color={Colors.MAINPINK} style={{height:80}}/> : <View style={{height:30  }} />}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <StylistCard item={item} />}
        />
    </View>
  )
}

export default SalonStylistINfinteScrren
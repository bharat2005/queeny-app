import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteNailStylesBySalonId } from '../../src/hooks/hairstyleSalon/useInfiniteNailStylesBySalonId'
import HairStyleCard from '../../src/components/Shared/HairStyleCard'
import NailSalonStyleInfiniteScreenCounterHeader from '../../src/components/SalonScreen/NailSalonStyleInfiniteScreenCounterHeader'
import NailStyleCard from '../../src/components/Shared/NailStyleCard'
import Colors from '../../src/constants/Colors'


const NailSalonStylesINfiniteScreen = () => {
    const {salonId} = useLocalSearchParams()
     const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteNailStylesBySalonId(salonId)
    
    const cleanedList = useMemo(()=>{
        return data?.pages.flatMap(page => page.list)
    })


    
  return (
    <View style={{flex:1}}>


 <NailSalonStyleInfiniteScreenCounterHeader salonId={salonId} />
        <FlatList 
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        numColumns={2}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color={Colors.MAINPURPLE} size="large" style={{height:80}} /> : null}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <NailStyleCard item={item} />}
        /> 
    
    </View>
  )
}

export default NailSalonStylesINfiniteScreen
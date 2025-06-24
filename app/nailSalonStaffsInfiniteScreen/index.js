import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteNailStaffsBySalonId } from '../../src/hooks/hairStylist/useInfiniteNailStaffsBySalonId'
import StylistCard from '../../src/components/Shared/StylistCard'
import NailSalonStaffsInfiniteScreenCounterHeader from '../../src/components/SalonScreen/NailSalonStaffsInfiniteScreenCounterHeader'
import StaffCard from '../../src/components/Shared/StaffCard'
import Colors from '../../src/constants/Colors'


const NailSalonStaffsINfinteScrrenn = () => {
    const {salonId} = useLocalSearchParams()
         const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteNailStaffsBySalonId(salonId)

        
        const cleanedList = useMemo(()=>{
            return data?.pages.flatMap(page => page.list)
        })
    
   

    
  return (
    <View style={{flex:1}}>
        <NailSalonStaffsInfiniteScreenCounterHeader salonId={salonId}/>
        <FlatList
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator style={{height: 80}} color={Colors.MAINPURPLE} size={'large'} /> : <View style={{height:38}} />}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <StaffCard item={item} />}
        /> 
    </View>
  )
}

export default NailSalonStaffsINfinteScrrenn
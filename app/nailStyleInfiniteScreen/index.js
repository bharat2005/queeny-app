import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useNailStyleInfinite } from '../../src/hooks/nailStyles/useNailStylesInfinite'
import NailStyleCard from '../../src/components/Shared/NailStyleCard'
import NailStyleInfiniteScreenHeader from '../../src/components/Home/NailStyles/NailStyleInfiniteScrren/NailStyleInfiniteScreenHeader'
import Colors from '../../src/constants/Colors'
import { useEffect } from 'react'


const typesSeletor = [
    'popular',
    'trending',
    'newArrivals'
]

const NailStyleInfiniteScreen = () => {
    const {categoryId} = useLocalSearchParams()
    const [currentType , setCurrentType] = useState('popular')
    const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useNailStyleInfinite(categoryId, currentType)
    const navigation = useNavigation()

    useEffect(()=>{
      navigation.setOptions({
        title:categoryId
      })

    },[])


    const cleanedList = useMemo(()=> {
        return data?.pages.flatMap(page => page.list)
    })


   


  return (
    <View style={{flex:1}}>

        <NailStyleInfiniteScreenHeader setCurrentType={setCurrentType} currentType={currentType} typesSeletor={typesSeletor} categoryId={categoryId}/>

        <FlatList  
        onEndReachedThreshold={0}
        numColumns={2}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color={Colors.MAINPURPLE} size="large" style={{height:80}} /> : null}
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        data={cleanedList}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <NailStyleCard item={item} />}
        />
    </View>
  )
}

export default NailStyleInfiniteScreen
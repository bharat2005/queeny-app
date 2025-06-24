import { View, Text, FlatList, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import FavSalonSelector from './FavSalonSelector'
import { useNailSalonLIkesList } from '../../../hooks/hairstyleSalon/useNailSalonLikesList'
import { useHairSalonLIkesList } from '../../../hooks/hairstyleSalon/useHairSalonLikesList'
import { router } from 'expo-router'
import HairSalonLikeButton from '../../Shared/HairSalonLikeButton'
import NailSalonLikeButton from '../../Shared/NailSalonLikeButton'
import LikesHeaaderCounter from '../../Shared/LikesHeaaderCounter'
import LikedSalonCard from '../../Shared/LikedSalonCard'
const FavSalon = () => {
    const [salonType, setSalonType] = useState('hair')

    const returnFunction = () => {
        if(salonType === 'hair'){
            return useHairSalonLIkesList()

        } else if(salonType === 'nail'){
            return useNailSalonLIkesList()

        }
    }
    const {data, error} = returnFunction()

    const renderItem = ({item, index}) => (
        <>
        {

            (salonType === 'hair') ? (
                     <View style={{height:300, width:Dimensions.get('screen').width, padding:2, overflow:'hidden'}}>

            <HairSalonLikeButton salonId={item?.docId} />

            <Pressable onPress={()=> router.push({pathname:'/hairStyleSalonScreen', params:{salonId: item?.docId}})} style={{height:'100%', width:'100%', backgroundColor:'cyan'}}>
                <Text>{JSON.stringify(item)}</Text>
            </Pressable>

        </View>

            ) : (
                     <View style={{height:300, width:Dimensions.get('screen').width, padding:2, overflow:'hidden'}}>

            <NailSalonLikeButton salonId={item?.docId} />

            <Pressable onPress={()=> router.push({pathname:'/nailStyleSalonScreen', params:{salonId: item?.docId}})} style={{height:'100%', width:'100%', backgroundColor:'cyan'}}>
                <Text>{JSON.stringify(item)}</Text>
            </Pressable>

        </View>

            )
        }
        </>

   
    )


  return (
    <View style={{flex:1}}>

        <FavSalonSelector salonType={salonType} setSalonType={setSalonType} />

        <LikesHeaaderCounter count={data?.length}/>

        <FlatList 
        key={salonType}
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={salonType === 'hair' ? ({item, index}) => <LikedSalonCard onPress={()=> router.push({pathname:'/hairStyleSalonScreen', params:{salonId: item?.docId}})} item={item} type={'hair'} /> : ({item, index}) => <LikedSalonCard onPress={()=> router.push({pathname:'/nailStyleSalonScreen', params:{salonId: item?.docId}})} item={item} type={'nail'} />}
        />


     

    </View>
  )
}

export default FavSalon
import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { usenailStylesReviewsSalonPreview } from '../../hooks/hairstyleSalon/usenailStylesReviewsSalonPreview'
import { router } from 'expo-router'

const NailSalonReviewsPreviewSection = ({salonId}) => {
    const {data, error} = usenailStylesReviewsSalonPreview(salonId)

  
    

    const renderItem = ({item, index}) => (
        <View style={{height:280, width:Dimensions.get('screen').width , padding:2}}>
            <Pressable  onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:"100%", backgroundColor:"pink"}}>
                <Text style={{color:'white'}}>{JSON.stringify(item)}</Text>
            </Pressable>
        </View>
    )




  return (
    <View style={{ width:Dimensions.get('screen').width, backgroundColor:'gray', marginVertical:23}}>
     

    <FlatList 
    scrollEnabled={false}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={renderItem}
    data={data}
    />



<View style={{height:50, width:Dimensions.get('screen').width}}>
    <Pressable  onPress={()=> router.push({pathname: '/reviewsNailStyleSalonScreen', params:{salonId}})}   style={{height:'100%', width:80, backgroundColor:'pink', marginHorizontal:'auto'}}>
        <Text style={{color:'red'}}>More</Text>

    </Pressable>

</View>
    




    </View>
  )
}

export default NailSalonReviewsPreviewSection
import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel, {} from 'react-native-reanimated-carousel'
import { useEffect } from 'react'



const SalonCrousal = ({data}) => {

    useEffect(()=> {
        
    })

    const renderItem = ({item, index}) =>(
        <View key={index} style={{height:'100%', width:'100%'}}>
            <Image source={{uri:item}} style={{height:'100%', width:'100%'}} />
        </View>
    )


  return (


        <Carousel 
        data={data?.bannerImages}
        renderItem={renderItem}
        width={Dimensions.get('screen').width}
        height={154}
        loop
        autoPlay
        autoPlayInterval={2500}
        
        />
     

  )
}

export default SalonCrousal
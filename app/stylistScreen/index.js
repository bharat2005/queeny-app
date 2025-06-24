import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useHairStylistById } from '../../src/hooks/hairStylist/useHairStylistById'
import StylistSimilarHairSyles from '../../src/components/StylistScreen/StylistSimilarHairSyles'
import StylistBlogsPreview from '../../src/components/StylistScreen/StylistBlogsPreview'
import StylistReviewsPreview from '../../src/components/StylistScreen/StylistReviewsPreview'
import StylistSalonButton from '../../src/components/StylistScreen/StylistSalonButton'
import StylistLikeButton from '../../src/components/Shared/StylistLikeButton'
import HairStylistBigBox from '../../src/components/Shared/HairStylistBigBox'
import HairStylistDeatilBox from '../../src/components/Shared/HairStylistDeatilBox'
import StylistSimilarStyleBox from '../../src/components/Shared/StylistSimilarStyleBox'
import LongButton from '../../src/components/Shared/LongButton'

const StylistScreem = () => {
    const {stylistId} = useLocalSearchParams()
      const {data, error} = useHairStylistById(stylistId)

   
  return (
    <ScrollView style={{flex:1}}showsVerticalScrollIndicator={false}>

<View style={{width:'100%', gap:18}}>

      <HairStylistBigBox stylistId={stylistId}  data={data}/>

    <HairStylistDeatilBox  data={data} />

    <StylistSimilarStyleBox stylistId={stylistId} />

    
    <StylistBlogsPreview stylistId={stylistId} />

    <StylistReviewsPreview stylistId={stylistId} />



<View style={{paddingHorizontal:12}}>
    <LongButton color='whtie' label='View Salon Details' onPress={()=> router.push({pathname:'/hairStyleSalonScreen', params:{salonId: data?.salonId}})}   />
</View>




</View>










<View style={{height:60}}/>

    </ScrollView>
  )
}

export default StylistScreem
import { View, Text, Dimensions, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useTagHairStyleById } from '../../src/hooks/hairstyleTags/useTagHairStyleById'
import { SafeAreaView } from 'react-native-safe-area-context'
import HairStyleTagsSection from '../../src/components/Home/HairStyleScreen/HairStyleTagsSection'
import HairStyleStylistSection from '../../src/components/Home/HairStyleScreen/HairStyleStylistSection'
import StylistSimilarHairSyles from '../../src/components/StylistScreen/StylistSimilarHairSyles'
import HairStyleSalonSection from '../../src/components/Home/HairStyleScreen/HairStyleSalonSection'
import HairStyleLikeButton from '../../src/components/Shared/HairStyleLikeButton'
import HairStyleScreenHeader from '../../src/components/Shared/HairStyleScreenHeader'
import HairStyleImageSection from '../../src/components/Shared/HairStyleImageSection'
import HairStyleInfoSection from '../../src/components/Shared/HairStyleInfoSection'
import HiarStyleVideoSection from '../../src/components/Shared/HiarStyleVideoSection'

const HairStyleScreen = () => {
    const {id} = useLocalSearchParams()
    const {data, error} = useTagHairStyleById(id)


  return (

    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

      
    <HairStyleScreenHeader hairStyleId={id} />

        <ScrollView>

          {data?.videoUri ? (

       <HiarStyleVideoSection data={data} />
          ): (

 <HairStyleImageSection data={data} />

          )}




        <HairStyleInfoSection data={data} />


         <HairStyleTagsSection data={data} tags={data?.tags}/>
 
        <HairStyleStylistSection stylistId={data?.stylistId} />



        <HairStyleSalonSection salonId={data?.salonId} /> 



<View style={{height:10}}/>

            
        </ScrollView>


     
    </SafeAreaView>
  )
}

export default HairStyleScreen
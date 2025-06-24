import { View, Text, ScrollView, Pressable, Platform, Linking, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useHairStyleSalonById } from '../../src/hooks/hairstyleSalon/useHairstyleSalonById'
import { SafeAreaView } from 'react-native-safe-area-context'
import SalonStylistPreviewSection from '../../src/components/SalonScreen/SalonStylistPreviewSection'
import SalonStylesPreviewSection from '../../src/components/SalonScreen/SalonStylesPreviewSection'
import SalonReviewsPreviewSection from '../../src/components/SalonScreen/SalonReviewsPreviewSection'
import SalonShareButtons from '../../src/components/SalonScreen/SalonShareButtons'
import AntDesign from '@expo/vector-icons/AntDesign';
import HairSalonLikeButton from '../../src/components/Shared/HairSalonLikeButton'
import HairStyleSalonScreenBar from '../../src/components/Shared/HairStyleSalonScreenBar'
import SalonCrousal from '../../src/components/Shared/SalonCrousal'
import SalonNameBox from '../../src/components/Shared/SalonNameBox'
import SalonButtonMenu from '../../src/components/Shared/SalonButtonMenu'
import SalonMainIntroBox from '../../src/components/Shared/SalonMainIntroBox'
import SalonHighLightBox from '../../src/components/Shared/SalonHighLightBox'
import SalonDirectorSection from '../../src/components/Shared/SalonDirectorSection'
import SalonDetailBox from '../../src/components/Shared/SalonDetailBox'
import Colors from '../../src/constants/Colors'

const HairStyleSalonScreen = () => {
    const {salonId} = useLocalSearchParams()
    const {data, error} = useHairStyleSalonById(salonId)





  return (
    <SafeAreaView style={{flex:1}}>

<HairStyleSalonScreenBar salonId={salonId} />
        
      <ScrollView >



    <SalonCrousal data={data} />

    <SalonNameBox data={data} />

    
    <SalonButtonMenu data={data} salonId={salonId} />

    <SalonMainIntroBox  data={data} />


    <SalonHighLightBox data={data} />


<SalonStylistPreviewSection salonId={salonId} />

<SalonStylesPreviewSection  salonId={salonId} />


<SalonDirectorSection data={data} />


<SalonReviewsPreviewSection salonId={salonId}  />


<SalonDetailBox data={data} />


<SalonShareButtons /> 

    <SalonButtonMenu data={data} salonId={salonId} />




        <Pressable style={{ marginHorizontal:'auto', marginVertical:12}} 
        onPress={()=> router.back()} 
            >
          <Text style={{color:Colors.MAINPINK, fontFamily:'regular',fontSize:16}}>Back</Text>
        </Pressable>
    





      </ScrollView>
    </SafeAreaView>
  )
}

export default HairStyleSalonScreen

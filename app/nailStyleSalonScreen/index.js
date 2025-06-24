import { View, Text, ScrollView, Pressable, Platform, Linking, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useNailStyleSalonById } from '../../src/hooks/hairstyleSalon/useNailstyleSalonById'
import { SafeAreaView } from 'react-native-safe-area-context'
import SalonStylistPreviewSection from '../../src/components/SalonScreen/SalonStylistPreviewSection'
import SalonStylesPreviewSection from '../../src/components/SalonScreen/SalonStylesPreviewSection'
import NailSalonReviewsPreviewSection from '../../src/components/Shared/NailSalonReviewsPreviewSection'
import SalonShareButtons from '../../src/components/SalonScreen/SalonShareButtons'
import NailSalonLikeButton from '../../src/components/Shared/NailSalonLikeButton'
import NailStyleSalonScreenBar from '../../src/components/Shared/NailStyleSalonScreenBar'
import SalonCrousal from '../../src/components/Shared/SalonCrousal'
import SalonNameBox from '../../src/components/Shared/SalonNameBox'
import NailSalonButtonMenu from '../../src/components/Shared/NailSalonButtonMenu'
import SalonMainIntroBox from '../../src/components/Shared/SalonMainIntroBox'
import NailSalonMainIntro from '../../src/components/Shared/NailSalonMainIntroBox'
import NailSalonDirectorSection from '../../src/components/Shared/NailSalonDirectorSection'
import NailSalonHighLishtBox from '../../src/components/Shared/NailSalonHighLightBox'
import Colors from '../../src/constants/Colors'


const NailStyleSalonScreen = () => {
     const {salonId} = useLocalSearchParams()
     const {data, error} = useNailStyleSalonById(salonId)





  return (
    <SafeAreaView style={{flex:1}}>

        <NailStyleSalonScreenBar salonId={salonId}  />
       <ScrollView >

<SalonCrousal data={data} />

<SalonNameBox data={data} nail={true}/>


<NailSalonButtonMenu data={data} salonId={salonId}  />


<NailSalonMainIntro data={data} />


<NailSalonHighLishtBox data={data} />


<NailSalonDirectorSection data={data} />

<NailSalonReviewsPreviewSection salonId={salonId} />



<SalonShareButtons />



<NailSalonButtonMenu data={data} salonId={salonId}  />


          <Pressable style={{ marginHorizontal:'auto', marginVertical:12}} 
             onPress={()=> router.back()} 
                 >
               <Text style={{color:Colors.MAINPURPLE, fontFamily:'regular',fontSize:16}}>Back</Text>
             </Pressable>
 



      </ScrollView> 
    </SafeAreaView>
  )
}

export default NailStyleSalonScreen
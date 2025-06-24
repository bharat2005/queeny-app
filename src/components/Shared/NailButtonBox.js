import { View, Text } from 'react-native'
import React from 'react'
import LongButton from './LongButton'
import { router } from 'expo-router'

const NailButtonBox = ({data}) => {
  return (
    <View style={{width:'100%', gap:8, paddingVertical:12, paddingHorizontal:16, backgroundColor:'white'}}>
     
     <LongButton label={'Other design in Salon'} color='whitte'
    onPress={()=> router.push({pathname: '/nailSalonStylesInfiniteScreen', params:{salonId :data?.salonId }})} 
     />

          <LongButton label={'View Salon Details'} color='whitte'
    onPress={()=> router.push({pathname:'/nailStyleSalonScreen', params:{salonId: data?.salonId}})}
     />
    </View>
  )
}

export default NailButtonBox
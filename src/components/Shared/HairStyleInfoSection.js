import { View, Text } from 'react-native'
import React from 'react'
import HairStyleStylistSection from '../Home/HairStyleScreen/HairStyleStylistSection'
import HairStyleStylistSectionMini from '../Home/HairStyleScreen/HairStyleStylistSectionMini'

const HairStyleInfoSection = ({data}) => {
  return (
    <View style={{width:'100%', padding:18, gap:4,paddingHorizontal:20}}>
            <Text style={{fontFamily:'medium', fontSize:18}}>
                {data?.title}
            </Text>

            <Text style={{fontFamily:'light', fontSize:15,color:'gray'}}>
                {data?.desc} {data?.desc}
            </Text>


            <HairStyleStylistSectionMini stylistId={data?.stylistId} />


    </View>
  )
}

export default HairStyleInfoSection
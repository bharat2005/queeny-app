import { View, Text } from 'react-native'
import React from 'react'
import HairStyleStylistSection from '../Home/HairStyleScreen/HairStyleStylistSection'
import HairStyleStylistSectionMini from '../Home/HairStyleScreen/HairStyleStylistSectionMini'

const HairStyleInfoSection = ({data}) => {
  return (
    <View style={{width:'100%', padding:18, gap:0,}}>
            <Text style={{fontFamily:'medium', fontSize:18}}>
                {data?.title}
            </Text>

            <Text style={{fontFamily:'regular', fontSize:12,color:'black'}}>
                {data?.desc} {data?.desc} {data?.desc}
            </Text>

                     <Text style={{fontFamily:'light', fontSize:12,color:'black', marginTop:12}}>
                Registered Salon: {" "}
                    <Text style={{fontFamily:'bold', fontSize:12,color:'black'}}>
       {data?.salonName}
                    </Text>
         
            </Text>


                     <Text style={{fontFamily:'light', fontSize:12,color:'gray', marginTop:4}}>
                {data?.salonAddress}
            </Text>





    </View>
  )
}

export default HairStyleInfoSection
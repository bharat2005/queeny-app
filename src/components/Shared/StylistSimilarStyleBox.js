import { View, Text } from 'react-native'
import React from 'react'
import StylistSimilarHairSyles from '../StylistScreen/StylistSimilarHairSyles'

const StylistSimilarStyleBox = ({stylistId}) => {
  return (
    <View style={{width:'100%', backgroundColor:'white'}}>
                  <View
              style={{
                height: 28,
                paddingHorizontal: 12,
                flexDirection: "row",
                backgroundColor: "#ebd1c2",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
                Stylist Similar
              </Text>
            </View>

            <StylistSimilarHairSyles stylistId={stylistId} />
    </View>
  )
}

export default StylistSimilarStyleBox
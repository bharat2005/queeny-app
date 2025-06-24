import { View, Text, Image } from 'react-native'
import React from 'react'

const SalonDirectorSection = ({data}) => {


  return (
    <View style={{width:'100%'}}>

                              <View
                          style={{
                            height: 28,
                            paddingHorizontal: 12,
                            flexDirection: "row",
                            backgroundColor: "#fecbca",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
                            A Word from Salon
                          </Text>
                        </View>

                        <View style={{width:'100%',paddingVertical:12, paddingHorizontal:14, flexDirection:'row',marginTop:18}}>

                          <View style={{height:'100%', width:'30%'}}>
                            <View style={{width:'100%', height:150, borderRadius:8, borderWidth:0.8, borderColor:'lightgray', overflow:'hidden', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>

                              <Image source={{uri:data?.director?.image}} style={{height:'90%', width:'80%', backgroundColor:'white'}}  />

                            </View>

                          </View>

                          <View style={{height:'100%', flex:1, paddingVertical:6,paddingHorizontal:12}}>
                            <Text style={{fontFamily:'regular', fontSize:16}}>
                                {data?.director?.name}
                            </Text>

                             <Text style={{fontFamily:'light', fontSize:14, color:'gray'}}>
                                    {data?.director?.text}
                            </Text>

                          </View>

                        </View>
        

        
    </View>
  )
}

export default SalonDirectorSection
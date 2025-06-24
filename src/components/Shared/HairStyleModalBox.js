import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'


const faceTypes = [

                         {
        name: 'triangle',
        icon:'triangle-outline'
    },
                {
        name: 'square',
        icon:'square-outline'
    },
        {
        name: 'circle',
        icon:'circle-outline'
    },
        {
        name: 'diamond',
        icon:'diamond-outline'
    },
    {
        name: 'oval',
        icon:'shape-oval-plus'
    },


                 {
        name: 'irregular',
        icon:'triangle-wave'
    },

    
]

const age = ["kid", "younge", "teen", "adult", "old"];

const hairVolumn = ["verylow", "low", "medium", "high", "veryhigh"];

const thickness = ["verythin", "thin", "medium", "thick", "verythick"];

const hairQuality = ["bad", "medium", "good"];

const hairStrength = ["weak", "medium", "stronge"];



const HairStyleModalBox = ({data}) => {
  return (
    <View style={{width:'100%', paddingHorizontal:0, paddingVertical:12, gap:10}}>
        
        <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 FaceType
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {faceTypes.map((item, index)=> (
                    <View key={index} style={{height:44, flex:1, alignItems:'center', backgroundColor:data?.model?.faceType === item?.name ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:4, padding:2}}>
                        <TextInput.Icon icon={item?.icon} style={{marginTop:14}} color={'rgb(163, 163, 163)'} size={24} />
                        <Text style={{fontFamily:'regular', position: 'absoulte', fontSize:8, bottom:-24}}>{item?.name}</Text>
                    </View>
                ))}


            </View>


        </View>


    <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 Quality
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {hairQuality.map((item, index)=> (
                    <View key={index} style={{height:26, flex:1, alignItems:'center', justifyContent:'center', backgroundColor:data?.model?.hairQuality === item ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:2, padding:0}}>
                        <Text style={{fontFamily:'light', fontSize:10}}>{item}</Text>
                    </View>
                ))}


            </View>


        </View>


                   <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 Volume
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {hairVolumn.map((item, index)=> (
                    <View key={index} style={{height:26, flex:1, alignItems:'center', justifyContent:'center', backgroundColor:data?.model?.hairVolumn === item ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:2, padding:0}}>
                        <Text style={{fontFamily:'light', fontSize:10}}>{item}</Text>
                    </View>
                ))}


            </View>


        </View>



             <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 Age
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {age.map((item, index)=> (
                    <View key={index} style={{height:26, flex:1, alignItems:'center', justifyContent:'center', backgroundColor:data?.model?.age === item ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:2, padding:0}}>
                        <Text style={{fontFamily:'light', fontSize:10}}>{item}</Text>
                    </View>
                ))}


            </View>


        </View>

        
        
           <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 Strength
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {hairStrength.map((item, index)=> (
                    <View key={index} style={{height:26, flex:1, alignItems:'center', justifyContent:'center', backgroundColor:data?.model?.strength === item ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:2, padding:0}}>
                        <Text style={{fontFamily:'light', fontSize:10}}>{item}</Text>
                    </View>
                ))}


            </View>


        </View>


                        <View style={{flexDirection:'row', width:"100%"}}>

            <View style={{justifyContent:'center', alignItems:'center', width:'16%'}}>
                <Text style={{fontFamily:'regular', fontSize:10}}>
                 Thick
                </Text>
            </View>

            <View style={{flex:1, flexDirection:"row", gap:2,}}>

                {thickness.map((item, index)=> (
                    <View key={index} style={{height:26, flex:1, alignItems:'center', justifyContent:'center', backgroundColor:data?.model?.thickness === item ? 'lightgray' : 'rgb(243, 243, 243)' , borderRadius:2, padding:0}}>
                        <Text style={{fontFamily:'light', fontSize:10}}>{item}</Text>
                    </View>
                ))}


            </View>


        </View>






    </View>
  )
}

export default HairStyleModalBox
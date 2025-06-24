import { View, Text, Dimensions } from 'react-native'
import React from 'react'


const myBabyArray = [
    {
        name:'Hand/Foot',
        key:'handfoot'
    },
        {
        name:'Length',
        key:'length'
    },
            {
        name:'Base Design',
        key:'baseDesign'
    },
                {
        name:'Color/Colors',
        key:'color'
    },
                    {
        name:'Art Parts',
        key:'artParts'
    },
                        {
        name:'Taste',
        key:'taste'
    },
                            {
        name:'Scene',
        key:'scene'
    },
                                {
        name:'Season',
        key:'season'
    },
                                    {
        name:'Type',
        key:'type'
    },
        
    
    
    
    



]


const NailDetailBox = ({data}) => {
  return (
    <View style={{width:Dimensions.get('screen').width, marginTop:18, backgroundColor:'white'}}>
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
               Nail deatils
             </Text>
             
           </View>



<View style={{marginTop:12}} >

    {myBabyArray.map((item, index) => (

      <View key={index} style={{width:'100%', flexDirection:'row', borderBottomColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:6}}>

        <View style={{height:'100%', width:'25%', padding:8}}>

            <Text style={{fontFamily:'regular', fontSize:12, color:'black'}}>{item.name}</Text>

        </View>

        <View style={{minHeight:50, flex:1, padding:8}}>


            <View style={{flexDirection:'row', gap:6}}>

             <Text style={{fontFamily:'light', fontSize:14, color:'gray'}}>
                {data?.details[item?.key]}
                </Text>

            </View>
 

        </View>

      </View>

    ))}

</View>








    </View>
  )
}

export default NailDetailBox
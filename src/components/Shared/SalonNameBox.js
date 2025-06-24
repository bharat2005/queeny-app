import { View, Text, Pressable, Linking } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Colors from '../../constants/Colors';

const SalonNameBox = ({data, nail=false}) => {
  return (
    <View style={{width:'100%', height: nail ? 90: 80, backgroundColor:"white", flexDirection:'row', padding:8, paddingHorizontal:12}}>

        <View style={{height:'100%', flex:1, gap:2, paddingHorizontal:4}}>

            <Text style={{fontFamily:'light', color:'gray', fontSize:13}}>{data?.details.address}</Text>

             <Text style={{fontFamily:'medium', color:'black', fontSize:18}}>{data?.salonName}</Text>


             {nail===true && (

            <View style={{width:40, backgroundColor:Colors.LIGHTPINK, justifyContent:'center', alignItems:'center',}}>
              <Text style={{fontFamily:'medium', fontSize:12, color:Colors.MAINPURPLE}}>Nail</Text>
            </View>


             )}


             

        </View>


        <View style={{height:'100%', width:50, justifyContent:'center', alignItems:'center'}}>

            <Pressable onPress={()=> Linking.openURL(data?.locationUrl)}  style={{height:48, width:48, borderRadius:8, borderWidth:0.8, borderColor:'lightgray', paddingTop:4}}>
                <Fontisto name="map-marker-alt" size={20} color={nail ? Colors.MAINPURPLE : Colors.MAINPINK}  style={{margin:'auto'}} />
                <Text style={{fontFamily:'medium', fontSize:12, margin:'auto'}}>MAP</Text>
            </Pressable>
        </View>
    
    </View>
  )
}

export default SalonNameBox
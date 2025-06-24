import { View, Text, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { head } from 'lodash'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import StylistLikeButton from './StylistLikeButton';
import LongButton from '../../components/Shared/LongButton'

const HairStylistBigBox = ({data, stylistId}) => {
  return (
    <View style={{width:Dimensions.get('screen').width, padding:14, gap:16, backgroundColor:'white'}}>

        <View style={{flexDirection:'row', height:134}}>

            <View style={{height:'100%', width:'24%', overflow:'hidden', borderRadius:8}}>
                <Image source={{uri:data?.profileImage}} style={{height:'100%' , width:'100%', backgroundColor:'black'}} />
            </View>

            <View style={{paddingHorizontal:12, gap:4, paddingVertical:2}}>
                <Text style={{fontFamily:'medium', fontSize:18}}>
                    {data?.name}
                </Text>

                   <Text style={{fontFamily:'light', fontSize:13}}>
                    {`HairStylist (${data?.years} years of expericence)`}
                </Text>


                       <Text style={{fontFamily:'light',color:'gray',  fontSize:13}}>
                    {data?.title}
                </Text>


                <View style={{flexDirection:'row', gap:6, marginTop:8}}>
                    <FontAwesome5 name="calendar-alt" size={14} color={Colors.MAINPINK} /> <Text style={{fontFamily:'regular', fontSize:12, color:Colors.MAINPINK}}>Check for holidays</Text>
                </View>


            </View>
            
                <View style={{position:'absolute', top:4, right:8}}>
                <StylistLikeButton stylistId={stylistId} />
                </View>

        </View>

        <View style={{width:'100%', gap:4}}>
             <Text style={{fontFamily:'regular', fontSize:16, color:"black"}}>
                {data?.bio}
            </Text>

           <Text style={{fontFamily:'light', fontSize:14, color:"black"}}>
                {data?.longdesc} 
            </Text>

            <View style={{marginTop:8}}>
 <LongButton color='pink' label='Reserve Stylist' onPress={()=>{}} />
            </View>

           
        </View>

 
    </View>
  )
}

export default HairStylistBigBox
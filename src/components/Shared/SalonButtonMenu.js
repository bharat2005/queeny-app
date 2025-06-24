import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../constants/Colors';
import LongButton from '../../components/Shared/LongButton'
import { mutateHairSalonLike } from '../../hooks/hairstyleSalon/mutateHairSalonLike';
import { router } from 'expo-router';

const mycuutieArray = [
    {
        name: 'Styles', 
        route:'/salonStylesInfiniteScreen'
    },
        {
        name: 'Stylists', 
        route:'/salonStylistsInfiniteScreen'
    },
        {
        name: 'Blogs', 
        route: '/blogsInfiniteScreen'
    },
        {
        name: 'Reviews', 
        route:'/reviewsHairStyleSalonScreen',
    },
]









const SalonButtonMenu = ({data, salonId}) => {
  return (
    <View style={{width:'100%', padding:12, gap:6, paddingTop:12}}>

        <View style={{alignItems:'center', width:'100%', gap:8}}>
            <Text style={{fontFamily:'regular', fontSize:14}}>
                Today's Avalabitiy: {" "}
                <Entypo name="circle" size={12} color={Colors.MAINPINK} />{" "}
                <Text style={{fontFamily:'regular', fontSize:14, color:Colors.MAINPINK}}>
                    Available
                </Text>
            </Text>

<View style={{width:'100%'}}>
<LongButton label='Reserve Salon' onPress={()=>{}} color='pink'/>
        
</View>
            
        </View>


        <View style={{width:'100%', flexWrap:'wrap', flexDirection:'row'}}>

            {
                mycuutieArray.map(item => (
                    <View style={{width:'50%', padding:4}}>

                        <Pressable 
                        onPress={()=> router.push({pathname: item?.route, params:{salonId,fromSalon:'true' }})}
                        style={{height:42, width:'100%', borderRadius:10, borderWidth:0.8, borderColor:'lightgray', backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                                <Text  style={{fontFamily:'regular', fontSize:15, color: 'black'}}>
                                    {item?.name}
                                </Text>
                        </Pressable>
                  
                    </View>
                ))
            }

        </View>
     
    </View>
  )
}

export default SalonButtonMenu
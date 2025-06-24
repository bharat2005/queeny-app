import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

const FavSalonSelector = ({setSalonType, salonType}) => {
  return (
    <View style={{height:60, width:Dimensions.get('screen').width, flexDirection:'row', backgroundColor:'white', borderBottomWidth:0.8, borderColor:'lightgray'}}>
        {['hair', 'nail'].map((item, index) => (

            <View key={index} style={{flex:1, width:'50%',paddingVertical:10, paddingHorizontal:24}}>
                <Pressable onPress={()=> setSalonType(item)} style={{height:'100%', width:'100%', borderRadius:24, 
                borderWidth:salonType === item ?  2 : 1,
                justifyContent:'center',
                alignItems:'center',
                borderColor: salonType === item 
  ? (item === 'hair' ? Colors.MAINPINK : Colors.MAINPURPLE)
  : 'lightgray',
                 backgroundColor: 'white'}}>

                    <Text style={{fontFamily:'light', fontSize:14, color : salonType === item 
  ? (item === 'hair' ? Colors.MAINPINK : Colors.MAINPURPLE)
  : 'lightgray',}}>{item}</Text>
                </Pressable>

            </View>
        ))}
    </View>
  )
}

export default FavSalonSelector
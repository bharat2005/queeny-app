import { View, Text, Dimensions, Pressable } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import React from 'react'
import Colors from '../../constants/Colors';

const SharedSectionHeader = ({title='Heading', morePress=()=>console.log('more pressed!'), isMore}) => {
  return (
    <View style={{width:Dimensions.get('screen').width, height:40, flexDirection:'row', paddingHorizontal:18, justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontFamily:'medium', fontSize:16}}>
            {title}
        </Text>

{isMore==='taglist' && (

   <Pressable onPress={morePress}>
            <Text style={{color:"red", fontFamily:'medium', fontSize:12}}>
                more
            </Text>
        </Pressable>

) }

{
  isMore === 'featurelist' && (

   <Pressable  style={{flexDirection:'row', alignItems:'center', gap:4}}>
    <Feather name="info" size={12} color="red" />
            <Text style={{color:"red", fontFamily:'light', fontSize:12}}>
                special feature?
            </Text>
        </Pressable>
  )
}


{isMore === 'nailtaglist'  && (

   <Pressable onPress={morePress}>
            <Text style={{color:Colors.MAINPURPLE, fontFamily:'medium', fontSize:12}}>
                more
            </Text>
        </Pressable>


)}


{
  isMore === 'nailcatelogList' && (

   <Pressable  style={{flexDirection:'row', alignItems:'center', gap:4}}>
    <Feather name="info" size={12} color={Colors.MAINPURPLE} />
            <Text style={{color:Colors.MAINPURPLE, fontFamily:'light', fontSize:12}}>
                categloge?
            </Text>
        </Pressable>
  )
}




       
    </View>
  )
}

export default SharedSectionHeader
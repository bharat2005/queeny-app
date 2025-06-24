import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const MagzineTabBar = ({index, setIndex, routes}) => {
  return (

<View style={{height:48, width:Dimensions.get('screen').width, backgroundColor:"white", flexDirection:'row'}}>

  {routes.map((item, i)=> (
    <Pressable onPress={()=> setIndex(i)} key={i} style={{height:'100%', flex:1, justifyContent:'center', alignItems:'center', padding:8}}>

<Text style={{fontFamily:'regular', color:index === i ? Colors.MAINPINK : 'gray', fontSize:14}}>
{item?.title}
</Text>

    {index === i && (
      <View  style={{width:'100%', backgroundColor:Colors.MAINPINK, height:2, borderRadius:12, position:'absolute', bottom:0}}/>
    )}

      </Pressable>
  ))}



</View>



  )
}

export default MagzineTabBar
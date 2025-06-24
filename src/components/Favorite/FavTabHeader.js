
import {  Text, Dimensions, Pressable, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const FavTabHeader = ({index, setIndex, routes}) => {
  return (
    // <View style={{height:50, width:Dimensions.get('screen').width, flexDirection:'row', backgroundColor:"yellow"}}>
    //     {
    //          routes.map((item, i) => (
    //             <View key={i} style={{height:'100%', flex:1, padding:2}}>
    //                 <Pressable onPress={()=> setIndex(i)} style={{height:'100%', width:'100%', backgroundColor:index === i ? 'red' : 'yellow'}}>
    //                     <Text>{item?.title}</Text>

    //                 </Pressable>
    //             </View>
    //          ))
    //     }
    
    // </View>

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

export default FavTabHeader
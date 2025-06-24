import { View, Text, Pressable, Dimensions, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


const NailStyleCard = ({item}) => {
 
  return (
    <View style={{height:167, width:(Dimensions.get('screen').width / 2) * 0.999, padding:2}} >

      <Pressable onPress={()=> router.push({pathname: '/nailStyleScreen', params:{id: item?.id}})} style={{height:'100%', width:'100%', backgroundColor:'black', justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
        {
          item?.mediaUri  ? (
            <Image style={{height:'100%', width:'100%'}}  source={{uri:item?.mediaUri}}/>
          ) : (
   <Text style={{color:"white" , alignSelf:'center'}}>{item?.index}</Text>
          )
        }
        
     
      </Pressable>  

    </View>
  )
}

export default NailStyleCard
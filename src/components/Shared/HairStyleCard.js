import { View, Text, Pressable, Dimensions, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import * as Videothumb from 'expo-video-thumbnails'
import { useEffect } from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'
import Entypo from '@expo/vector-icons/Entypo';


const HairStyleCard = ({item}) => {
  const player = item?.videoUri ? useVideoPlayer(item?.videoUri , player => {
  }) : null

  if(item?.videoUri){
    return (
          <View style={{height:210, width:(Dimensions.get('screen').width / 3) * 0.999, padding:1}} >

      <Pressable onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:'100%', backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>

        <VideoView player={player} style={{height:'100%', width:'100%'}} nativeControls={false} />


      </Pressable>  

      <View style={{ paddingHorizontal:6,flexDirection:'row', position:'absolute', bottom:10,left:14, borderRadius:4,  backgroundColor:'black', opacity:0.5, alignItems:'center'}}>
        <Entypo name="controller-play" size={16} color="white" />
        <Text style={{color:'white', fontFamily:'regular', fontSize:12}}>0:{player.duration}</Text>
      </View>

    </View>



    )
  }



  return (
    <View style={{height:210, width:(Dimensions.get('screen').width / 3) * 0.999, padding:1}} >

      <Pressable onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:'100%', backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
       { item?.mediaUri ? (
 <Image source={{uri: item?.mediaUri}} style={{height:"100%", width:'100%'}} />
       ) : (
        <Text style={{color:'white'}}>{item?.index}</Text>
       )}  

      </Pressable>  

    </View>
  )
}

export default HairStyleCard
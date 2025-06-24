import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'

const uri = 'https://videobp.hotp.jp/MVB0000874896/MVB0000874896-playlist.m3u8'

const HiarStyleVideoSection = ({data}) => {
    const player = useVideoPlayer(data?.videoUri || uri, player=>{
      player.loop = true;
      player.play()
    })



  return (
<VideoView 
player={player}
style={{height:Dimensions.get('screen').height * 0.6, width:Dimensions.get('screen').width}}
nativeControls={false}
contentFit='cover'
/>
  )
}

export default HiarStyleVideoSection
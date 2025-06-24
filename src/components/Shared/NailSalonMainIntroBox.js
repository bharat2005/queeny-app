import { View, Text, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel'
import Colors  from '../../constants/Colors'


const mytinyCutieArray = [
    'https://th.bing.com/th/id/OIP.0B8FoaGmIdKyEQwRSy26ngHaEK?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.9b81663a3934071f8de09681cec0684e?rik=DEV7m%2bUbPpmL2A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCool-Nature-Background-Images-4523x2590.jpg&ehk=XxAKNdbLqeV84jakVaOYrmZWai83%2bRlxqGS7WF2x2%2bo%3d&risl=1&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.3e8d727654eccea7e81e0d8034ed86d6?rik=KwF9VdB4WcEP2Q&riu=http%3a%2f%2fthewanderingblonde.com%2fwp-content%2fuploads%2f5F03AB02-D4E3-4820-AE93-A78A3645785B-1024x768.jpg&ehk=SW%2bTQtrYde2IY9Sq4rH6pC4KgitUU7WJhGGwWsVr31c%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.SQQFm-oK6Lu_eMaiGGRI1AHaE8?rs=1&pid=ImgDetMain'
]

const SalonMainIntroBox = ({data}) => {
    const [imageIndex, setImageIndex] = useState(0)
    
const renderItem = ({item, index}) => (
    <View style={{height:'100%', width:'100%'}}>
        <Image source={{uri:item}} style={{height:'100%', width:'100%' }} />
    </View>
)

if(!data) return

  return (
    <View style={{width:'100%'}}>
        
        <Carousel 
        loop
        data={data?.mainImages}
        autoPlay
        onSnapToItem={(v) => setImageIndex(v)}
        autoPlayInterval={5000}
        renderItem={renderItem}
        width={Dimensions.get('screen').width}
        height={350}
        />

        <View style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:8, paddingVertical:12}}>
    
            {data?.mainImages.map((item, index) => (
                <View style={{height:8, width:8,borderRadius:4, backgroundColor:index === imageIndex ? 'black' : 'lightgray'}} />
            ))}

        </View>

        <View style={{paddingHorizontal:18, paddingVertical:5, gap:8}}>
            <Text style={{fontFamily:'medium', fontSize:18, color:Colors.MAINPURPLE}}>
                {data?.title}
            </Text>

            <Text style={{fontFamily:'light', fontSize:14, color:'black'}}>
                {data?.description}   {data?.description}  
            </Text>

        </View>


    </View>
  )
}

export default SalonMainIntroBox
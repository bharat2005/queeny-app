import { View, Text, Dimensions, FlatList, Pressable, Linking } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import Colors from '../../constants/Colors';

const buttons = [
    {title: 'WhatsApp', url: `whatsapp://send?text=LetsWasteTime!&phone=9021833029`
      , icon: <Fontisto name="whatsapp" size={24} color="#25D366" /> 
    },
      {title: 'Email' , url: 'mailto:bharatvdeshm2005@gmail.com?subject=LetsWasteTime&body=I want to waste my time too!'
             , icon: <Fontisto name="email" size={24} color={Colors.MAINPINK} /> 
      },
]

const SalonShareButtons = () => {

    const renderItem = ({item, index}) =>(
        <View style={{height:80, width:Dimensions.get('screen').width, padding:2}}>
            <Pressable 
            
            onPress={()=> Linking.openURL(item?.url)} 
            style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:'gray'}}>
                <Text>{item?.title}</Text>
            </Pressable>

        </View>
    )
  return (
    <View style={{ width:Dimensions.get('screen').width, marginTop:12}}>


          <View
              style={{
                height: 28,
                paddingHorizontal: 12,
                flexDirection: "row",
                backgroundColor: "#666666",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "regular", color: "white", fontSize: 14 }}>
                Share Salon
              </Text>
            </View>


              <View style={{width:'100%', paddingVertical:18, gap:12, paddingHorizontal:18, backgroundColor:'white'}}>
                {buttons.map((item, index)=> (
      
            <Pressable onPress={()=> Linking.openURL(item?.url)} 
            style={{height:46, width:'100%', borderRadius:14, flexDirection:'row',gap:8, backgroundColor:'white', borderWidth:0.8, borderColor:'lightgray', borderRadius:8, justifyContent:'center', alignItems:'center'}}
            
            >
              {item?.icon}

                <Text style={{fontFamily:'medium', fontSize:15}}>{item?.title}</Text>
            </Pressable>

  
                ))}

              </View>

    </View>
  )
}

export default SalonShareButtons
import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { usehairStylesSalonPreview } from '../../hooks/hairstyleSalon/usehairStylesSalonPreview'
import { router } from 'expo-router'
import { Image } from 'react-native'
import Colors from '../../constants/Colors'
import { connectFirestoreEmulator } from 'firebase/firestore'


const SalonStylesPreviewSection = ({salonId}) => {
    const {data, error} = usehairStylesSalonPreview(salonId)
    
    

    const renderItem = ({item, index}) => (
        <View style={{height:210, width:(Dimensions.get('screen').width / 3) * 0.999, padding:2}}>


            <Pressable
            onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} 
            style={{height:'100%', width:'100%', borderRadius:12, overflow:'hidden'}}>

                <View style={{height:'70%', width:'100%'}}>
                    <Image style={{height:'100%', width:'100%', backgroundColor:'black'}} />

                </View>

                <View style={{width:'100%', flex:1, padding:8}}>
                    <Text numberOfLines={2} style={{fontFamily:'regular', fontSize:16}}>
                        {item?.title}
                    </Text>

                </View>

            </Pressable>








            {/* <Pressable  onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:"100%", backgroundColor:"black"}}>
                <Text style={{color:'white'}}>{item.title}</Text>
            </Pressable> */}
        </View>
    )




  return (
    <View style={{width:Dimensions.get('screen').width}}>
        
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
                      Check famouse styles
                    </Text>
                  </View>
            
     
<View style={{flexDirection:'row', width:'100%',marginTop:24, paddingHorizontal:8}}>

    {data?.map(item => (
               <View style={{height:240, width:(Dimensions.get('screen').width / 3) * 0.95, padding:2, paddingHorizontal:4}}>


            <Pressable
                     onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} 
            style={{height:'100%', width:'100%', borderRadius:8, overflow:'hidden', elevation:3}}>

                <View style={{height:'66%', width:'100%'}}>
                    <Image source={{uri:item?.mediaUri}} style={{height:'100%', width:'100%', backgroundColor:'black'}} />

                </View>

                <View style={{width:'100%', flex:1, padding:12, backgroundColor:'white'}}>
                    <Text numberOfLines={2} style={{fontFamily:'regular', fontSize:14}}>
                        {item?.title}
                    </Text>

                </View>

            </Pressable>

        </View>
    ))}

</View>



        <Pressable style={{ marginHorizontal:'auto', marginVertical:18}} 
        onPress={()=> router.push({pathname: '/salonStylesInfiniteScreen', params:{salonId}})}
            >
          <Text style={{color:Colors.MAINPINK, fontFamily:'regular',fontSize:16}}>See More</Text>
        </Pressable>
    




    </View>
  )
}

export default SalonStylesPreviewSection
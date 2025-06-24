import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { usehairStylistSalonPreview } from '../../hooks/hairstyleSalon/usehairStylistSalonPreview'
import { router } from 'expo-router'
import { Image } from 'react-native'
import Colors from '../../constants/Colors'

const SalonStylistPreviewSection = ({salonId}) => {
    const {data, error} = usehairStylistSalonPreview(salonId)

    const renderItem = ({item, index})=>(

        <View style={{height:200, width:'100%', paddingHorizontal:18, paddingVertical:8}}>

            <Pressable 
            onPress={()=> router.push({pathname:'/stylistScreen', params: {stylistId: item?.docId}})}
            style={{height:'100%', width:'100%', borderRadius:6, borderColor:'lightgray', borderWidth:0.8, flexDirection:'row', overflow:'hidden'}}>

                <View style={{height:'100%', width:'35%'}}>
                    <Image source={{uri:item?.profileImage}} style={{height:'70%', width:'70%', backgroundColor:'black', margin:'auto'}} />

                </View>

                <View style={{height:'100%', flex:1, paddingVertical:8, gap:8, paddingHorizontal:12}}>

                    <Text style={{fontFamily:'medium', fontSize:16, }}>
                        {item?.name}
                    </Text>

                 <Text style={{fontFamily:'light', fontSize:12, }}>
                              {item?.skills}
                    </Text>

                <Text style={{fontFamily:'light', fontSize:12, color:'gray' }}>
                              {`HairStylist (${item?.years} years of experiecne)`}
                    </Text>

                <Text numberOfLines={2} style={{fontFamily:'regular', fontSize:13, }}>
                        {item?.title}
                    </Text>

                </View>

            </Pressable>


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
              Pick Up Stylist
            </Text>
          </View>
    
 

    <FlatList 
    scrollEnabled={false}
    data={data}
    contentContainerStyle={{paddingVertical:12}}
    keyExtractor={(item , index)=> index.toString()}
    renderItem={renderItem}
    />


        <Pressable style={{ marginHorizontal:'auto', marginVertical:18}} 
        onPress={()=> router.push({pathname: '/salonStylistsInfiniteScreen', params:{salonId}})} 
            >
          <Text style={{color:Colors.MAINPINK, fontFamily:'regular',fontSize:16}}>See More</Text>
        </Pressable>
    

</View>
  )
}

export default SalonStylistPreviewSection
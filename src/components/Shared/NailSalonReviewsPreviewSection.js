import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { usehairStylesReviewsSalonPreview } from '../../hooks/hairstyleSalon/usehairStylesReviewsSalonPreview'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { format } from 'date-fns'
import Colors from '../../constants/Colors'
import { usenailStylesReviewsSalonPreview } from '../../hooks/hairstyleSalon/usenailStylesReviewsSalonPreview'




const hi = [
    {
        key: 'atmosphere',
        name: 'Atmosphere',
    },
        {
        key: 'techniqueFinishes',
        name: 'Finishes',
    },
        {
        key: 'customerService',
        name: 'Services',
    },
        {
        key: 'menuPrice',
        name: 'Menu',
    },
]

const dateConverter = (hi) => {
    if(hi){
    return format(hi.toDate(), 'yyyy/MM/dd')
    }
}


const SalonReviewsPreviewSection = ({salonId}) => {
       const {data, error} = usenailStylesReviewsSalonPreview(salonId)

  
    

    const renderItem = ({item, index}) => (


            <View style={{ width:Dimensions.get('screen').width,  padding:12, borderBottomWidth:0.8, borderColor:'lightgray', backgroundColor:'white' }}>

        <View style={{borderBottomWidth:0.8, height:80,  borderColor:'lightgray', flexDirection:'row', justifyContent:'space-between', paddingVertical:12}}>
            
            <View style={{height:'100%', width:'25%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'light', fontSize:12}}>
                    Overall{" "}
                    <Text style={{fontFamily:'regular', color:Colors.MAINPURPLE, fontSize:16}}>
                        {item?.overallRating}
                    </Text>
                </Text>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    {[...Array(Math.ceil(item?.overallRating))].map((item1,index) => (
                        <View key={index}>
                                               <AntDesign name="star" size={14} color={Colors.MAINPURPLE} />
                            </View>
     
                    ))}
                </View>


            </View>


            <View style={{width:'50%', flexDirection:'row', flexWrap:'wrap',}}>
                {
                    hi.map((item2, index) => (
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'50%', paddingHorizontal:6}}>
                              <Text style={{fontFamily:'light', fontSize:12}}>
                                {item2?.name}
                            </Text>

                              <Text style={{fontFamily:'regular', color:Colors.MAINPURPLE, fontSize:14}}>
                                    {item[item2.key]}
                            </Text>
                         </View>
                    ))
                }

            </View>

        </View>

   

        <View style={{width:'100%', gap:8, paddingVertical:18, paddingHorizontal:8}}>

            <Text style={{fontFamily:'light', fontSize:12, color:"gray"}}>
                {item?.gender}/{item?.age}
            </Text>

  <Text style={{fontFamily:'regular', fontSize:14, color:"black"}}>
                    {item?.name}
            </Text>
            
        
  <Text style={{fontFamily:'regular', fontSize:12, color:"black", lineHeight:26}}>
                {item?.reviewText}{item?.reviewText}
            </Text>

                <Text style={{fontFamily:'light', fontSize:12, color:"gray", textAlign:'right'}}>
                    Posted On : {dateConverter(item?.createdAt)}

                </Text>

        </View>
    </View>
    )




  return (
    <View style={{ width:Dimensions.get('screen').width, marginTop:38}}>

                                    <View
                                  style={{
                                    height: 28,
                                    paddingHorizontal: 12,
                                    flexDirection: "row",
                                    backgroundColor: "#fecbca",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
                                    Salon Reviews
                                  </Text>
                                </View>
     

    <FlatList 
    scrollEnabled={false}
    contentContainerStyle={{gap:12}}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={renderItem}
    data={data}
    />




              <Pressable 
        onPress={()=> router.push({pathname: '/reviewsNailStyleSalonScreen', params:{salonId}})}
        style={{ marginHorizontal:'auto', marginVertical:12}} 
        >
          <Text style={{color:Colors.MAINPURPLE, fontFamily:'regular',fontSize:16}}>See More</Text>
        </Pressable>

          
    




    </View>
  )
}

export default SalonReviewsPreviewSection
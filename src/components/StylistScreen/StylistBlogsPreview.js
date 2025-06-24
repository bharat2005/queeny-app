import { View, Text, Pressable, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useStylistBlogsPreview } from '../../hooks/blogs/useStylistBlogsPreview'
import { router } from 'expo-router'
import Colors from '../../constants/Colors'
import { Image } from 'react-native'
import { format } from 'date-fns'

const dateConverter = (help) =>{
  if(help){
return format(help.toDate(), 'yyyy/MM/dd')
  }
  
}
const StylistBlogsPreview = ({stylistId}) => {
  const {data, error} =  useStylistBlogsPreview(stylistId)


  const renderItem = ({item, index}) => (
    <View  style={{height:140, width:Dimensions.get('screen').width, padding:12}}>

      <Pressable onPress={()=> router.push({pathname:'/blogScreen', params:{blogId: item?.docId}})}
      style={{height:'100%', width:'100%', borderRadius:8, borderWidth:0.8, borderColor:'lightgray',  flexDirection:'row', alignItems:'center', padding:18}}
      >  
      <View style={{height:'100%', width:100, borderRadius:8,  borderWidth:0.8, borderColor:'lightgray', justifyContent:'center', alignItems:'center'}}>
                {item?.image ? (
            <Image source={{uri: item?.image}} style={{height:'100%', width:'100%', backgroundColor:'white'}} />
                ): (
                  <Text style={{color:'black'}}>{item?.index}</Text>
                )}
      
        </View> 

        <View style={{paddingHorizontal:16, height:'100%', gap:6}}>

          <View style={{backgroundColor:Colors.LIGHTPINK, alignSelf:'flex-start', paddingHorizontal:8}}>
            <Text style={{fontFamily:'light', fontSize:9, color:'red'}}>Recommended</Text>
          </View>
          

            <Text style={{fontFamily:'medium', fontSize:14}}>
              {item?.titleText}
            </Text>

                  <Text style={{fontFamily:'regular', fontSize:12, color:"gray"}}>
          Posted At : {dateConverter(item?.createdAt)}
        </Text>
          

        </View>

  

      </Pressable>
  

    </View>
  )

  return (
    <View style={{ width:'100%', backgroundColor:'white'}}>



                        <View
                    style={{
                      height: 28,
                      paddingHorizontal: 12,
                      flexDirection: "row",
                      backgroundColor: "#ebd1c2",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
                      Stylist blogs
                    </Text>
                  </View>

            



                    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={renderItem}
      />

              <Pressable 
        onPress={()=> router.push({pathname:'/blogsInfiniteScreen', params:{stylistId}})}
        style={{ marginHorizontal:'auto', marginVertical:12}} 
        >
          <Text style={{color:Colors.MAINPINK, fontFamily:'regular',fontSize:16}}>See More</Text>
        </Pressable>

          





     
    </View>
  )
}

export default StylistBlogsPreview
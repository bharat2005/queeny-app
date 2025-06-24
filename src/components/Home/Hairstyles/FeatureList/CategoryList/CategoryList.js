import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';

const CategoryList = ({data}) => {

    const renderItem = ({item, index}) => (
        <View style={{height:80, width:(Dimensions.get('screen').width / 2) * 0.999, padding:1}}>

            <Pressable   onPress={()=> router.push({pathname:'/hairStyleInfiniteScreen', params:{categoryId: item?.id}})}  style={{height:'100%', width:'100%', backgroundColor:"white", flexDirection:'row', padding:8}}>


        <View style={{height:'100%', width:'25%', borderRadius:8}}>
          <Image source={{uri:item?.uri}} style={{ height:'100%', width:'100%', borderRadius:8}}/>
        </View>

        <View style={{flex:1, height:'100%', justifyContent:'center', paddingHorizontal:12}}>
        <Text style={{fontFamily:'regular'}}>
            {item?.name}
        </Text>
        </View>


        <View style={{height:'100%', justifyContent:'center'}}>
<Entypo name="chevron-small-right" size={24} color="gray" />
        </View>
              

            </Pressable>
        </View>
    )


  return (
    <View style={{width:Dimensions.get('screen').width}}>
 

 
      <Text style={{backgroundColor:'#E7E7E7', paddingHorizontal:12, color:"black", fontFamily:'regular'}}>{data?.title}</Text>


      <FlatList 
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index)=> index.toString()}
      data={data?.list}
      />

    </View>
  )
}

export default CategoryList
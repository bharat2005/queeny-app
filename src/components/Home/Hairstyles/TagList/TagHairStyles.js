import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useHairStyleTagsLimit } from '../../../../hooks/hairstyleTags/useHairStyleTagsLimit'
import { useHairStylesByTagLimit } from '../../../../hooks/hairstyleTags/useHairStylesByTagLimit'
import { router } from 'expo-router'

const TagHairStyles = ({selectedTag}) => {
   const {data, error} = useHairStylesByTagLimit(selectedTag)



    const renderItem = ({item, index})=>(
        <View style={{height:'100%', width: 140, padding:4, paddingHorizontal:6}}>

            <Pressable onPress={()=> router.push({pathname: '/hairStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:'100%', borderRadius:12, justifyContent:'center', alignItems:'center'}}>
               
              {item?.mediaUri ? (
<Image source={{uri:item?.mediaUri}} style={{height:'100%', width:'100%', borderRadius:12}}/>
              ): (
                <View style={{height:'100%', width:'100%', borderRadius:12, backgroundColor:"black", justifyContent:'center', alignItems:'center'}} >
                    <Text style={{color:"white"}}>{item?.index}</Text>
                </View>
              )}  
              
  
            </Pressable>

        </View>
    )
  return (
    <View style={{flex:1, width:Dimensions.get('screen').width}}>

      {data && (


        <FlatList 
        contentContainerStyle={{paddingHorizontal:12}}
        showsHorizontalScrollIndicator={false}
        key={selectedTag}
        horizontal
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={renderItem}
        />



      )}  



    </View>
  )
}

export default TagHairStyles
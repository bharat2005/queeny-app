import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useNailStylesByTagLimit } from '../../../../hooks/nailStyleTags/useNailStylesByTagLimit'

const TagNailStyles = ({selectedTag}) => {
   const {data, error} = useNailStylesByTagLimit(selectedTag)



    const renderItem = ({item, index})=>(

                <View style={{height:'96%', width: 170, padding:4}}>
        
                    <Pressable onPress={()=> router.push({pathname: '/nailStyleScreen', params:{id: item?.docId}})} style={{height:'100%', width:'100%', borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor:'black', overflow:'hidden'}}>
                       
                       {item.mediaUri ? (
  <Image source={{uri:item?.mediaUri}} style={{height:'100%', width:'100%',borderRadius:12}}/>
                       ) : (
                        <Text style={{color:"white", alignSelf:'center'}}>{item?.index}</Text>
                       )}
                     
                    </Pressable>
        
                </View>
    )
  return (
    <View style={{flex:1, width:Dimensions.get('screen').width,}}>

      {data && (


        <FlatList 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:12}}
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

export default TagNailStyles
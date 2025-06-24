import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'

const TagsTabBar = ({routes, index, setIndex}) => {
  const flatListRef = useRef(null)

  useEffect(()=>{
if(flatListRef.current && (routes.length > 0)){
  flatListRef.current.scrollToIndex({
    animation:true,
    viewPosition:0.5,
    index
  })
}
  },[index, flatListRef, routes])


    const renderItem = ({item, index:i}) =>(
        <View style={{height:'100%', width:120, padding:2}}>

        <Pressable onPress={()=> setIndex(i)} style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: index === i ? 'black' : 'gray', fontFamily:'regular'}}>{item.title}</Text>
        </Pressable>

        {index === i  && (
          <View style={{height:4, width:"80%", marginHorizontal:'auto', backgroundColor:'black', borderRadius:12}} />
        )}

        </View>
    )


  return (
    <View style={{height:48, width:Dimensions.get('screen').width, backgroundColor:'white'}}>
     

     <FlatList 
     ref={flatListRef}
     showsHorizontalScrollIndicator={false}
     horizontal
     data={routes}
     keyExtractor={(item, index)=> index.toString()}
     renderItem={renderItem}
     getItemLayout={(data, index)=> ({
      length:120,
      index,
      offset:index * 120
     })}
     />
    </View>
  )
}

export default TagsTabBar
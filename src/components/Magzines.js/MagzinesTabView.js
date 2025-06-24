import { View, Text, FlatList, Dimensions, Pressable, useWindowDimensions, Image, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useINfiniteMagzinesAll } from '../../hooks/magzines/useInfiniteMagzinesAll'
import AllSelector from './AllSelector'
import { router } from 'expo-router'
import Colors from '../../constants/Colors'


const MagzinesTabView = ({categoryId}) => {
  const [currenttType, setCurrentType] = useState('Popular')
const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useINfiniteMagzinesAll(categoryId, currenttType)

const cleanedList = useMemo(()=>{
    return data?.pages.flatMap(page => page.list)
 })




 const renderItem = ({item, index}) =>(
    <View style={{height:104, width:Dimensions.get('screen').width, paddingHorizontal:12, paddingVertical:8}}>
        
        <Pressable onPress={()=> router.push({pathname: '/magzineScreen', params: {magId: item?.docId}})} 
        style={{height:'100%', width:'100%',overflow:'hidden', borderRadius:8, borderWidth:0.8, borderColor:'lightgray', flexDirection:"row", backgroundColor:'white'}}>
           
            <View style={{height:'100%', width:'26%'}}>
              {item?.image[0] && (
            <Image source={{uri: item?.image[0]}} style={{height:'100%', width:'100%', backgroundColor:"black"}}/>
              )}
             
            </View>
 
            <View style={{paddingVertical:12, width:240, height:'100%', paddingHorizontal:18}}>

              <Text style={{fontFamily:'regular', fontSize:13}}>
                    {item?.title[0]} & 
              </Text>

   <View style={{backgroundColor:Colors.LIGHTPINK, alignSelf:'flex-start', paddingHorizontal:8, position:'absolute', right:-48, bottom:9}}>
            <Text style={{fontFamily:'light', fontSize:9, color:'red'}}>Recommended</Text>
          </View>

            </View>
        </Pressable>

    </View>
 )



  return (
    <View style={{flex:1}}>

      {categoryId === 'all' && (
        <AllSelector currenttType={currenttType} setCurrentType={setCurrentType}/>
      )}


        <FlatList 
        ListFooterComponent={isFetchingNextPage ?  <ActivityIndicator size={'large'} color={Colors.MAINPINK} style={{height:120}} /> : null}
        data={cleanedList}
        renderItem={renderItem}
        keyExtractor={(item, index)=> index.toString()}
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        onEndReachedThreshold={0}
        />


      
    </View>
  )
}

export default MagzinesTabView
import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'


const colors = [
    {
        name:"pink",
        code:'#fba3bb',
    },
        {
        name:"maroon",
        code:'#bd3468',
    },
        {
        name:"red",
        code:'#f63a39',
    },
        {
        name:"orange",
        code:'#fe8b48',
    },
        {
        name:"yellow",
        code:'#fdee5d',
    },
        {
        name:"green",
        code:'#80d0ab',
    },
        {
        name:"cyan",
        code:'#3fced4',
    },
        {
        name:"blue",
        code:'#335ea2',
    },
        {
        name:"skyblue",
        code:'#9fcefc',
    },
        {
        name:"purple",
        code:'#c1a6d9',
    },    {
        name:"black",
        code:'#333333',
    },
      {
        name:"white",
        code:'#ffffff',
    },
      {
        name:"gray",
        code:'#c5c5c5',
    },
          {
        name:"coffee",
        code:'#dac2a0',
    },

          {
            special:true,
        name:"silver",
        code:['#cbc2c1', '#e2ddda'],
    },
          {
            special:true,
        name:"tea",
        code:['#d8a146','#eac368'],
    },
          {
            special:true,
        name:"shine",
        code:['white', '#c7ecfe'],
    },

]

const NailColorList = () => {




    const renderItem = ({item, index}) => (
        <View style={{width:(Dimensions.get('screen').width / 6) * 0.9, height:(Dimensions.get('screen').width / 6) * 0.9, justifyContent:'center', alignItems:'center'}}>

            {item?.special ? (
  <Pressable 
         onPress={()=> router.push({pathname: '/nailStyleInfiniteScreen', params:{categoryId: item?.name}})} 
  style={{backgroundColor:item?.code, height:'80%', width:'80%', borderRadius:'50%', overflow:'hidden'}} >
    <LinearGradient colors={item?.code}  start={{x:0, y:0}} end={{y:0, x:1}} style={{position:'absolute', height:"100%", width:'100%'}}/>
  </Pressable>
            ) : (
   <Pressable
     onPress={()=> router.push({pathname: '/nailStyleInfiniteScreen', params:{categoryId: item?.name}})} 
   style={{backgroundColor:item?.code, height:'70%', width:'70%', borderRadius:'50%'}} />
            )}
          

        </View>
    )







  return (
    <View style={{width:Dimensions.get('screen').width}}>

        <SharedSectionHeader title={'ColorsList'} isMore={'colorList'}/>
        
    <FlatList 
    numColumns={6}
    scrollEnabled={false}
    contentContainerStyle={{paddingHorizontal:18}}
    keyExtractor={(item, index)=> index.toString()}
    data={colors}
    renderItem={renderItem}
    />



    </View>
  )
}

export default NailColorList
import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'

const keywords = [
    {
        title:'Scene',
        list: [
    'office',
    'date',
    'bridal',
    'party'
    
]
    },

    {
        title:'Taste',
        list: [
    'simple',
    'curly',
    'casual',
    'gorgeous'
]

    }
]



const KeywordsList = () => {


    const renderItem = ({item, index}) =>(
        <View style={{marginVertical:24}}>
            <SharedSectionHeader title={item?.title} />

               <View style={{flexDirection:'row', paddingHorizontal:24, gap:18}}>
            {item.list.map((i) => (
                <Pressable
                  onPress={()=> router.push({pathname: '/nailStyleInfiniteScreen', params:{categoryId: i}})} 
                key={i}  >
                    <Text style={{fontSize:14, color:'purple', fontFamily:'medium'}}>#{i}</Text>
                 </Pressable>
            ))}

        </View>

        </View>
     
    )









  return (
    <View style={{width:Dimensions.get('screen').width}}>


    <FlatList 
    scrollEnabled={false}
    keyExtractor={(item, index)=> index.toString()}
    data={keywords}
    renderItem={renderItem}
    />


    </View>
  )
}

export default KeywordsList
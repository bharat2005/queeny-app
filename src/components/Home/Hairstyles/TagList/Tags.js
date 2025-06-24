import { View, Text, FlatList, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { useHairStyleTagsLimit } from '../../../../hooks/hairstyleTags/useHairStyleTagsLimit'
import Colors from '../../../../constants/Colors'

const Tags = ({selectedTag, setSelectedTag}) => {
    const {data, error} = useHairStyleTagsLimit()


    const renderItem = ({item, index}) => (
        <View style={{height:'100%',padding:4}}>

            <Pressable onPress={()=> setSelectedTag(item?.label)} style={{height:36, borderWidth:selectedTag  === item?.label ? 2 : 1, borderColor: selectedTag  === item?.label ? Colors.MAINPINK : 'gray',  minWidth:100, paddingHorizontal:12, justifyContent:'center', borderRadius:24, alignItems:'center'}}>
                <Text style={{color:selectedTag  === item?.label ? Colors.MAINPINK : "black", fontFamily:'regular', fontSize:14}}>#{item.label}</Text>
            </Pressable>

        </View>
    )

  return (
    <View style={{  width:Dimensions.get('screen').width, paddingVertical:4}}>

{data && (

            <FlatList
            showsHorizontalScrollIndicator={false}
        horizontal
data={[{label:'all'},...data]}
keyExtractor={(item, index)=> index.toString()}
renderItem={renderItem}
/>


)}


    </View>

  )
}

export default Tags
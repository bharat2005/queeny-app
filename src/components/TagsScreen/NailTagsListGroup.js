import { View, Text, Dimensions, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNailStyleTagsByGroup } from '../../hooks/hairstyleTags/useNailStyleTagsByGroup'
import { router } from 'expo-router'
import Colors from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather'

const help = {
frequentlysearched:'What users are looking for the most”',
popular:'Trending picks loved by everyone',
trending:'Currently hot and getting attention'
  
}



const NailTagsListGroup = ({group, index}) => {
    const {data, error} = useNailStyleTagsByGroup(group)


    const renderItem = ({item, index}) => (

        <Pressable 
       onPress={()=> router.push({pathname:'/nailtagsTabScreen', params: {group, tagIndex:index}})} 
        
        style={{paddingHorizontal:12, paddingVertical:6, gap:8, flexDirection:"row",  backgroundColor:'white',  margin:6, alignItems:'center', borderRadius:8, borderWidth:0.8, borderColor:'lightgray'}}>
          <Feather name="search" size={18} color={Colors.MAINPURPLE} />
            <Text style={{color:'black', fontFamily:'regular', fontSize:14}}>#{item?.label}</Text>

        </Pressable>




    )







  return (
  <View style={{paddingVertical:18, borderBottomColor:'lightgray', borderBottomWidth: index === 2 ? 0 : 0.8}}>

<View style={{paddingHorizontal:18}}>
   <Text style={{fontFamily:'regular', fontSize:18}}># {group}</Text>

   <Text style={{fontSize:12, fontFamily:'light'}}>{help[group]}</Text>
</View>
 

    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width:Dimensions.get('screen').width, marginVertical:12, paddingHorizontal:18}}>

{data && (
     <FlatList 
     scrollEnabled={false}
        numColumns={Math.ceil(data.length / 2)}
        contentContainerStyle={{paddingHorizontal:18}}
        data={data}
        renderItem={renderItem}
        />
)}

<View style={{width:40}}>

</View>
   
    
    </ScrollView>

  </View>

  )
}

export default NailTagsListGroup
import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'



const lengthCategoryArray = [
  {route: 'Short',
    name: 'Short',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL04.jpg?switch=2025052812'
  },
    {
     route: 'Medium',
    name: 'Medium',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL03.jpg?switch=2025052812'
  },
    {
    route: 'Semi-Long',
    name: 'Semi Long',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL02.jpg?switch=2025052812'
  },
    {
       route:  'Long',  
    name:  'Long',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL01.jpg?switch=2025052812'
  },
    {
        route:  'Bery-Short',
    name:  'Very Short',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL05.jpg?switch=2025052812'
  },
    {
      route:  'Hair-Set',
    name:   'Hair Set',
    url: 'https://imgbp.hotp.jp/CSP/img/hc/top/photo/lengthHL08.jpg?switch=2025052812'
  }

]


const HairLengthList = () => {





const renderItem = ({item, index}) =>(
    <View style={{height:140, width:(Dimensions.get('screen').width / 3) * 0.96, padding:12}}>

        <Pressable onPress={()=> router.push({pathname: '/hairStyleInfiniteScreen', params:{categoryId: item?.route}})} style={{height:'100%', overflow:'hidden', width:'100%', borderRadius:8, borderWidth:0.8, borderColor:'lightgray' ,backgroundColor:'white'}}>

          <Image source={{uri: item?.url}} style={{height:'75%',width:'100%'}} />
            <Text style={{color:'white', alignSelf:'center', color:'black', fontFamily:'regular', fontSize:14, marginVertical:'auto'}}>{item.name}</Text>

        </Pressable>


    </View>
)








  return (
    <View style={{width:Dimensions.get('screen').width,}}>

      <SharedSectionHeader title='Search By Length' isMore={false} />
    
    <FlatList
    data={lengthCategoryArray}
    scrollEnabled={false}
    contentContainerStyle={{paddingHorizontal:8}}
    numColumns={3}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={renderItem}
    
    />

    </View>
  )
}

export default HairLengthList
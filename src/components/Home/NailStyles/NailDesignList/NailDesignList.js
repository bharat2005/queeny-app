import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'


const desginList = [
    {
        name:'French',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgFrench.jpg?switch=2025052812'
    },
        {
        name:'Gradiation',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgGradation.jpg?switch=2025052812'
    },
        {
        name:  'One Color',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgOneColor.jpg?switch=2025052812'
    },
        {
        name:'Patterned',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgPatternNail.jpg?switch=2025052812'
    },
            {
        name:    'Art Paints',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgArtParts.jpg?switch=2025052812'
    },
        {
        name: 'Foot',
        uri:'https://imgbp.hotp.jp/CSP/img/nc/top/imgFoot.jpg?switch=2025052812'
    },


]

const NailDesignList = () => {



const renderItem = ({item, index}) =>(
    <View style={{height:130, width:(Dimensions.get('screen').width / 3) * 0.94, padding:8}}>

        <Pressable 
   onPress={()=> router.push({pathname: '/nailStyleInfiniteScreen', params:{categoryId: item?.name}})} 
        style={{height:'100%', width:'100%', borderRadius:8, backgroundColor:'#f9f4f1', borderWidth:1, borderColor:'lightgray'}}>

          <Image resizeMethod='cover' source={{uri: item?.uri}} style={{height:'80%',width:'80%', marginHorizontal:'auto',backgroundColor:'white'}} />
            <Text style={{color:'white', alignSelf:'center', color:'black', fontFamily:'regular', fontSize:14, marginVertical:'auto', fontSize:13}}>{item?.name}</Text>

        </Pressable>

    </View>
)



  return (
    <View style={{width:Dimensions.get('screen').width,}}>

        <SharedSectionHeader title='NailLengthList' isMore={'naillengthlist'} />
        <FlatList 
        data={desginList}
        contentContainerStyle={{paddingHorizontal:12}}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(item ,index)=> index.toString()}
        renderItem={renderItem}
        />
      
      
    </View>
  )
}

export default NailDesignList
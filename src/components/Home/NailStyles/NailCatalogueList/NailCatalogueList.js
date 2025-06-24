import { View, Text, Dimensions, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'


const catalogs  = [
    {
        name:   'Sunflower Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS207.jpg?switch=2025052812'
    },
        {
        name: 'Shell Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS208.jpg?switch=2025052812'
    },
        {
        name: 'Glass Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS209.jpg?switch=2025052812'
    },
        {
        name:    'Marbel Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS210.jpg?switch=2025052812'
    },
        {
        name:    'Summer Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS211.jpg?switch=2025052812'
    },
        {
        name:    'Magnet Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS146.jpg?switch=2025052812'
    },
        {
        name:    'Mirror Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS147.jpg?switch=2025052812'
    },
        {
        name:    'Aurora Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS148.jpg?switch=2025052812'
    },    {
        name:  'Clear Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS149.jpg?switch=2025052812'
    },
        {
        name:   'Nuance Nails',
        url: 'https://imgbp.hotp.jp/CSP/img/nc/top/photo/special/CS171.jpg?switch=2025052812'
    }
]












const NailCatalogueList = () => {



const renderItem = ({item, index}) =>(
    <View style={{height:160, width:(Dimensions.get('screen').width / 2) * 0.96, padding:6}}>

        <Pressable
              onPress={()=> router.push({pathname: '/nailStyleInfiniteScreen', params:{categoryId: item?.name}})}  
         style={{height:'100%', width:'100%', backgroundColor:'white', borderRadius:8, overflow:'hidden'}}
         >

            <Image source={{uri:item?.url}} style={{height:'75%', width:'100%', backgroundColor:'black'}}  />

            <View style={{ flex:1}}>
     <Text style={{color:'white', alignSelf:'center', color:'black', fontFamily:'regular', fontSize:14, marginVertical:'auto'}}>{item?.name}</Text>
            </View>
          

        </Pressable>


    </View>
)



  return (
    <View style={{width:Dimensions.get('screen').width}}>


        <SharedSectionHeader title='CatelogLIst' isMore={'nailcatelogList'}/>


        <FlatList 
        data={catalogs}
        scrollEnabled={false}
        contentContainerStyle={{paddingHorizontal:6}}
        numColumns={2}
        keyExtractor={(item ,index)=> index.toString()}
        renderItem={renderItem}
        />
      
      
    </View>
  )
}

export default NailCatalogueList
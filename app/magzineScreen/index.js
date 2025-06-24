import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMagzineById } from '../../src/hooks/magzines/useMagzineById'
import Colors from '../../src/constants/Colors'

const MagzineScreen = () => {
    const {magId} = useLocalSearchParams()
    const {data, error} = useMagzineById(magId)

   if(!data) return

  return (
    <ScrollView style={{flex:1, backgroundColor:'white'}}>

      <View style={{width:'100%', height:310}}>
        {data?.image[0]  && (
  <Image source={{uri:data?.image[0]}}  style={{height:'100%', width:'100%', backgroundColor:'black'}}/>
        )}
      
      </View>

      <View style={{width:'100%', padding:18, gap:12}}>

        <Text style={{fontFamily:'medium', fontSize:18}}>
          {data?.title[0]}
        </Text>


    <Text style={{fontFamily:'regular', fontSize:14, lineHeight:28}}>
          {data?.paragraphs[0]} {data?.paragraphs[0]}
        </Text>

      </View>


      
        <View style={{width:'100%', padding:18, gap:12, marginTop:32}}>

    <View style={{borderBottomColor:Colors.MAINPINK, borderBottomWidth:2,paddingVertical:12,}}>
      
        <Text style={{fontFamily:'medium', fontSize:18}}>
          {data?.title[1]}
        </Text>

    </View>

    <View style={{width:'100%', height:240}}>
         {data?.image[1]  && (
  <Image source={{uri:data?.image[1]}}  style={{height:'100%', width:'100%', backgroundColor:'black'}}/>
        )}
      
    </View>

<View style={{paddingHorizontal:8}}>
    <Text style={{fontFamily:'regular', fontSize:14, lineHeight:32}}>
          {data?.paragraphs[1]} {data?.paragraphs[1]} {data?.paragraphs[1]}
        </Text>
</View>


      </View>


    <View style={{width:'100%', padding:18, gap:12, marginTop:32}}>

    <View style={{borderBottomColor:Colors.MAINPINK, borderBottomWidth:2,paddingVertical:12,}}>
      
        <Text style={{fontFamily:'medium', fontSize:18}}>
          {data?.title[2]}
        </Text>

    </View>

    <View style={{width:'100%', height:240}}>
          {data?.image[2]  && (
  <Image source={{uri:data?.image[2]}}  style={{height:'100%', width:'100%', backgroundColor:'black'}}/>
        )}
      
    </View>

<View style={{paddingHorizontal:8}}>
    <Text style={{fontFamily:'regular', fontSize:14, lineHeight:32}}>
          {data?.paragraphs[2]} {data?.paragraphs[2]} {data?.paragraphs[2]}
        </Text>
</View>


      </View>


          <View style={{width:'100%', padding:18, gap:12, marginTop:32}}>

    <View style={{borderBottomColor:Colors.MAINPINK, borderBottomWidth:2,paddingVertical:12,}}>
      
        <Text style={{fontFamily:'medium', fontSize:18}}>
          {data?.title[1]}
        </Text>

    </View>

    <View style={{width:'100%', height:240}}>
            {data?.image[3]  && (
  <Image source={{uri:data?.image[3]}}  style={{height:'100%', width:'100%', backgroundColor:'black'}}/>
        )}
      
    </View>

<View style={{paddingHorizontal:8}}>
    <Text style={{fontFamily:'regular', fontSize:14, lineHeight:32}}>
          {data?.paragraphs[3]} {data?.paragraphs[3]} {data?.paragraphs[3]}
        </Text>
</View>


      </View>

      <View style={{height:40}} />

    </ScrollView>
  )
}

export default MagzineScreen
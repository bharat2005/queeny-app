import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useBlogById } from '../../src/hooks/blogs/useBlogById'
import { format } from 'date-fns'
import Colors from '../../src/constants/Colors'
import { Image } from 'react-native'


const help = [
  'image',
  'image2',
  'image3'
]

const dateConverter = (help) =>{
  if(help){
return format(help.toDate(), 'yyyy/MM/dd')
  }
  
}
const BlogScreen = () => {
    const {blogId} = useLocalSearchParams()
    const {data, error} = useBlogById(blogId)
    const myArrray = data ? [
      {
        image:data?.image,
        para:data?.paragraph1
      },
            {
        image:data?.image2,
        para:data?.paragraph2
      },
            {
        image:data?.image3,
        para:data?.paragraph3
      },

    ] : []


  return (
    <ScrollView style={{flex:1, backgroundColor:'white'}}>

  <View  style={{height:100,  width:Dimensions.get('screen').width, padding:12, borderWidth:0.8, borderColor:'lightgray', marginBottom:30}}>



        <View style={{paddingHorizontal:12, height:'100%', gap:6}}>

          <View style={{backgroundColor:Colors.LIGHTPINK, alignSelf:'flex-start', paddingHorizontal:8}}>
            <Text style={{fontFamily:'light', fontSize:9, color:'red'}}>Recommended</Text>
          </View>
          

            <Text style={{fontFamily:'medium', fontSize:14}}>
              {data?.titleText}
            </Text>

            <View style={{flexDirection:'row', gap:18}}>

              
                  <Text style={{fontFamily:'regular', fontSize:11, color:"gray"}}>
          Posted At : {" "}
           <Text style={{fontFamily:'regular', fontSize:12, color:"black"}}>
   {dateConverter(data?.createdAt)}
           </Text>
       
        </Text>

                          <Text style={{fontFamily:'regular', fontSize:11, color:"gray"}}>
          Posted By : {" "}
           <Text style={{fontFamily:'regular', fontSize:12, color:"black"}}>
    {data?.stylistName}
           </Text>
       
        </Text>
          

            </View>


        </View>

  
  

    </View>

    <View style={{width:'100%', gap:90}}>

            {myArrray.map((item, index) => (
        <View key={index} style={{gap:12}}>

          <View style={{ width:'100%', alignItems:'center'}}>

            <View style={{height:Dimensions.get('screen').width * 0.8, width:Dimensions.get('screen').width * 0.8, borderRadius:12, borderWidth:0.8, alignItems:'center', justifyContent:'center', borderColor:'lightgray'}}>
                 <Image source={{uri: item?.image}}   style={{height:'80%', width:'60%', backgroundColor:"black"}} />
              </View>
         

          </View>


          <View style={{padding:28}}>

                 <Text style={{fontFamily:'light', fontSize:14, lineHeight:34}}>
            {item?.para}   {item?.para}   {item?.para}
          </Text>
            </View>

     
        </View>
      ))}


    </View>



<View  style={{height:100}}/>


    </ScrollView>
  )
}

export default BlogScreen




 
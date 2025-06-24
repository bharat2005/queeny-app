import { View, Text, FlatList, Pressable, Dimensions, Image, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import BlogsInfiniteScreenHeader from './BlogsInfiniteScreenHeader'
import { useInifinteBlogs } from '../../hooks/blogs/useInfiniteBlogs'
import { router } from 'expo-router'
import { format } from 'date-fns'
import { uuseInfiniteBlogsByStylist } from '../../hooks/blogs/useINfiniteBlogsByStylist'
import Colors from '../../constants/Colors'
const selectorTypes = [
    {title: 'New Arrivals', id: 'newArrival'},
     {title: 'Categories', id: 'categories'},
      {title: 'Staff', id: 'staff'},
       {title: 'BlackBox', id: 'blackBox'},
]



const dateConverter = (help) =>{
  if(help){
return format(help.toDate(), 'yyyy/MM/dd')
  }
  
}














const BlogsInfiniteScreenView = ({currentType, stylistId  }) => {
  const [selectedStylist, setSelectedStylist] = useState(stylistId)

    const returnedFuntion = () =>{
      if(currentType === 'staff'){
        return uuseInfiniteBlogsByStylist(selectedStylist)
      } else{
        return useInifinteBlogs()
      }
    }

    

      const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = returnedFuntion()

  

    const cleanedList = useMemo(()=>{
        return data?.pages?.flatMap(page => page.list)
    })

      const renderItem = ({item, index}) => (

    <View  style={{height:150, width:Dimensions.get('screen').width, padding:12,}}>

      <Pressable onPress={()=> router.push({pathname:'/blogScreen', params:{blogId: item?.docId}})}
      style={{height:'100%', width:'100%', borderRadius:8, borderWidth:0.8, borderColor:'lightgray',  flexDirection:'row', alignItems:'center', padding:18,  backgroundColor:'white'}}
      >  
      <View style={{height:'100%', width:100, borderRadius:8,  borderWidth:0.8, borderColor:'lightgray',justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
        {item?.image ? (
    <Image source={{uri: item?.image}} style={{height:'100%', width:'100%', backgroundColor:'white'}} />
        ): (
          <Text style={{color:'black'}}>{item?.index}</Text>
        )}
      
        </View> 

        <View style={{paddingHorizontal:16, height:'100%', gap:6}}>

          <View style={{backgroundColor:Colors.LIGHTPINK, alignSelf:'flex-start', paddingHorizontal:8}}>
            <Text style={{fontFamily:'light', fontSize:9, color:'red'}}>Recommended</Text>
          </View>
          

          <View style={{width:240}}>

                   <Text style={{fontFamily:'medium', fontSize:14}}>
              {item?.titleText}
            </Text>

          </View>

     

            <View style={{}}>
                  <Text style={{fontFamily:'regular', fontSize:10, color:"black"}}>
          Posted At : {dateConverter(item?.createdAt)}
        </Text>

                          <Text style={{fontFamily:'regular', fontSize:10, color:"black"}}>
          Posted By : {item?.stylistName}
        </Text>
          
            </View>


        </View>

  

      </Pressable>
  

    </View>
      )


  return (
    <View style={{flex:1}}>
        <BlogsInfiniteScreenHeader currentType={currentType}  stylistId={stylistId}  {...{selectedStylist, setSelectedStylist}} />


             <FlatList
             key={currentType}
             ListFooterComponent={<ActivityIndicator size={'large'} color={Colors.MAINPINK} style={{paddingVertical:18}} />}
             onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
             onEndReachedThreshold={0}
             data={cleanedList}
             keyExtractor={(item, index)=> index.toString()}
             renderItem={renderItem}
             />
       

    </View>
  )
}

export default BlogsInfiniteScreenView
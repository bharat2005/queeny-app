import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import ReviewNailStyleSalonScreenHeaderCounter from '../../src/components/ReviewHairStyleSalonScreen/ReviewNailStyleSalonScreenHeaderCounter'
import { useInfiniteNailReviewsBySalonId } from '../../src/hooks/reviews/useInfiniteNailReviewsBySalonId'
import Colors from '../../src/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import { format } from 'date-fns'

const orderTypeArray = [
  'Newest',
  'Olderst',
  'Rest'
]




const hi = [
    {
        key: 'atmosphere',
        name: 'Atmosphere',
    },
        {
        key: 'techniqueFinishes',
        name: 'Finishes',
    },
        {
        key: 'customerService',
        name: 'Services',
    },
        {
        key: 'menuPrice',
        name: 'Menu',
    },
]

const dateConverter = (hi) => {
    if(hi){
    return format(hi.toDate(), 'yyyy/MM/dd')
    }
}


const ReviewNailStyleSalonScreen = () => {
    const [currentType, setCurrentType] = useState('Newest')
    const {salonId} = useLocalSearchParams()
    const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteNailReviewsBySalonId(salonId, currentType)

    

    const cleanedList = useMemo(()=> {
        return data?.pages.flatMap(page => page.list)
    })



    const renderItem = ({item, index}) => (


            <View style={{ width:Dimensions.get('screen').width,  padding:12, borderBottomWidth:0.8, borderColor:'lightgray', backgroundColor:'white' }}>

        <View style={{borderBottomWidth:0.8, height:80,  borderColor:'lightgray', flexDirection:'row', justifyContent:'space-between', paddingVertical:12}}>
            
            <View style={{height:'100%', width:'25%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'light', fontSize:12}}>
                    Overall{" "}
                    <Text style={{fontFamily:'regular', color:Colors.MAINPURPLE, fontSize:16}}>
                        {item?.overallRating}
                    </Text>
                </Text>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    {[...Array(Math.ceil(item?.overallRating))].map((item1,index) => (
                        <View key={index}>
                                               <AntDesign name="star" size={14} color={Colors.MAINPURPLE} />
                            </View>
     
                    ))}
                </View>


            </View>


            <View style={{width:'50%', flexDirection:'row', flexWrap:'wrap',}}>
                {
                    hi.map((item2, index) => (
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'50%', paddingHorizontal:6}}>
                              <Text style={{fontFamily:'light', fontSize:12}}>
                                {item2?.name}
                            </Text>

                              <Text style={{fontFamily:'regular', color:Colors.MAINPURPLE, fontSize:14}}>
                                    {item[item2.key]}
                            </Text>
                         </View>
                    ))
                }

            </View>

        </View>

   

        <View style={{width:'100%', gap:8, paddingVertical:18, paddingHorizontal:8}}>

            <Text style={{fontFamily:'light', fontSize:12, color:"gray"}}>
                {item?.gender}/{item?.age}
            </Text>

  <Text style={{fontFamily:'regular', fontSize:14, color:"black"}}>
                    {item?.name}
            </Text>
            
        
  <Text style={{fontFamily:'regular', fontSize:12, color:"black", lineHeight:26}}>
                {item?.reviewText}{item?.reviewText}
            </Text>

                <Text style={{fontFamily:'light', fontSize:12, color:"gray", textAlign:'right'}}>
                    Posted On : {dateConverter(item?.createdAt)}

                </Text>

        </View>
    </View>
    )


  return (
    <View style={{flex:1}}>
         <ReviewNailStyleSalonScreenHeaderCounter orderTypeArray={orderTypeArray} salonId={salonId} setCurrentType={setCurrentType} currentType={currentType} /> 

        <FlatList 
        onEndReachedThreshold={0}
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        data={cleanedList}
        contentContainerStyle={{gap:12, paddingVertical:12}}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={renderItem}
        
        /> 
      
    </View>
  )
}

export default ReviewNailStyleSalonScreen
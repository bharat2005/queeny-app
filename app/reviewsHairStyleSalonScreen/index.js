import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import ReviewHairStyleSalonScreenHeaderCounter from '../../src/components/ReviewHairStyleSalonScreen/ReviewHairStyleSalonScreenHeaderCounter'
import { useInfiniteReviewsBySalonId } from '../../src/hooks/reviews/useInfiniteReviewsBySalonId'
import { format } from 'date-fns'
import AntDesign from '@expo/vector-icons/AntDesign'
import Colors from '../../src/constants/Colors'
import { ActivityIndicator } from 'react-native-paper'

const orderTypeArray = [
  'Newest',
  'Olderst',
  'Rest'
]




const dateConverter = (hi) => {
    if(hi){
    return format(hi.toDate(), 'yyyy/MM/dd')
    }
}


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

const ReviewHairStyleSalonScreen = () => {
    const [currentType, setCurrentType] = useState('Newest')
    const {salonId} = useLocalSearchParams()
    const {data, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useInfiniteReviewsBySalonId(salonId, currentType)


    const cleanedList = useMemo(()=> {
        return data?.pages.flatMap(page => page.list)
    })


const renderItem = ({item, index}) => (
    <View style={{ width:Dimensions.get('screen').width,  padding:12, borderBottomWidth:0.8, borderColor:'lightgray', backgroundColor:'white' }}>

        <View style={{borderBottomWidth:0.8, height:80,  borderColor:'lightgray', flexDirection:'row', justifyContent:'space-between', paddingVertical:12}}>
            
            <View style={{height:'100%', width:'25%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'light', fontSize:12}}>
                    Overall{" "}
                    <Text style={{fontFamily:'regular', color:'red', fontSize:16}}>
                        {item?.overallRating}
                    </Text>
                </Text>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    {[...Array(Math.ceil(item?.overallRating))].map((item1,index) => (
                        <View key={index}>
                                               <AntDesign name="star" size={14} color={Colors.MAINPINK} />
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

                              <Text style={{fontFamily:'regular', color:'red', fontSize:14}}>
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
                {item?.reviewText}
            </Text>

                <Text style={{fontFamily:'light', fontSize:12, color:"gray", textAlign:'right'}}>
                    Posted On : {dateConverter(item?.createdAt)}

                </Text>

        </View>
    </View>
)

    

  return (
    <View style={{flex:1}}>
        <ReviewHairStyleSalonScreenHeaderCounter orderTypeArray={orderTypeArray} salonId={salonId} setCurrentType={setCurrentType} currentType={currentType} />

        <FlatList 
        onEndReachedThreshold={0}
        onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
        data={cleanedList}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color={Colors.MAINPINK} height={80} size={'large'}/> : null}
        contentContainerStyle={{gap:12, paddingVertical:12}}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={renderItem}
        
        />
      
    </View>
  )
}

export default ReviewHairStyleSalonScreen






// const dateConverter = (hi) => {
//     if(hi){
//     return format(hi.toDate(), 'yyyy/MM/dd')
//     }
// }


// const hi = [
//     {
//         key: 'atmosphere',
//         name: 'Atmosphere',
//     },
//         {
//         key: 'techniqueFinishes',
//         name: 'Finishes',
//     },
//         {
//         key: 'customerService',
//         name: 'Services',
//     },
//         {
//         key: 'menuPrice',
//         name: 'Menu',
//     },
// ]

// const StylistReviewsPreview = ({stylistId}) => {
//     const {data, error} = useReviewsByStylistIdPreview(stylistId)


// const renderItem = ({item, index}) => (
//     <View style={{ width:Dimensions.get('screen').width,  padding:12, borderBottomWidth:0.8, borderColor:'lightgray', backgroundColor:'white' }}>

//         <View style={{borderBottomWidth:0.8, height:80,  borderColor:'lightgray', flexDirection:'row', justifyContent:'space-between', paddingVertical:12}}>
            
//             <View style={{height:'100%', width:'25%', justifyContent:'center', alignItems:'center'}}>
//                 <Text style={{fontFamily:'light', fontSize:12}}>
//                     Overall{" "}
//                     <Text style={{fontFamily:'regular', color:'red', fontSize:16}}>
//                         {item?.overallRating}
//                     </Text>
//                 </Text>

//                 <View style={{flexDirection:'row', justifyContent:'space-around'}}>
//                     {[...Array(Math.ceil(item?.overallRating))].map((item1,index) => (
//                         <View key={index}>
//                                                <AntDesign name="star" size={14} color={Colors.MAINPINK} />
//                             </View>
     
//                     ))}
//                 </View>


//             </View>


//             <View style={{width:'50%', flexDirection:'row', flexWrap:'wrap',}}>
//                 {
//                     hi.map((item2, index) => (
//                         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'50%', paddingHorizontal:6}}>
//                               <Text style={{fontFamily:'light', fontSize:12}}>
//                                 {item2?.name}
//                             </Text>

//                               <Text style={{fontFamily:'regular', color:'red', fontSize:14}}>
//                                     {item[item2.key]}
//                             </Text>
//                          </View>
//                     ))
//                 }

//             </View>

//         </View>

   

//         <View style={{width:'100%', gap:8, paddingVertical:18, paddingHorizontal:8}}>

//             <Text style={{fontFamily:'light', fontSize:12, color:"gray"}}>
//                 {item?.gender}/{item?.age}
//             </Text>

//   <Text style={{fontFamily:'regular', fontSize:14, color:"black"}}>
//                     {item?.name}
//             </Text>
            
        
//   <Text style={{fontFamily:'regular', fontSize:12, color:"black", lineHeight:26}}>
//                 {item?.reviewText}
//             </Text>

//                 <Text style={{fontFamily:'light', fontSize:12, color:"gray", textAlign:'right'}}>
//                     Posted On : {dateConverter(item?.createdAt)}

//                 </Text>

//         </View>
//     </View>
// )


import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SalonHighLightBox = ({data}) => {

    const renderItem = ({item ,index}) => (
        <View style={{height:'100%', width:290, padding:12}}>

            <View style={{height:'100%', width:'100%', }}>
                <View style={{width:'100%', height:'70%', borderWidth:0.8, borderRadius:6,  borderColor:'lightgray', overflow:'hidden'}}>
                    <Image source={{uri:item?.image}} style={{height:'100%', width:'100%'}} />
                </View>

                <View style={{flex:1, width:'100%', paddingVertical:12, paddingHorizontal:8}}>
                    <Text style={{fontFamily:'light', fontSize:14}}>
                        {item?.title}
                    </Text>
                </View>

            </View>

        </View>
    )







  return (
    <View style={{width:'100%', marginTop:24}}>
            <View
        style={{
          height: 28,
          paddingHorizontal: 12,
          flexDirection: "row",
          backgroundColor: "#fecbca",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
          Today's Highlights
        </Text>
      </View>

              <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 12,
            height: 22,
            marginVertical:18,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{ height: "100%", width: 6, backgroundColor: "black" }}
          />

          <Text style={{ fontFamily: "regular", fontSize: 14 }}>Hilights</Text>
        </View>


<View style={{ height:310, width:'100%'}}>

        <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:12}}
    data={data?.highlights}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={renderItem}

    
    />


</View>









    </View>
  )
}

export default SalonHighLightBox
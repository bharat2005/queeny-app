import { View, Text, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Modal, Portal, RadioButton } from 'react-native-paper'
import { useInfiniteHairStyleByCategoryCounter } from '../../../hooks/hairstylecategory/useInfiniteHairStyleByCategoryCounter'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../../../constants/Colors'

const selectorList = [
  'popular',
  'trending',
  'newArrival'
]

const HairStyleInfiniteScreenHeader = ({categoryId, setCurrentType, currentType}) => {
  const {data, error} = useInfiniteHairStyleByCategoryCounter(categoryId)
  const [isVisible, setIsVisible] = useState(false)


  

  return (
    <View style={{width:Dimensions.get('screen').width, backgroundColor:'white'}}>

      <View style={{width:'100%', height:50, flexDirection:'row', borderBlockColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:18, paddingVertical:12, alignItems:'center', justifyContent:'space-between'}}>

      <Text style={{fontFamily:'bold', fontSize:16}}>
        {data}{" "}
        <Text style={{fontFamily:'regular', fontSize:12, color:'gray'}}>
          Items
        </Text>
      </Text>

      <Pressable>
          <Text style={{fontFamily:'medium', color:'red', fontSize:12}}>apply filter</Text>
      </Pressable>

      </View>



      
      <View style={{width:'100%', height:50, flexDirection:'row', borderBlockColor:'lightgray', paddingVertical:6, borderBottomWidth:0.8, paddingHorizontal:12, alignItems:'center', justifyContent:'flex-end', gap:12}}>



   <View  style={{flexDirection:'row', alignItems:'center', gap:4,position:'absolute', bottom:6, right:110, justifyContent:'flex-end'}}>
    <Feather name="info" size={12} color="red" />
            <Text style={{color:"red", fontFamily:'light', fontSize:12,}}>
                about {currentType} order?
            </Text>
    </View>

    <Pressable onPress={()=> setIsVisible(true)} style={{height:'100%', width:90, flexDirection:'row' ,borderRadius:8, borderWidth:0.8, padding:4, gap:4, borderColor:'lightgray', justifyContent:'center', alignItems:'center'}}>
<MaterialCommunityIcons name="arrow-up-down" size={14} color="gray" />
<Text style={{fontSize:12, fontFamily:'regular', color:'gray'}}>{currentType}</Text>
    </Pressable>



      </View>


<Portal>
  <Modal onDismiss={()=> setIsVisible(false)} visible={isVisible} style={{height:Dimensions.get('screen').height, width:Dimensions.get('screen').width}}>

    <View style={{padding:8, width:Dimensions.get('screen').width * 0.8, backgroundColor:'white', alignSelf:'center'}}>
      <RadioButton.Group value={currentType} onValueChange={(v) => {setCurrentType(v); setIsVisible(false)}}>
        {selectorList.map(item => (
          <View key={item}> 
<RadioButton.Item color={Colors.MAINPINK} label={item} value={item} />
          </View>
        ))}
        
      </RadioButton.Group>

    </View>

  </Modal>
</Portal> 
      
      
    </View>
  )
}

export default HairStyleInfiniteScreenHeader
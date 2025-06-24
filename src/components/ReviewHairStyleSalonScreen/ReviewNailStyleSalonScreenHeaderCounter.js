import { View, Text, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Modal, Portal, RadioButton } from 'react-native-paper'
import { useSizeNailStyleReviews } from '../../hooks/reviews/useSizeNailStyleReviews'
import Colors from '../../constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'



const ReviewNailStyleSalonScreenHeaderCounter = ({salonId, orderTypeArray, setCurrentType, currentType}) => {
  const {data, error} = useSizeNailStyleReviews(salonId)
  const [isVisible, setIsVisible] = useState(false)


  return (
    <View style={{width:Dimensions.get('screen').width, backgroundColor:'white'}}>
      <View style={{width:'100%', height:60, flexDirection:'row', borderBlockColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:18, paddingVertical:12, alignItems:'center', justifyContent:'space-between'}}>

      <Text style={{fontFamily:'bold', fontSize:16}}>
        {data}{" "}
        <Text style={{fontFamily:'regular', fontSize:12, color:'gray'}}>
          Items
        </Text>
      </Text>

   <Pressable onPress={()=> setIsVisible(true)}style={{height:'100%', width:90, flexDirection:'row' ,borderRadius:8, borderWidth:0.8, padding:4, gap:4, borderColor:'lightgray', justifyContent:'center', alignItems:'center'}}>
<MaterialCommunityIcons name="arrow-up-down" size={14} color="gray" />
<Text style={{fontSize:12, fontFamily:'regular', color:'gray'}}>Change</Text>
    </Pressable>

</View>

          <Portal>

              <Modal visible={isVisible} onDismiss={()=> setIsVisible(false)} style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').height, justifyContent:'center', alignItems:'center'}}>
                 
             
     <View style={{padding:8, width:Dimensions.get('screen').width * 0.8, backgroundColor:'white', alignSelf:'center'}}>

                      <RadioButton.Group value={currentType} onValueChange={(v)=> {setCurrentType(v); setIsVisible(false)}}>
                        {
                          orderTypeArray.map(item =>(
                            <View key={item}>
 <RadioButton.Item color={Colors.MAINPURPLE}  label={item} value={item} />
                            </View>
                           
                          ))
                        }
                      </RadioButton.Group>
                  

                 </View>

              </Modal>

          </Portal>





        

    </View>
  )
}

export default ReviewNailStyleSalonScreenHeaderCounter
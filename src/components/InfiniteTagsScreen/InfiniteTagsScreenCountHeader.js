import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useTagResultCounter } from '../../hooks/hairstyleTags/useTagResultCounter'
import { Modal, Portal, RadioButton } from 'react-native-paper'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'
import Colors from '../../constants/Colors'

const InfiniteTagsScreenCountHeader = ({tag, setVisible, visible, setType, type}) => {
  const {data, error} = useTagResultCounter(tag)

    
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
                about {type} order?
            </Text>
    </View>

    <Pressable onPress={()=> setVisible(true)} style={{height:'100%', width:90, flexDirection:'row' ,borderRadius:8, borderWidth:0.8, padding:4, gap:4, borderColor:'lightgray', justifyContent:'center', alignItems:'center'}}>
<MaterialCommunityIcons name="arrow-up-down" size={14} color="gray" />
<Text style={{fontSize:12, fontFamily:'regular', color:'gray'}}>{type}</Text>
    </Pressable>



      </View>

<Portal>
  <Modal onDismiss={()=> setVisible(false)} visible={visible} style={{height:Dimensions.get('screen').height, width:Dimensions.get('screen').width}}>

    <View style={{padding:8, width:Dimensions.get('screen').width * 0.8, backgroundColor:'white', alignSelf:'center'}}>
      <RadioButton.Group value={type} onValueChange={(v) => {setType(v); setVisible(false)}}>
      <RadioButton.Item color={Colors.MAINPINK} label='Popular' value='popular'/>
            <RadioButton.Item color={Colors.MAINPINK} label='Trending' value='trending'/>
            <RadioButton.Item color={Colors.MAINPINK} label='New' value='new'/> 
      </RadioButton.Group>

    </View>

  </Modal>
</Portal> 
      
      
    </View>


























//     <View style={{height:80, width:Dimensions.get('screen').width}}>

// <View style={{
//   flexDirection:'row', justifyContent:"space-between", backgroundColor:'teal', width:'100%', height:40
// }}>

//         <Text >
//         {data} Items
//       </Text>

//       <Text style={{color:"red"}}>
//         Filters
//       </Text>
    

// </View>

// <View style={{
//   flexDirection:'row', justifyContent:'flex-end', backgroundColor:'teal', width:'100%', height:40
// }}>

//   <Text style={{color:'red'}}>Info</Text>

//   <Pressable onPress={()=> setVisible(true)} style={{height:'100%', width:80}}>
//     <Text>Change</Text>
//   </Pressable>



// </View>

      
//     </View>
  )
}

export default InfiniteTagsScreenCountHeader
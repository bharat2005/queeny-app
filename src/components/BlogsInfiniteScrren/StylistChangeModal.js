import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'
import Colors from '../../constants/Colors'

const StylistChangeModal = ({data, stylistId, selectedStylist, setSelectedStylist, setIsVisible}) => {
 
  return (


    <View style={{padding:8, width:Dimensions.get('screen').width * 0.8, backgroundColor:'white', alignSelf:'center'}}>
      <RadioButton.Group value={selectedStylist} onValueChange={(v)=> {setSelectedStylist(v);setIsVisible(false) }}   >
        {data.map(item => (
          <View key={item?.docId}> 
<RadioButton.Item color={Colors.MAINPINK}  label={item?.name} value={item?.docId} />
          </View>
        ))}
        
      </RadioButton.Group>

    </View>






  )
}

export default StylistChangeModal
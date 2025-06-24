import { View, Text, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Modal, Portal } from 'react-native-paper'
import { useAllHairStylist } from '../../hooks/hairStylist/useAllHairStylist'
import StylistChangeModal from './StylistChangeModal'

const StylistChagneButton = ({stylistId, selectedStylist, setSelectedStylist}) => {
     const [isVisible, setIsVisible] = useState(false)
     const {data, error} = useAllHairStylist()
     const [stylistName, setStylistName] = useState('')

useEffect(()=> {
  if(data && stylistId) {
    const a = data?.find(item => item.docId === selectedStylist)?.name
    setStylistName(a)
  }

}, [selectedStylist])


    
  return (<>
 
  
      <Pressable onPress={()=> setIsVisible(true)} style={{height:'100%', width:140, flexDirection:'row' ,borderRadius:8, borderWidth:0.8, paddingHorizontal:12, gap:4, borderColor:'lightgray', justifyContent:'space-between', alignItems:'center'}}>

<Text style={{fontSize:12, fontFamily:'regular', color:'black'}}>{stylistName}</Text>

<Entypo name="chevron-thin-down" size={16} color="gray" />


    </Pressable>

  
  
      <Portal>
        <Modal visible={isVisible} onDismiss={()=> setIsVisible(false)} style={{height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}}>
<StylistChangeModal setIsVisible={setIsVisible} data={data} stylistId={stylistId} {...{selectedStylist, setSelectedStylist}}/>
        </Modal>
      </Portal>
  
  
  </>

  )
}

export default StylistChagneButton
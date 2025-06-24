import { View, Text, Dimensions, Pressable, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import  Colors  from '../../src/constants/Colors'
const Start = () => {
  return (
<View style={{flex:1, paddingTop:200}}>
  <LinearGradient style={{position:'absolute', height:Dimensions.get('screen').height, width:'100%', zIndex:-1}} colors={[Colors.LIGHTPINK, Colors.MAINPINK, Colors.MAINPINK,  Colors.LIGHTPINK]} start={{x:0, y:0}} end={{x:1, y:1}} locations={[0, 0.3, 0.7, 1]} />

  <View style={{ width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}}>

    <Text style={{fontFamily:'medium',fontSize:48,color:'white', textAlign:'center'}}>Queeny</Text>
     <Text style={{fontFamily:'medium',fontSize:13, textAlign:'center', color:'white'}}>Shine like a queen, always, forever</Text>

  </View>




  <View style={{position:'absolute', bottom:80, alignItems:'center', width:Dimensions.get('screen').width}}>

    <View style={{width:'78%', backgroundColor:'white', borderRadius:12, paddingVertical:28, paddingHorizontal:22, gap:18}}>

      <View style={{width:'80%', justifyContent:'center', alignItems:'center', marginHorizontal:'auto'}}>
        <Text style={{fontFamily:'regular', color:'black', textAlign:'center', fontSize:12}}>Join Queeny and let your beauty shine every single day </Text>
      </View>
<Button onPress={()=> router.push( '/(auth)/register' )} mode='contained' style={{height:48, borderRadius:24, backgroundColor:Colors.MAINPINK}} contentStyle={{height:48}} labelStyle={{fontFamily:'regular', fontSize:14}}>
  Register
</Button>


<Button onPress={()=> router.push( '/(auth)/login' )} mode='outlined' style={{height:48, borderRadius:24, borderColor:Colors.MAINPINK}} contentStyle={{height:48}} labelStyle={{fontFamily:'regular',color:Colors.MAINPINK, fontSize:14}}>
  Login
</Button>

    
    </View>
    <Text style={{marginTop:12, fontFamily:'light', color:'white', fontSize:12}}>version L.O.V.E</Text>

  </View>


</View>
  )
}

export default Start
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Colors from '../../constants/Colors'

const ButtonUnit = ({handleSubmit, isSubmitting}) => {
  return (
    <View style={{ width:'100%', justifyContent:'center', backgroundColor:'', gap:18, marginTop:12}}>

        <Text style={{textAlign:'center', fontFamily:'regular', fontSize:12}}>
            I accept the{" "}
            <Text style={{textDecorationLine:'underline'}}>
                Terms & Conditions
            </Text> and{" "}<Text style={{textDecorationLine:'underline'}}>
                 Privacy Policy.
            </Text>
        </Text>

        <Button onPress={handleSubmit} loading={isSubmitting} disabled={isSubmitting} mode='contained' style={{height:50, backgroundColor: isSubmitting ? 'lightgray' : Colors.MAINPINK, borderRadius:24}} contentStyle={{height:50}} labelStyle={{fontFamily:'bold', color:'white', fontSize:16}} >
                Register
        </Button>
     
    </View>
  )
}

export default ButtonUnit
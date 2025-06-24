import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, HelperText, TextInput } from 'react-native-paper'
import Colors from '../../constants/Colors'

const InputUnit = ({title='Enter',values, setFieldValue}) => {
    const [bool, setBool] = useState(true)
  return (

                        <View style={{}}>
                      <Text
                        style={{
                          fontFamily: "regular",
                          fontSize: 14,
                          marginVertical: 6,
                        }}
                      >
                    {title}
                      </Text>

                      <View style={{height:50, width:'100%', borderWidth:1, borderColor:'gray', backgroundColor:'white', borderRadius:2, alignItems:'center', flexDirection:'row', paddingHorizontal:12, paddingVertical:12}}>
                        <Checkbox color={Colors.MAINPINK} onPress={()=> setFieldValue('agreed',!values.agreed)} status={values.agreed ? 'checked' : 'unchecked'} />

                          <Text style={{fontFamily:'medium', fontSize:14, color: values.agreed ? Colors.MAINPINK : 'lightgray'}}>
                            I accept that I want to waste my time.
                          </Text>
                      </View>
                      <HelperText visible={false} style={{color:'red'}}>
                      
                     </HelperText>
                    </View>
  )
}

export default InputUnit
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HelperText, TextInput } from 'react-native-paper'
import Colors from '../../constants/Colors'

const InputUnit = ({title='Enter', errorVisible=false, placeholder='placeholder', secureTextEntry=false, handleChange,  handleBlur, error, touched, value}) => {
    const [hide, setHide] = useState(true)
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

                      <TextInput
                      secureTextEntry={secureTextEntry && hide}
                      onChangeText={handleChange}
                      onBlur={handleBlur}
                      error={!!error && touched === true}
                        mode="outlined"
                        style={{ height: 50 }}

                        right={secureTextEntry ? <TextInput.Icon forceTextInputFocus={false} onPress={()=>setHide(prev => !prev)} icon={hide ? 'eye' : 'eye-off'} color="gray" /> : null}
                        placeholder={placeholder}
                        
                        placeholderTextColor={"lightgray"}
                        theme={{
                          roundness: 2,
                          colors: {
                            primary: Colors.MAINPINK,
                          },
                        }}
                      />
                      <HelperText visible={!!error && touched === true} style={{color:'red'}}>
                      {error}
                     </HelperText>
                    </View>
  )
}

export default InputUnit
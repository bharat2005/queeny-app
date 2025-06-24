import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { HelperText, TextInput } from 'react-native-paper'
import Colors from '../../constants/Colors'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { format } from 'date-fns'


const InputUnit = ({title='Enter', setFieldValue, values, errors, setFieldTouched, touched}) => {
    const [hide, setHide] = useState(false)
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


<Pressable    onPress={()=> setHide(true)}>
              <TextInput
                    
                      editable={false}
                      value={values.dob ? format(values.dob, 'dd-MM-yyyy') : ''}
                        mode="outlined"
                        style={{ height: 50 }}
                        placeholder={'Ex: 25-05-2005'}
                        placeholderTextColor={"lightgray"}
                        error={!!errors.dob && touched.dob === true}
                        theme={{
                          roundness: 2,
                          colors: {
                            primary: Colors.MAINPINK,
                          },
                        }}
                      />
</Pressable>
        
                      <HelperText visible={!!errors.dob && touched.dob === true} style={{color:'red'}}>
                      {errors.dob}
                     </HelperText>

    <DateTimePicker
        isVisible={hide}
        mode="date"
        onConfirm={(v)=>{setHide(false);setFieldTouched('dob', true) ; setFieldValue('dob', v);  }}
        onCancel={()=> {setHide(false); setFieldTouched('dob', true)}}
      />
                    </View>
  )
}

export default InputUnit
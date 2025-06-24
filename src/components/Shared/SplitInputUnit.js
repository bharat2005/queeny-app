import { View, Text } from 'react-native'
import React from 'react'
import { HelperText, TextInput } from 'react-native-paper'
import Colors from '../../constants/Colors'

const SplitInputUnit = ({ title='Enter', firstNameChange, firstNameBlur, lastNameBlur,  lastNameChange, values, errors, touched   }) => {
  return (
         <View>
                      <Text
                        style={{
                          fontFamily: "regular",
                          fontSize: 14,
                        }}
                      >
                        {title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ height: "100%", width: "45%" }}>
                          <TextInput
                            mode="outlined"
                            onBlur={firstNameBlur}
                            value={values.firstName}
                            onChangeText={firstNameChange}
                            style={{ height: 50 }}
                            placeholder={'Ex: Bharat'}
                            placeholderTextColor={"lightgray"}
                            error={!!errors.firstName && touched.firstName=== true}
                            theme={{
                              roundness: 2,
                              colors: {
                                primary: Colors.MAINPINK,
                              },
                            }}
                          />
                          <HelperText visible={!!errors.firstName && touched.firstName=== true} style={{color:'red'}}>
                      {errors.firstName}
                     </HelperText>
                        </View>

                        <View style={{ height: "100%", width: "45%" }}>
                          <TextInput
                            mode="outlined"
                            value={values.lastName}
                            style={{ height: 50 }}
                               error={!!errors.lastName && touched.lastName=== true}
                            onChangeText={lastNameChange}
                            placeholder={'Ex: Deshmukh'}
                            onBlur={lastNameBlur}
                            placeholderTextColor={"lightgray"}
                            theme={{
                              roundness: 2,
                              colors: {
                                primary: Colors.MAINPINK,
                              },
                            }}
                          />
                          <HelperText visible={!!errors.lastName && touched.lastName === true} style={{color:'red'}}>
                      {errors.lastName}
                     </HelperText>
                        </View>
                      </View>
                    </View>

  )
}

export default SplitInputUnit
import { View, Text } from 'react-native'
import React from 'react'
import { HelperText, RadioButton } from 'react-native-paper'
import Colors from '../../constants/Colors'
import { set } from 'date-fns';

const genderList = ["Female", "Male", "Other"];

const RadioInputUnit = ({title='Enter',setFieldValue, errors, values}) => {
  return (
   <View>
                      <Text
                        style={{
                          fontFamily: "regular",
                          fontSize: 14,
                          marginVertical: 6,
                        }}
                      >
                        {title}
                      </Text>

                      <RadioButton.Group
                        value={values.gender}
                        onValueChange={(v)=> setFieldValue('gender', v)}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          {genderList.map((item) => (
                            <View
                            key={item}
                              style={{
                                backgroundColor: "white",
                                borderRadius: 2,
                                borderWidth: 1,
                                borderColor: "gray",
                              }}
                            >
                              <RadioButton.Item
                                color={Colors.MAINPINK}
                                labelStyle={{
                                  fontFamily: "regular",
                                  fontSize: 14,
                                }}
                                style={{ height: 55 }}
                                label={item}
                                value={item}
                              />
                            </View>
                          ))}
                        </View>
                      </RadioButton.Group>
                           <HelperText visible={false} style={{color:'red'}}>
                      
                     </HelperText>
                    </View>

  )
}

export default RadioInputUnit
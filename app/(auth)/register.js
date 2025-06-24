import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, HelperText, RadioButton, TextInput } from "react-native-paper";
import { useAuth } from "../../src/contexts/AuthContextProvider";
import { router, useNavigation } from "expo-router";
import ScreenHeader from "../../src/components/Shared/ScreenHeader";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../src/constants/Colors";
import InputDateUnit from "../../src/components/Shared/InputDateUnit";
import DatePicker, {} from 'react-native-date-picker'
import {} from "react-native-paper";
import InputUnit from "../../src/components/Shared/InputUnit";4
import CheckboxUnit from '../../src/components/Shared/CkeckBoxUnit'
import SplitInputUnit from "../../src/components/Shared/SplitInputUnit";
import RadioInputUnit from "../../src/components/Shared/RadioInputUnit";
import ButtonUnit from "../../src/components/Shared/ButtonUnit";
import { confirmPasswordReset } from "firebase/auth";



const Register = () => {
  const { register } = useAuth();

  const [hide, setHide] = useState(true);
  const validation = Yup.object({
    email: Yup.string().required("Requiered*").email("Should eb email only"),
    password: Yup.string()
      .required("Requiered*")
      .min(6, "Must be atleast 6 char long"),
    firstName: Yup.string().required("Requiered*"),
    lastName: Yup.string().required("Requiered*"),
        dob: Yup.string().required("Requiered*"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'password should match').required('Requeried*'),
        agreed: Yup.boolean().oneOf([true])


  });

  const handleRegister = async (values) => {
    await register(values);
  };

  return (
 
      
        <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} edges={['top', 'bottom']}>
          <ScreenHeader title="Register" />

          <Formik
            onSubmit={handleRegister}
            initialValues={{ email: "", firstName: "", lastName:"",  gender:"Female",  password: "" , confirmPassword:'',  dob: '', agreed:false}}
            validationSchema={validation}
          >
            {({
              handleBlur,
              handleChange,
              handleReset,
              setFieldValue,
              setFieldTouched,
              handleSubmit,
              isValid,
              touched,
              errors,
              values,
              isSubmitting,
            }) => (
              <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 18 }}>

                
                <View
                  style={{
                    backgroundColor: Colors.LIGHTPINK,
                    flex:1,
                    paddingHorizontal: 24,
                    paddingVertical: 18,
                  }}
                >


                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      height: 60,
                    }}
                  >
                    <Text style={{ fontFamily: "medium", fontSize: 18 }}>
                      JOIN TO QUEENY
                    </Text>
                    <Text
                      style={{
                        fontFamily: "light",
                        color: "gray",
                        fontSize: 12,
                      }}
                    >
                      Let's begin your cute journey
                    </Text>
                  </View>

<View style={{ paddingTop: 32 }}>


<SplitInputUnit firstNameChange={handleChange('firstName')} firstNameBlur={handleBlur('firstName')} lastNameBlur={handleBlur('lastName')} errors={errors}  touched={touched} lastNameChange={handleChange('lastName')} values={values}  title="Enter You Name"  placeholder1="Ex: Bharat" placeholder2="Ex: Deshmukh"/>
                 
<RadioInputUnit title="Select you Gender" setFieldValue={setFieldValue}  values={values} errors={errors} touched={touched} />

<InputDateUnit title='Select your DOB' touched={touched}  setFieldValue={setFieldValue} values={values} errors={errors} setFieldTouched={setFieldTouched} />



<InputUnit title='Enter your email address' handleChange={handleChange('email')} handleBlur={handleBlur('email')} error={errors.email} touched={touched.email} value={values.email} placeholder="Ex: bharat@gmail.com"  />

<InputUnit secureTextEntry={true} title='Set your password' handleChange={handleChange('password')} handleBlur={handleBlur('password')} error={errors.password} touched={touched.password} value={values.password} placeholder="Ex: bharat@0000"  />

<InputUnit secureTextEntry={true} title='Confirm your password' handleChange={handleChange('confirmPassword')} handleBlur={handleBlur('confirmPassword')} error={errors.confirmPassword} touched={touched.confirmPassword} value={values.confirmPassword} placeholder="Re-enter your password"  />



<CheckboxUnit title='Confirm your Persmisin' placeholder="conform that you agree" secureTextEntry={true} values={values} setFieldValue={setFieldValue}/>


<ButtonUnit handleSubmit={handleSubmit} isSubmitting={isSubmitting} />


        </View>
              </View>

<View style={{width:'100%', height:80, justifyContent:'center', alignItems:'center'}}>

  <Pressable onPress={()=> router.push('/(auth)/login')}>
    <Text style={{fontFamily:'regular', color:'gray', fontSize:14}}>Already have an account?</Text>
  </Pressable>

</View>

              </ScrollView>
            )}
          </Formik>
        </SafeAreaView>

 
  );
};

export default Register;






{/* <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TextInput 
                    placeholder='username'
          style={{width: 200}}
          onChangeText={handleChange('username')}
          value={values.username}
          onBlur={handleBlur('username')}
          error={!!errors.username && touched.username === true }
          />
          <HelperText style={{color:'red'}} visible={!!errors.username && touched.username === true}>
            {errors.username}
          </HelperText>


              

          <TextInput 
          placeholder='email'
          style={{width: 200}}
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}
          error={!!errors.email && touched.email === true }
          />
          <HelperText style={{color:'red'}} visible={!!errors.email && touched.email === true}>
            {errors.email}
          </HelperText>


          <TextInput 
          secureTextEntry={hide}
          right={<TextInput.Icon onPress={()=>setHide(prev => !prev)} icon={hide ? 'eye-off' : 'eye'}  />}
          placeholder='password'
          style={{width: 200}}
          onChangeText={handleChange('password')}
          value={values.password}
          onBlur={handleBlur('password')}
          error={!!errors.password && touched.password === true }
          />
          <HelperText style={{color:'red'}} visible={!!errors.password && touched.password === true}>
            {errors.password}
          </HelperText>


          <Button loading={isSubmitting} disabled={isSubmitting} onPress={handleSubmit} mode='contained'>
            Register
          </Button>


                </View> */}

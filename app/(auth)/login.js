import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Login = () => {
  const {login} = useAuth()
  const [hide, setHide] = useState(true)
  const validation = Yup.object({
    email:Yup.string().required("Requiered*").email("Should eb email only"),
    password:  Yup.string().required("Requiered*").min(6,"Must be atleast 6 char long"),
  })

  const handleLogin = async(values) =>{
    await login(values.email, values.password)
  }
  return (

        <Formik
      onSubmit={handleLogin}
      initialValues={{email:'', password:''}}
      validationSchema={validation}
      >

        {({handleBlur, handleChange, handleReset, handleSubmit, touched, errors, values, isSubmitting})=>(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              

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


    </View>
  </TouchableWithoutFeedback>
      
        )}



      </Formik>



  )
}

export default Login
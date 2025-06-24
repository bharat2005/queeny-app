
import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { Button } from 'react-native-paper'

const Profile = () => {
  const {logout} = useAuth()

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Button mode='outlined' onPress={logout}>
      Logout
    </Button>
    </View>
  )
}

export default Profile
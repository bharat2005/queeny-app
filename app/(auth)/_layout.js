import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>

      <Stack.Screen name="prestart" />
      <Stack.Screen
        name="start"
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="register"
        options={{
          animation: 'slide_from_right'}}
      />
      <Stack.Screen name="login" options={{ animation: "fade_from_bottom" }} />
    </Stack>
  );
};

export default AuthLayout;

import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "../../constants/Colors";
import { router } from "expo-router";

const ScreenHeader = ({title='Heading'}) => {
  return (
    <View
      style={{
        height: 55,
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        backgroundColor:'white',
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: Colors.LIGHTPINK,
        borderBottomWidth:2
      }}
    >
      <Pressable
      onPress={()=> router.back()}
        style={{ position: "absolute", marginHorizontal: 12, left: 0 }}
      >
        <Entypo name="chevron-thin-left" size={24} color="gray" />
      </Pressable>

      <Text style={{ fontFamily: "medium", fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

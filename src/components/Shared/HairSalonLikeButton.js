import { View, Text, Pressable } from "react-native";
import React from "react";
import { useHairSalonLike } from "../../hooks/hairstyleSalon/useHairSalonLike";
import AntDesign from "@expo/vector-icons/AntDesign";
import { mutateHairSalonLike } from "../../hooks/hairstyleSalon/mutateHairSalonLike";
import Colors from "../../constants/Colors";

const HairSalonLikeButton = ({salonId}) => {
  const {data, error} = useHairSalonLike(salonId)
  const {mutate, error:merror} = mutateHairSalonLike(salonId)




  return (
    <Pressable onPress={()=> mutate({isLiked:  data})}>
      <AntDesign name={data ? "heart" : 'hearto'} size={24} color= {Colors.MAINPINK} />
    </Pressable>
  );
};

export default HairSalonLikeButton;

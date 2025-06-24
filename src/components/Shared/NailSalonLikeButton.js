import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNailSalonLike } from "../../hooks/hairstyleSalon/useNailSalonLike";
import AntDesign from "@expo/vector-icons/AntDesign";
import { mutateNailSalonLike } from "../../hooks/hairstyleSalon/mutateNailSalonLike";
import Colors from "../../constants/Colors";

const NailSalonLikeButton = ({salonId}) => {
  const {data, error} = useNailSalonLike(salonId)
  const {mutate, error:merror} = mutateNailSalonLike(salonId)





  return (
    <Pressable onPress={()=> mutate({isLiked:  data})}>
      <AntDesign name={data ? "heart" : 'hearto'} size={24} color= {Colors.MAINPURPLE} />
    </Pressable>
  );
};

export default NailSalonLikeButton;

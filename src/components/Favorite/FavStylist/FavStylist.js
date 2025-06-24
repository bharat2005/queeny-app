import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import StylistLikeButton from "../../Shared/StylistLikeButton";
import { useStylsitLikesList } from "../../../hooks/hairstyleStylist/useStylistLIkesList";
import LikesHeaaderCounter from "../../Shared/LikesHeaaderCounter";
import LIkedStylistCard from '../../Shared/LikedStylistCard'

const FavStylist = () => {
const {data, error} = useStylsitLikesList()



  const renderItem = ({ item, index }) => (
    <View
      style={{
        height: 300,
        width: Dimensions.get("screen").width,
        padding: 2,
        overflow: "hidden",
      }}
    >
      <StylistLikeButton stylistId={item?.docId} />

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/stylistScreen",
            params: { stylistId: item?.docId },
          })
        }
        style={{ height: "100%", width: "100%", backgroundColor: "green" }}
      >
        <Text>{JSON.stringify(item)}</Text>
      </Pressable>
    </View>














  );

  return (
    <View style={{ flex: 1 }}>

      <LikesHeaaderCounter count={data?.length}/>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index})=> <LIkedStylistCard item={item} />}
      />
    </View>
  );
};

export default FavStylist;

import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Colors from "../../../constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import HairStyleModalBox from "../../Shared/HairStyleModalBox";

const HairStyleTagsSection = ({ tags, data }) => {
  const [expand, setExpand] = useState(false);
  const array = data ? [
    ...data?.tags,
    ...data?.tags,
    ...data?.tags,
    ...data?.tags,
    ...data?.tags,
    ...data?.tags,
  ] : []

  return (
    <View style={{ width: "100%", marginVertical: 12, gap: 12 }}>
      <View
        style={{
          height: 28,
          paddingHorizontal: 12,
          flexDirection: "row",
          backgroundColor: "#655555",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "regular", color: "white", fontSize: 14 }}>
          Tags Section
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 12,
            height: 22,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{ height: "100%", width: 6, backgroundColor: "black" }}
          />

          <Text style={{ fontFamily: "regular", fontSize: 14 }}>Tags</Text>
        </View>

        <View style={{ width: "100%", padding: 8 }}>
          <View
            style={{
              padding: 4,
              height: expand ? undefined : 67,
              overflow: "hidden",
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {array.map((item, index) => (
              <Pressable
                style={{ padding: 6 }}
                key={index}
                onPress={() =>
                  router.push({
                    pathname: "/tagInfiniteScreen",
                    params: { tag: item },
                  })
                }
              >
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 14,
                    color: Colors.MAINPINK,
                  }}
                >
                  #{item}
                </Text>
              </Pressable>
            ))}
          </View>
          <Pressable
            onPress={() => setExpand((prev) => !prev)}
            style={{
              height: 40,
              marginTop:12,
              width: "100%",
              flexDirection: "row",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name={expand ? "chevron-thin-down" : "chevron-thin-up"}
              size={18}
              color="gray"
            />
            <Text style={{ fontFamily: "medium", fontSize: 14 }}>
              {expand ? "more expand" : "less expand"}
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 12,
            height: 22,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{ height: "100%", width: 6, backgroundColor: "black" }}
          />

          <Text style={{ fontFamily: "regular", fontSize: 14 }}>Modals</Text>
        </View>

        <HairStyleModalBox data={data} />




      </View>































      

      {/* 
            {tags.map((item, index) => (
                <Pressable key={index} onPress={()=> router.push({pathname:'/tagInfiniteScreen', params:{tag: item}})} style={{height:50, backgroundColor:'black', margin:12}}>
                    <Text style={{color:'white'}}>{item}</Text>
                </Pressable>
            ))} */}
    </View>
  );
};

export default HairStyleTagsSection;

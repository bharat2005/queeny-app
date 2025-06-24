import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Button, TouchableRipple } from "react-native-paper";
import Colors from "../../src/constants/Colors";

const pageData = [
  {
    title: "Discover beauty & style you’ll adore ",
    image: "https://i.pinimg.com/736x/8e/3c/ac/8e3cac8a41430c6472d5c6f293a153f9.jpg"
  },
  {
    title: "Find trending looks & inspirations",
    image: "https://i.pinimg.com/736x/29/f2/a9/29f2a9e4d20ad7ac9077b511df9c8ddd.jpg",
  },
  {
    title: "Your go-to app for all things pretty ",
    image: "https://i.pinimg.com/736x/8a/41/17/8a41170687c6c6e243d08acbf7e1e7cf.jpg",
  },
  {
    title: "Pretty styles await you!",
    image: "https://i.pinimg.com/736x/5b/c1/c0/5bc1c074ab70c3bf1be0f5a527382fb7.jpg",
  },
];

const prestart = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page <= 2) {
      setPage((prev) => prev + 1);
    } else {
      router.push("/(auth)/start");
    }
  };

  return (
    <View style={{ flex: 1,         backgroundColor: Colors.LIGHTPINK, }}>
      <View
        style={{
          height: Dimensions.get("screen").height * 0.78,
          width: "100%",
          backgroundColor: Colors.LIGHTPINK,
          justifyContent: "flex-end",
        }}
      >
        <Pressable
        //onPress={()=>setPage(prev => prev -1)}
          onPress={() => router.push("/(auth)/start")}
          style={{ position: "absolute", right: 18, top: 48 }}
        >
          <Text style={{ fontFamily: "regular", fontSize: 16, color: "black" }}>
            Skip
          </Text>
        </Pressable>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            marginHorizontal: "auto",
            marginVertical:36,
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 28,
              color: '#FF265D',
              textAlign: "center",
            }}
          >
            {pageData[page]?.title}
          </Text>
        </View>

        <View
          style={{ width: "100%", height: "60%", marginBottom:74}}
        >
          <Image source={{uri:pageData[page]?.image}} style={{height:'100%', width:'100%', backgroundColor:Colors.LIGHTPINK}} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingVertical: 22,
            gap: 18,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[...Array(4)].map((item, index) => (
            <View
              key={index}
              style={{
                height: index === page ? 14 : 8,
                width: index === page ? 14 : 8,
                borderRadius: index === page ? 10 : 5,
                backgroundColor: index === page ? "black" : "grey",
              }}
            ></View>
          ))}
        </View>

        <View
          style={{
            marginTop: 38,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            mode="contained"
            onPress={handleNext}
            style={{
              backgroundColor: Colors.MAINPINK,
              height: 50,
              borderRadius: 28,
              width: "80%",
            }}
            labelStyle={{ fontFamily: "light", fontSize: 18 }}
            contentStyle={{ height: 50 }}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  );
};

export default prestart;

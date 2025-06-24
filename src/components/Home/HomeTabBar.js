import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import Colors, {} from '../../constants/Colors'

const HomeTabBar = ({routes, setIndex, index}) => {
  return (
    <View
      style={{
        height: 48,
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >

        {routes.map((item, i) => (

    <Pressable
    key={item.key}
    onPress={()=> setIndex(i)}
        style={{
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
            <Text style={{fontFamily:"regular", fontSize:14, color: index === i ? index === 0 ? Colors.MAINPINK : Colors.MAINPURPLE : 'gray'}}>{item.title}</Text>

           {
           ( index === i ) && (
                <View style={{height:2, width:'90%', borderRadius:12, backgroundColor: index === 0 ? Colors.MAINPINK : Colors.MAINPURPLE, position:'absolute', bottom:0}}/>
            )
           } 
      </Pressable>

        ))}



    </View>
  );
};

export default HomeTabBar;

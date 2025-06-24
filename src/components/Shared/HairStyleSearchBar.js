import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import RollingBar, {} from 'react-native-rolling-bar'

const searchType= [
     [
        <Text>Search for "Summer Haircuts" ☀️</Text>,
<Text>Find your "Perfect Bob Cut" ✂️</Text>,
<Text>Looking for "Korean Perm"? 🇰🇷</Text>,
<Text>Type to discover "Trendy Layers" 💇‍♀️</Text>,
<Text>Explore "Balayage Colors" 🎨</Text>,
<Text>Search "Face-Framing Bangs" ✨</Text>,
<Text>Find "Airy Updos" 🌬️</Text>,
<Text>Try "Romantic Curls" 💕</Text>,
<Text>Discover "Chic Short Styles" 🖤</Text>,
<Text>"Volume Boost" or "Silky Straight"? 💆‍♀️</Text>,
<Text>What’s your hair vibe today? 🌟</Text>,

    ],
 [
        <Text>Search for "Summer Nails" 🌞</Text>,
<Text>Looking for "Korean Gel Nails"? 🇰🇷</Text>,
<Text>Discover "Pastel Nails" 🌸</Text>,
<Text>Type to find "Glitter Nails" ✨</Text>,
<Text>Explore "Minimalist Nails" 🎀</Text>,
<Text>Try "Elegant French Tips" 💅</Text>,
<Text>"Matte" or "Glossy"? 💖</Text>,
<Text>Find "3D Nail Art" 🎨</Text>,
<Text>Search for "Holiday Nail Ideas" 🎄</Text>,
<Text>What’s your nail mood today? 💫</Text>,

    ]
]

const HairStyleSearchBar = ({index}) => {
  return (
    <View style={{ width:'100%', height:80, paddingHorizontal:18, paddingVertical:18, backgroundColor:'white'}}>
        <Pressable style={{height:'100%', width:'100%', borderRadius:8, flexDirection:'row', backgroundColor:Colors.SEARCHBAR, alignItems:'center', paddingHorizontal:12, gap:12}}>

        <Feather name="search" size={24} color={index === 1 ? Colors.MAINPURPLE : Colors.MAINPINK} />


    <RollingBar defaultStyle={false}>
        {
            searchType[index].map((item, i) => (
                <View key={i}>
                    {item}
                </View>
            ))
        }

    </RollingBar>

        </Pressable>
    </View>
  )
}

export default HairStyleSearchBar
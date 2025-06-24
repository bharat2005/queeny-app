import { View, Text, Dimensions, FlatList } from 'react-native'
import React from 'react'
import CategoryList from './CategoryList/CategoryList'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'


const featureList = [
{
    title: 'Seasonal Hairstyles',
    list: [
    {
        uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS442_f1.jpg?switch=2025052812',
        name: 'Handsome Short',
        id:'handsomeShort'
    },
        {
             uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS443_f1.jpg?switch=2025052812',
        name: 'Wavy Hair',
        id:'wavyhair'
    },
            {
          uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS444_f1.jpg?switch=2025052812',
        name: 'Layred Bob',
        id:'layredBob'
    },
                {
                  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS445_f1.jpg?switch=2025052812',
        name: 'Highlight Color',
        id:'highlightColor'
    },

                    {
                          uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS446_f1.jpg?switch=2025052812',
        name: 'High Tone Color',
        id:'hightoneColor'
    },
                    {
                          uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS447_f1.jpg?switch=2025052812',
        name: 'Milk Tea Beige',
        id:'milkTeaBeige'
    },
                    {
                          uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS448_f1.jpg?switch=2025052812',
        name: 'Nuance Perm',
        id:'nuancePerm'
    },
                    
    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS449_f1.jpg?switch=2025052812',
        name: 'Layer Cut',
        id:'layerCut'
    },
                    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS450_f1.jpg?switch=2025052812',
        name: 'UnCut Bob',
        id:'unCutBob'
    },



]

},


{
    title: 'Standard Hairstyles',
    list: [
    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS013_f1.jpg?switch=2025052812',
        name: 'Unfinished Hair',
        id:'unfinishedHair'
    },
        {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS016_f1.jpg?switch=2025052812',
        name: 'Small Face Hair',
        id:'smallFaceHair'
    },
            {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS012_f1.jpg?switch=2025052812',
        name: 'Easy Styling',
        id:'easyStyling'
    },
                {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS407_f1.jpg?switch=2025052812',
        name: 'Curly Hair Cut',
        id:'curlyHairCut'
    },

                    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS015_f1.jpg?switch=2025052812',
        name: 'Gray Hair Care',
        id:'grayHairCare'
    },
                    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CS362_f1.jpg?switch=2025052812',
        name: 'Color Without Bleach',
        id:'colorWithoutBleach'
    },
]
},


{
    title:'Hairstyles Videos',
    list: [
    {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CM001_f1.jpg?switch=2025052812',
        name: 'Understand Before & After',
        id:'beforeAfter'
    },
        {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CM002_f1.jpg?switch=2025052812',
        name: '360 degree view',
        id:'360Deg'
    },
            {  uri:'https://imgbp.hotp.jp/CSP/img/hc/top/photo/special/CM003_f1.jpg?switch=2025052812',
        name: 'Know your hair quality and shine',
        id:'knowQuality'
    },

]
}


]



const FeatureList = () => {
  return (
    <View style={{width:Dimensions.get('screen').width}}>

        <SharedSectionHeader  title='Search By Features' isMore={'featurelist'}   />


 
    
        <FlatList
        data={featureList}
        scrollEnabled={false}
        contentContainerStyle={{gap:24}}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item, index})=> <CategoryList data={item} />}
        />


    </View>
  )
}

export default FeatureList
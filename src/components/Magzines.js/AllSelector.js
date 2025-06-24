import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const typeSelectOptions = [
  'Popular',
  'New Arrivals',
  'Trending'
]

const AllSelector = ({currenttType, setCurrentType }) => {




  return (



  <View style={{height:70, width:Dimensions.get('screen').width, padding:14, paddingVertical:14, backgroundColor:'white'}}>


      <View style={{height:'100%', width:'100%', flexDirection:'row', borderWidth:1.5, borderRadius:12, borderColor:Colors.MAINPINK,overflow:'hidden'}}>


         {
            typeSelectOptions.map((item, index) => (


          <Pressable key={index} onPress={()=> setCurrentType(item)}
          style={{height:'110%',
             width:'33.333%',
              backgroundColor:item === currenttType ? Colors.MAINPINK : 'white',
              borderRightWidth: index !== 3 ? 0.5 : 0,
               borderRightColor:Colors.MAINPINK,
                  borderLeftWidth: index !== 3 ? 0.5 : 0,
                    borderLeftColor:Colors.MAINPINK,
                justifyContent:"center",
                 alignItems:'center'
                }}
          
          >

                <Text style={{fontFamily:'regular', fontSize:14, color: currenttType !== item ? 'gray' : 'white' }}>{item}</Text>

            </Pressable>

                
            ))
        }



      </View>



        

      
    </View>










  )
}

export default AllSelector
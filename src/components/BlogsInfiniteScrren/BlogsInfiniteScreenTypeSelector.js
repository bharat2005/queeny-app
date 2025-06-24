import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const selectorTypes = [
    {title: 'New Arrivals', id: 'newArrival'},
     {title: 'Categories', id: 'categories'},
      {title: 'Staff', id: 'staff'},
       {title: 'BlackBox', id: 'blackBox'},
]

const BlogsInfiniteScreenTypeSelector = ({currentType, setCurrentType}) => {


  return (
    <View style={{height:80, width:Dimensions.get('screen').width, padding:14, paddingVertical:14, backgroundColor:'white'}}>


      <View style={{height:'100%', width:'100%', flexDirection:'row', borderWidth:1.5, borderRadius:12, borderColor:Colors.MAINPINK,overflow:'hidden'}}>


         {
            selectorTypes.map((item, index) => (


          <Pressable onPress={()=>setCurrentType(item?.id)} 
          style={{height:'110%',
             width:'25%',
              backgroundColor:item?.id === currentType ? Colors.MAINPINK : 'white',
              borderRightWidth: index !== 3 ? 0.5 : 0,
               borderRightColor:Colors.MAINPINK,
                  borderLeftWidth: index !== 3 ? 0.5 : 0,
                    borderLeftColor:Colors.MAINPINK,
                justifyContent:"center",
                 alignItems:'center'
                }}
          
          >

                <Text style={{fontFamily:'regular', fontSize:12, color: item?.id !== currentType ? 'gray' : 'white' }}>{item?.title}</Text>

            </Pressable>

                
            ))
        }



      </View>

        {/* {
            selectorTypes.map(item => (
        <View key={item?.id} style={{height:50, flex:1, padding:4}}>

          <Pressable onPress={()=>setCurrentType(item?.id)} style={{height:'100%', width:'100%', backgroundColor:item?.id === currentType ? 'red' : 'pink'}}>

                <Text>{item?.title}</Text>

            </Pressable>

        </View>
                
            ))
        } */}

        

      
    </View>
  )
}

export default BlogsInfiniteScreenTypeSelector
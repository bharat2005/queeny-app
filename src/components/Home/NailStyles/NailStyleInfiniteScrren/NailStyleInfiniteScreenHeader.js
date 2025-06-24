import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useNailStyleInfiniteScreenCounter } from '../../../../hooks/nailStyles/useNailStyleInfiniteScreenCounter'
import NailStyleesINfinteScreenHeaderCounter from '../../../Shared/NailStylesINfiniteScreenHeaderCounter'
import Colors from '../../../../constants/Colors'

const NailStyleInfiniteScreenHeader = ({categoryId,typesSeletor, setCurrentType, currentType}) => {
const {data, error} = useNailStyleInfiniteScreenCounter(categoryId)


  return (
    <View style={{ width:Dimensions.get('screen').width }}>

<NailStyleesINfinteScreenHeaderCounter categoryId={categoryId} />


  <View style={{height:80, width:Dimensions.get('screen').width, padding:14, paddingVertical:14, backgroundColor:'white'}}>


      <View style={{height:'100%', width:'100%', flexDirection:'row', borderWidth:1.5, borderRadius:12, borderColor:Colors.MAINPURPLE,overflow:'hidden'}}>


         {
            typesSeletor.map((item, index) => (


          <Pressable key={index} onPress={()=> setCurrentType(item)}
          style={{height:'110%',
             width:'33.333%',
              backgroundColor:item === currentType ?Colors.MAINPURPLE : 'white',
              borderRightWidth: index !== 3 ? 0.5 : 0,
               borderRightColor:Colors.MAINPURPLE,
                  borderLeftWidth: index !== 3 ? 0.5 : 0,
                    borderLeftColor:Colors.MAINPURPLE,
                justifyContent:"center",
                 alignItems:'center'
                }}
          
          >

                <Text style={{fontFamily:'regular', fontSize:12, color: currentType !== item ? 'gray' : 'white' }}>{item}</Text>

            </Pressable>

                
            ))
        }



      </View>



        

      
    </View>


             {/* <View style={{height:60, width:'100%', flexDirection:"row"}}>
                {typesSeletor.map(i => (
                    <View  key={i} style={{flex:1, height:'100%', padding:2}}>
                        <Pressable onPress={()=> setCurrentType(i)}   style={{height:'100%', width:'100%', backgroundColor:currentType === i ? 'red' : 'yellow'}}>
                            <Text>{i}</Text>
                        </Pressable>
            </View>
              
                ))}

              

            </View> */}
     


    </View>
  )
}

export default NailStyleInfiniteScreenHeader
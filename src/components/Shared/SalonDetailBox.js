import { View, Text } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const myBabyArray = [
    {
        name:'Salon Name',
        key:'name'
    },
        {
        special: true,
        name:'Telephone',
        key:'telephone'
    },
            {
        special:true,
        name:'Address',
        key:'address'
    },
                {
        name:'Directions',
        key:'directions'
    },
                    {
        name:'LandMark',
        key:'landmark'
    },
                        {
        name:'Buisness Hours',
        key:'buisnessHours'
    },
                            {
        name:'Holidays',
        key:'regularHolidays'
    },
                                {
        name:'Payment Methods',
        key:'paymentMethods'
    },
                                    {
        name:'Price Range',
        key:'priceRange'
    },
                                       {
        name:'Number of Seats',
        key:'numberOfSeats'
    },
                                           {
        name:'Number of Staffs',
        key:'numberOfStaffs'
    },
                                               {
        name:'Parking',
        key:'parking'
    },
                                                   {
        name:'Other Conditions',
        key:'specialConditions'
    },

    //                                                    {
    //     name:'Remarks',
    //     key:'remarks' //this give me array
    // },
                                                           {
        name:'Others',
        key:'other'
    },
    
    
    
    



]

const SalonDetailBox = ({data}) => {
  return (
    <View style={{ width: "100%", backgroundColor:'white' }}>
      <View
        style={{
          height: 28,
          paddingHorizontal: 12,
          flexDirection: "row",
          backgroundColor: "#666666",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "regular", color: "white", fontSize: 14 }}>
          Salon Details
        </Text>
      </View>



<View >

    {myBabyArray.map((item, index) => (

      <View key={index} style={{width:'100%', flexDirection:'row', borderBottomColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:6}}>

        <View style={{height:'100%', width:'25%', padding:8}}>

            <Text style={{fontFamily:'light', fontSize:14, color:'gray'}}>{item.name}</Text>

        </View>

        <View style={{minHeight:50, flex:1, padding:8}}>


            <View style={{flexDirection:'row', gap:6}}>

                           {
               ( item?.special && item?.name === 'Address' ) && (
                <FontAwesome5 name="map-marker-alt" size={18} color={Colors.MAINPINK} />
               )
            }

            {
               ( item?.special && item?.name === 'Telephone' ) && (
             <MaterialIcons name="phone-android" size={20} color={Colors.MAINPINK}/>
               )
            }

             <Text style={{fontFamily:'light', fontSize:14, color: item?.special ? Colors.MAINPINK : 'black'}}>
                {data?.details[item?.key]}
                </Text>

            </View>
 

        </View>

      </View>

    ))}

</View>







    </View>
  );
};

export default SalonDetailBox;

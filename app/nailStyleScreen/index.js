import { View, Text, Dimensions, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useTagNailStyleById } from '../../src/hooks/hairstyleTags/useTagNailStyleById'
import { SafeAreaView } from 'react-native-safe-area-context'
import NailSalonLikeButton from '../../src/components/Shared/NailSalonLikeButton'
import NailStyleLikeButton from '../../src/components/Shared/NailStyleLikeButton'
import NailStyleScreenHeader from '../../src/components/Shared/NailStyleScreenHeader'
import NailStyleImageSection from '../../src/components/Shared/NailStyleImageSection'
import NailStyleInfoSection from '../../src/components/Shared/NailStyleInfoSection'
import NailDetailBox from '../../src/components/Shared/NailDetailBox'
import NailButtonBox from '../../src/components/Shared/NailButtonBox'

const NailStyleScreen = () => {
    const {id} = useLocalSearchParams()
    const {data, error} = useTagNailStyleById(id)

 
console.log(id)
  return (
    <SafeAreaView style={{flex:1}}>


      <NailStyleScreenHeader nailStyleId={id} />
        <ScrollView>


    <NailStyleImageSection data={data} />

    <NailStyleInfoSection data={data}/>


    <NailDetailBox data={data} />


    <NailButtonBox data={data} />

            
        </ScrollView>


     
    </SafeAreaView>
  )
}

export default NailStyleScreen
import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Modal, Portal } from 'react-native-paper'
import { userInfiniteHairStylesByTag } from '../../src/hooks/hairstyleTags/useInfiniteHairStylesByTag'
import { SafeAreaView } from 'react-native-safe-area-context'
import TagsTabView from '../../src/components/TagsTabScreen/TagsTabView'
import InfiniteTagsScreenCountHeader from '../../src/components/InfiniteTagsScreen/InfiniteTagsScreenCountHeader'
import InfiniteTagScreenModal from '../../src/components/InfiniteTagsScreen/InfiniteTagScreenModal'

const TagInfiniteScreen = () => {
  const [visible, setVisible] = useState(false)
    const {tag} = useLocalSearchParams()
    const [type, setType] = useState('popular')
    const navigation = useNavigation()



    useEffect(()=>{
      navigation.setOptions({
        title:tag
      })
    },[])



  return (
    <View style={{flex:1}}>
      <InfiniteTagsScreenCountHeader tag={tag} setVisible={setVisible} visible={visible} setType={setType}  type={type}  />

        <TagsTabView tag={tag} fromInfinite={true} type={type} /> 
    </View>
  )
}

export default TagInfiniteScreen
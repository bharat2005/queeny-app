import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'
import { router } from 'expo-router'
import TagNailStyle from './TagNailStyles'
import NailTags from '../../Hairstyles/TagList/NailTags'

const NailTagList = () => {
    const [selectedTag, setSelectedTag] = useState('all')


  return (
    <View style={{height:230, width:Dimensions.get('screen').width}}>

        <SharedSectionHeader title='NailTagList' isMore={'nailtaglist'} morePress={()=>router.push('/nailtagsScreen')}/>
      
         <NailTags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

        <TagNailStyle selectedTag={selectedTag}  />


    </View>
  )
}

export default NailTagList
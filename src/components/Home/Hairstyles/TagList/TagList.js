import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Tags from './Tags'
import TagHairStyles from './TagHairStyles'
import SharedSectionHeader from '../../../Shared/SharedSectionHeader'
import { router } from 'expo-router'

const TagList = () => {
    const [selectedTag, setSelectedTag] = useState('all')
  return (
    <View style={{height:260, width:Dimensions.get('screen').width}}>

        <SharedSectionHeader title='Searcch By #tags' isMore={'taglist'} morePress={()=>router.push('/tagsScreen')}/>
      
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

        <TagHairStyles selectedTag={selectedTag}  />


    </View>
  )
}

export default TagList
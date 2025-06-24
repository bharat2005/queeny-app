import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import BlogsInfiniteScreenTypeSelector from '../../src/components/BlogsInfiniteScrren/BlogsInfiniteScreenTypeSelector'
import BlogsInfiniteScreenView from '../../src/components/BlogsInfiniteScrren/BlogsInfiniteScreenView'

const BlogsInfinteScreen = () => {
    const {stylistId,fromSalon} = useLocalSearchParams()
    const [currentType, setCurrentType] = useState(fromSalon ? 'newArrival' : 'staff')

  
    
  
  return (
    <View style={{flex:1, }}>
        <BlogsInfiniteScreenTypeSelector currentType={currentType} setCurrentType={setCurrentType} />

        <BlogsInfiniteScreenView currentType={currentType} stylistId={stylistId} />

    </View>
  )
}

export default BlogsInfinteScreen
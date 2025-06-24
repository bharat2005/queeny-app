import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NailTagList from './NailTagList/NailTagList'
import NailDesignList from './NailDesignList/NailDesignList'
import NailCatalogueList from './NailCatalogueList/NailCatalogueList'
import NailColorList from './NailColorList/NailColorList'
import KeywordsList from './KeywordsList/KeywordsList'

const MyNailStyles = () => {
  return (
    <ScrollView style={{flex:1}}>

<View style={{flex:1, gap:32}}>

      <NailTagList />

      <NailDesignList />

      <NailCatalogueList />

      <NailColorList />


      <KeywordsList />

  </View>

      
    </ScrollView>
  )
}

export default MyNailStyles
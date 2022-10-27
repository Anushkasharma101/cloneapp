import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import  Header  from './home/Header'
import Stories from './components/stories'
import Post from './components/home/Post'
import { POSTS } from './components/data/posts'
import BottomTabs from './components/home/BottomTabs'
import { bottomTabIcons } from './components/home/BottomTabs'
import { navigation } from '@react-navigation/native'
import { db } from '../../firebase'

const Homescreen=({ navigation }) =>  {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    db.collectionGroup('posts').orderBy('createdAt','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(post => ({ id:post.id, ...post.data()})))
    })
 },[])
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>

      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
    container:{
        backgroundcolor:'black',
        flex: 1,
    },
})

export default Homescreen
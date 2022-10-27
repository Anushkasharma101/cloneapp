import { View, Text, ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Header from './components/home/Header'
import  USERS  from './data/user'

const Stories = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}>
        {USERS.map((story,index) =>(
            <View key={index} style={{alignItems:'center'}}>
              <Image source={{uri:story.image}}
              style={StyleSheet.story}/>
              <Text style={{color:'white'}}>{
              story.user.length > 11
              ? story.user.slice(0,6).toLowerCase() + '...'
              :story.user.toLowerCase()}
              </Text>
              </View>
        ))}

            
    </ScrollView>
        <Text style={{color: 'white'}}>stories</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:18,
        borderWidth:3,
        borderColor:'#ff8501',
    },
})
export default Stories
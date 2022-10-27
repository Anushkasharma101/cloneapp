import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'
import { NavigationAction } from '@react-navigation/native'

const AddNewPost  = ({navigation}) => {
  <View style={styles.headerContainer}>
  <Header navigation={navigation}/>
  <FormikPostUploader navigation={navigation}/>

  </View>
}

const Header=({navigation}) =>(
    <View styles={styles.headerContainer}>
    <TouchableOpacity onPress={()=> navigation.goback()}>
    <Image source={{uri:'https://img.icons8.com/external-outline-stroke-bomsymbols-/344/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png'}}
    style={{width:30,height:30}}
    />
    </TouchableOpacity>
      <Text style={styles.headerText}>ADD NEW POST</Text>
      <Text></Text>
      
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
      color:'#fff',
      fontWeight:'700',
      fontSize:20,
      marginRight:23,




    },
})
export default AddNewPost 
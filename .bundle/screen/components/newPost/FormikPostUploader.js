import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik, validateYupSchema } from 'formik'
import *as Yup from 'yup'
import { Divider, TextInput } from 'react-native-paper'
/*import { white } from 'react-native-paper/lib/typescript/styles/colors'*/
import { Button } from 'react-native'
import { NavigationAction } from '@react-navigation/native'
import validUrl from 'valid-url'
import { db,firebase } from '../../../../firebase'

const PLACEHOLDER_IMG='https://img.icons8.com/pastel-glyph/344/person-male--v1.png'

const uploadPostSchema=Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption:Yup.string.max(2200,'Caption has reached the character.')
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl,setThumbnailUrl]= useState('PLACEHOLDER_IMG')
  const[currentLoggedInUser,setCurrentLoggedInUser] = useState(null)

  const getUserName = () =>{
     const user = firebase.auth().currentUser
     const unsubcribe = db.collection('users').where('owner_uid','==',user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture:doc.data().profile_picture
        })
      })
     )
    return unsubcribe
  }

  useEffect(() => {
    getUserName()
  },[])

  const uploadPostToFirebase =(imageUrl,caption) => {
    const unsubcribe = db.collection('users').doc(firebase.auth().currentUser.email)
    .collection('posts')
    .add({
        imageUrl: imageUrl,
        username: currentLoggedInUser.username,
        profilePicture:currentLoggedInUser.profilePicture,
        owner_uid:firebase.auth().currentUser.uid,
        owner_email:firebase.auth().currentUser.email,
        caption:caption,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users:[],
        comments:[],
    })
    .then(() => navigation.goback())
    return unsubcribe
  }
  return (
    <Formik 
    initialValues={{caption:'',imageUrl:''}}
    onSubmit={(values) => {
      uploadPostToFirebase(values.imageUrl,values.caption)
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}>

    {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>
       (
         <>
         <View style={{
          margin:20,
          justifyContent:'space-between',
          flexDirection:'row',
         }}>
            <Image source={{uri:validUrl.isUri(thumbnailUrl) ? thumbnailUrl:PLACEHOLDER_IMG}} 
            style={{width:100,height:100}}/>

            <View style={{flex:1,marginLeft:12}}>
            <TextInput 
            style={{color:'white',fontSize:20}}
            placeholder='Write a caption...' 
            placeholderTextColor='gray'
            multiline={true}
             onBlur={handleBlur('caption')}/>
             </View>
             </View>
        <Divider width={0.2} orientation='vertical'/>
         <TextInput 
         onChange={e => setThumbnailUrl(e.nativeEvent.text)}
         style={{color:'white',fontSize:18}}
         placeholder='Enter Image Url ' 
         placeholderTextColor='gray'
         onChangeText={handleChange('imageUrl')}
         onBlur={handleBlur('imageUrl')}
         value={values.imageUrl}/>
         {errors.imageUrl && (
          <Text style={{fontSize:10,color:'red'}}>
          {errors.imageUrl}
          </Text>
         )}
         <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
         </>
         
        )}
</Formik>
  )
}
export default FormikPostUploader
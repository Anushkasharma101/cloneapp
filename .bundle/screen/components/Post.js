import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {Divider} from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { db, firebase } from '../../../firebase'

const postFooterIcons = [
      {
        name:'Like',
        imageUrl:'https://img.icons8.com/ios/344/like--v1.png',
        likedImageUrl:'https://img.icons8.com/glyph-neue/344/filled-like.png',
      },
      {
        name:'comment',
        imageUrl:'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/344/external-comment-ecommerce-interface-anggara-basic-outline-anggara-putra.png',
      },
      {
        name:'share',
        imageUrl:'https://img.icons8.com/ios/344/sent.png',
      },
      {
        name:'save',
        imageUrl:'https://img.icons8.com/ios/344/bookmark-ribbon--v1.png',
      }
]
const Post = ({Post}) => {
  const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    )

    db.collection('users')
    .doc(post.owner_email)
    .collection('posts')
    .doc(post.id)
    .update({
      likes_by_users: currentLikeStatus
      ? firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.email
      )
      : firebase.firestore.FieldValue.arrayRemove(
        firebase.auth().currentUser.email
      ),
    })
    .then(() => {
      console.log('✅Document successfully updated!')
    })
    .catch(error => {
      console.error('Error updating document: ',error)
    })
  }
  return (
    <View style={{marginBottom:30}}>
      <Divider width={1} orientation='vertical'/>
      <PostHeader Post={Post}/>
      <PostImage Post={Post}/>
      <View style={{marginHorizontal:15,marginTop:10}}>
      <PostFooter post={Post} handleLike={handleLike}/>
      <likes Post={Post}/>
      <Caption Post={Post}/>
      <CommentsSection Post={Post}/>
      <Comments Post={Post}/>
      </View>
    </View>
  )
}

const PostHeader = ({Post}) => (
  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
    alignItems:'center',
  }}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Image source={{uri:postMessage.profile_picture}} style={styles.story}/>
     <Text style={{color:'white',marginLeft:5,fontWeight:700}}>
     {Post.user}
     </Text>
    </View>
    <View>
    <Text style={{color:'white',fontWeight:'900'}}>...</Text>
    
    </View>
  </View>

  
)
const PostImage = ({Post}) =>(
  <View style={{
    width:'100%',
    height:450,
  }}>
  <Image source={{uri:Post.imageUrl}}style={{height:'100%',resizeMode:'cover'}}/>
  </View>
)

const PostFooter =() =>{
  <View style={{flexDirection:'row'}}>
  <View style={styles.leftfooterIconsContainer}>
  <TouchableOpacity onPress={() => handleLike(Post)}>
  <Image style ={styles.footerIcon} source={{uri:Post.likes_by_users.includes(firebase.auth().currentUser.email)
  ?postFooterIcons[0].likedImageUrl
  :postFooterIcons[0].imageUrl,
  
  }}/>
  </TouchableOpacity>
  <Icon imgstyle={styles.footerIcon} imageUrl={postFooterIcons[1].imageUrl} />
  <Icon 
       imgstyle={[styles.footerIcon,styles.shareIcon]} 
       imageUrl={postFooterIcons[2].imageUrl} />
  </View>
     <View style={{flex:1,alignItems:'flex-end'}}>
        <Icon imgStyle={styles.footerIcon} imageUrl={postFooterIcons[3].imageUrl}/>
     </View>
  </View>
}

const Icon = ({imgStyle,imageUrl}) => (
  <TouchableOpacity>
  <Image style={imgStyle} source={{uri:imageUrl}}/>
  </TouchableOpacity>
)

const likes = ({Post}) => (
  <View style={{flexDirection:'row',marginTop:4}}>
    <Text style={{color:'white',fontWeight:'600'}}>
      {Post.likes_by_users.length.tolocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({Post}) => (
  <View style={{marginTop:5}}>
  <Text style ={{color:'white'}}>
  <Text style={{fontWeight:'600'}}>{Post.user}</Text>
  <Text> {Post.caption} </Text>
  </Text>
  </View>
)

const CommentsSection=({Post}) => (
<View style={{marginTop:5}}>
{!!Post.comments.length && (
  <Text style={{color:'gray'}}>
   View{Post.comments.length > 1? 'all':''}{Post.comments.length}{' '}
   {Post.comments.length > 1 ? 'comments' : 'comment'}
  </Text>
  )}
</View>
)
const Comments=({Post}) => (
  <View>
  {Post.comments.map((comment,index) =>(
    <View key={index} style={{flexDirection:'row',marginTop:5}}>
        <Text style={{color:'white'}}>
             <Text style={{fontWeight:'600'}}>{comment.user}</Text>{'  '}
             {comment.comment}
        </Text>
    </View>
  ))}
  </View>
)

const styles=StyleSheet.create({
  story:{
      width:35,
      height:35,
      borderRadius:50,
      marginLeft:6,
      borderWidth:1.6,
      borderColor:'#ff8501',
  },

  footerIcon:{
    width:33,
    height:33,
  },

  shareIcon:{
    transform:[{rotate:'320deg'}],
    marginTop:-3,
  },

  leftfooterIconsContainer:{
    flexDirection:'row',
    width:'32%',
    justifyContent:'space-between',
  },
})
export default Post
import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import { Divider } from 'react-native-paper'

export const bottomTabIcons =[
{
   name:'Home',
   active:'https://img.icons8.com/fluency-systems-filled/344/home.png',
   inactive:'https://img.icons8.com/fluency-systems-regular/344/home.png',
},
{
    name:'Search',
    active:'https://img.icons8.com/ios-filled/344/search.png',
    inactive:'https://img.icons8.com/ios/344/search--v1.png',
 },
 {
    name:'Reels',
    active:'https://img.icons8.com/ios-filled/344/instagram-reel.png',
    inactive:'https://img.icons8.com/ios/344/instagram-reel.png',
 },
 {
    name:'Shop',
    active:'https://img.icons8.com/ios-filled/344/shopping-mall.png',
    inactive:'https://img.icons8.com/ios/344/shopping-mall.png',
 },
 {
    name:'Profile',
    active:'https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/344/external-profile-web-smashingstocks-glyph-smashing-stocks.png',
    inactive:'https://img.icons8.com/external-obvious-line-kerismaker/344/external-user-profile-online-shopping-line-obvious-line-kerismaker.png',
 },
]
const BottomTabs = ({icons}) => {
    const [activeTab,setActiveTab] = useState('Home')

    const Icon = ({ icon}) =>(
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
        <Image 
        source ={{ uri: activeTab === icon.name ? icon.active:icon.inactive}} 
        style={[styles.icon,icon.name==='Profile'?styles.profilePic:null,
           activeTab==='Profile' && icon.name === activeTab
           ?styles.profilePic(activeTab)
           :null,
          ]}
        />
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical'/>
    <View style={styles.container}>
    {icons.map((icon,index) =>{
      <Icon key={index} icon={icon}/>
      })}
      <Text>BottomTabs</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
   wrapper:{
    position:'absolute',
    width:'100%',
    bottom:'3%',
    zIndex:999,
    backgroundcolor:'#000',
},
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        paddingTop:10,
    },
    icon:{
        width:30,
        height:30,
    },
    profilePic: (activeTab='') => ({
        borderRadius:50,
        borderWidth: activeTab ==='Profile'?2:0,
        borderColor:'#fff',
    }),
    
})

export default BottomTabs
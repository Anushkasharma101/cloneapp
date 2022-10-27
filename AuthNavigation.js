import React, { useEffect, useState } from 'react'
import SignedInStack, { SignedOutStack } from './.bundle/screen/navigation'
import { firebase } from './firebase'

const AuthNavigation = () => {
    const [currentUser,setCurrentUser] = useState(null)

    const userHandler = user =>
       user ? setCurrentUser(user) : setCurrentUser(null)
    
       useEffect(
      () => firebase.auth().onAuthStateChanged(user => useGestureHandlerRef(user)),
    []
    )
  return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
    
  
}

export default AuthNavigation
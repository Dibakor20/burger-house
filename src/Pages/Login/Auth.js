import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";


export const initializeLoginFramwork = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}
// Sign In with Google

export const handleGoogleSignIn = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
    const {displayName,email,photoURL} = result.user;
    console.log(displayName,email)
    const signInUser = {
        isSignIn:true,
        displayName: displayName,
        email:email,
        photo:photoURL,
    }
    return signInUser
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}
// Sign Out 
export const handleSignOut =()=>{
    return firebase.auth().signOut()
     .then(res=>{
         const signOutUser={
             isSignIn:false,
             name:'',
             email:'',
             password:'',
             photo:'',
             error:'',
             success:false
         }
         return signOutUser
     })
     .catch(err=>{
         console.log(err)
     })    
 }
 //Create User With Email and Password

 export const createUserEmailAndPassword=(name,email,password)=>{
    return  firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(res => {
        const { displayName,email } = res.user;
        const signedInUser = {
            isSignedIn: false,
            name: displayName,
            email: email,
            success: true,
            error: '',
            newUser: true
        }
        updateUser(name);
        return signedInUser;
        // const newUser = res.user
        // console.log(newUser)
        // newUser.success = true
        // newUser.error="";
        // updateUser(res.user.name)
        // return newUser;
      })
      .catch((error) => {
          const newUser ={}
          newUser.error = error.message
          newUser.success = false;
          return newUser;
      });
  }
  //Sign In user with Email and Password

  export const signInWithEmailAndPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
     .then(res => {
          const newUser = res.user
          newUser.success = true
          newUser.error="";
          return newUser;
     })
     .catch((error) => {
         const newUser ={}
         newUser.error = error.message
         newUser.success = false
         return newUser
     });
 }
 //Update User Name
  const updateUser=(name)=>{
     var user = firebase.auth().currentUser;
 
     user.updateProfile({
         displayName: name,
       
       }).then(function() {
         console.log("user updated")
       }).catch(function(error) {
         console.log(error.message)
       });
 }
//  handle Error

const handleError = (error) => {
    const signedInUser = {
        isSignedIn: false,
        success: false,
        error: error.message,
        newUser: false
    }
    return signedInUser;
   
}
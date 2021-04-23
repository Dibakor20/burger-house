import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Header from '../../Component/Header/Header';
import { createUserEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramwork, signInWithEmailAndPassword } from './Auth';
import './Login.css'

const Login = () => {
    initializeLoginFramwork();
      const [,,loggedInUser,setLoggedInUser,user,setUser] = useContext(UserContext)
      const [newUserInfo,setNewUserInfo] = useState(false)
      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };
   
      const googleSignIn = ()=>{
      handleGoogleSignIn()
      .then(res=>{
        handleResponse(res,true)
      }) 
}
    //Sign Out

     const googleSignOut = ()=>{
        handleSignOut()
        .then(res=>{
            setUser(res)
            setLoggedInUser(res)
        })
     }
    // Form Validation

     const handleBlur =(e)=>{
        let validInfo =true
        if(e.target.name=== 'email'){
            const emailValid = /\S+@\S+\.\S+/.test(e.target.value)
            const validInfo = emailValid;
        }
        if(e.target.name === 'password'){
            const passwordValid = e.target.value.length>6
            const hasPasswordValid  = /\d{1}/.test(e.target.value)
            validInfo =passwordValid && hasPasswordValid
            if(!validInfo){
                alert('Your password have to be 6 character long and must contain one letter and one number');
                e.target.value = '';
            }
            
        }
        if(validInfo){
            const newUser ={...user}
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }
    }
    // User Type

    const handleSubmit=(e)=>{
        if(newUserInfo && user.email && user.password){
            if(user.password === user.confirmPassword){
                const userName = user.name;
                createUserEmailAndPassword(user.name,user.email,user.password)
                .then(res=>{
                    handleResponse(res,true)
                })   
            }
            else{
                alert('password not match')
            }           
        }
        if(!newUserInfo && user.email && user.password){
           signInWithEmailAndPassword(user.email,user.password)
           .then(res=>{
                handleResponse(res,true)
            
           })
        }
       e.preventDefault() 
    }
     

    const handleResponse=(res,redirect)=>{

   

        setUser(res)
        setLoggedInUser(res)
        if(redirect){
            history.replace(from)
        }
    }
    return (
        <>
           <Header/>
           <div class="container h-100 mt-5">
           {
                user.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{user.error}</strong><br/><br/>
                    <h3>Close this error message and Create a New Account</h3>
                    <button onClick={() => window.location.reload()} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
            {
                !newUserInfo ? <h3>Sign In</h3> : <h3>Create an account</h3>
            }
        </div>
        <div class="d-flex justify-content-center form_container">
            <form onSubmit={handleSubmit}>
                {
                    newUserInfo && <div class="input-group mb-2">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="Name" name="name" onBlur={handleBlur} class="form-control input_pass"  placeholder="Name" required/>
                </div>
                }
                <div class="input-group mb-3">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="email" onBlur={handleBlur} class="form-control input_user"  placeholder="Email" required/>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" onBlur={handleBlur} class="form-control input_pass"  placeholder="password" required/>
                </div>
                {
                    newUserInfo && <div class="input-group mb-2">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="confirmPassword" onBlur={handleBlur} class="form-control input_pass"  placeholder="Confirm Password" required/>
                </div>
                }
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                        <label class="custom-control-label" for="customControlInline">Remember me</label>
                    </div>
                </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
            <input type="submit"  value="Sign In"/>
            </div>
            </form>
        </div>

        <div class="mt-4">
            {
                newUserInfo ? <div class="d-flex justify-content-center links">
                Already have an account? <a href="#" class="ml-2" onClick={()=>setNewUserInfo(!newUserInfo)} name="newUserInfo" >Login</a>
            </div> : <div class="d-flex justify-content-center links">
                Don't have an account? <a href="#" class="ml-2" onClick={()=>setNewUserInfo(!newUserInfo)} name="newUserInfo" >Sign Up</a>
            </div>
            }
            <div class="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
             </div>
            </div>
            </div>
            </div>
        </div>
            <div className="Separator"><i>or</i></div>
            <div onClick={googleSignIn} className="google-login d-flex justify-content-around align-items-center mt-3">
                {/* <img className='d-inline logo' src={img} alt=""/> */}
                <span>Continue With Google</span>
                </div> 
        </>
    );
};

export default Login;
import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import bike from '../../images/bike.png'
import './Header.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const [,,loggedInUser,setLoggedInUser, user, setUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const signOut = () => {
        const logout = window.confirm('Are you sure you want to Log Out?');
        if (logout) {
            const updateUser = {
                isSignedIn: false,
                name:'',
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                success: false,
                error: '',
                newUser: false
            }
            setLoggedInUser(updateUser);
            setUser(updateUser);
            sessionStorage.setItem('email', '')
            sessionStorage.setItem('displayName', '')
            history.push('/');
        }
    }
    sessionStorage.getItem('cart')
    
    
    return (
        <> 
        
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
           <Link to="/"><h3 className={`main-logo ${location.pathname === '/' ? 'text-white' : 'text-dark'}`}>Burger House</h3></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <div class="contact-no mt-1">
                 
                   <Link to="/cart"> <i class="fas fa-shopping-cart shoping"></i>
                    <span className="badge badge-danger">{cart?`${cart?.length}`:'0'}</span></Link>
                    <span class= {`bike ml-3 ${location.pathname === '/' ? 'text-white' : 'text-dark'}`}>Express Delivery  +9502345</span>
                    </div>
                   
                    <li class="nav-item ml-4 mr-3">
                    {sessionStorage.getItem('email') &&    <Link class="nav-link" to="/dashboard"><h5 className= {` ${location.pathname === '/' ? 'text-white' : 'text-dark'}`}>Dashboard</h5></Link>}
                    </li>
                    <li class="nav-item">
                    {
                    sessionStorage.getItem('email') ? <button title="Click to LogOut" className="btn log" onClick={signOut}> {sessionStorage.getItem('email')}</button> : <Link className="btn log" to="/login">LogIn</Link>
                        }
                    </li>
                </ul>
            </div>
            </nav>
        </div>
  
        </>
    );
};

export default Header;
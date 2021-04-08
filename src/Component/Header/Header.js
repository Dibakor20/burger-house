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
                name: '',
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
            history.push('/');
        }
    }
    sessionStorage.getItem('cart')
    
    return (
        <> 
        
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
           <Link to="/home"><img src={logo} alt=""/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <div class="contact-no mt-1">
                 
                   <Link to="/cart"> <i class="fas fa-shopping-cart shoping"></i>
                    <span className="badge badge-danger">{cart?.length}</span></Link>
                    <span class="bike ml-3">Express Delivery</span>
                    </div>
                    <li class="nav-item ml-4 mr-3">
                        <a class="nav-link" href="#">order</a>
                    </li>
                    <li class="nav-item">
                    {
                    sessionStorage.getItem('email') ? <button title="Click to LogOut" className="btn log" onClick={signOut}>{sessionStorage.getItem('email')}</button> : <Link className="btn log" to="/login">LogIn</Link>
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
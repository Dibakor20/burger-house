import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { faCog, faHome, faGripHorizontal, faPlus, faUsers,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const emailData = sessionStorage.getItem('email')

const Sidebar = () => {
    const [,,loggedInUser,setLoggedInUser, user, setUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false)


    const loadAllAdmin = () => {
        fetch('https://guarded-bayou-10411.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email || emailData })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            });
    }
    if(loadAllAdmin.length === 0){
        loadAllAdmin()
    }
  
    return (
        <>
     
         <div class="sidenav">
         {isAdmin ?<div>    
        <Link to="/dashboard"><FontAwesomeIcon className="mr-3"  icon={faGripHorizontal} />Dashboard</Link>
        <Link to="/orderList"><FontAwesomeIcon className="mr-3" icon={faShoppingCart} />OrderList</Link>
        <Link to="/addFood"><FontAwesomeIcon className="mr-3"  icon={faPlus} />Add Food</Link>
        <Link to="manageAllBurger"><FontAwesomeIcon className="mr-3"  icon={faCog} />Manage Food</Link>
        <Link to="/addAdmin"><FontAwesomeIcon className="mr-3"  icon={faUsers} />Add Admin</Link>
        <Link to="home"><FontAwesomeIcon className="mr-3"  icon={faHome} />Home</Link>
        </div> : 
        <div>
        <Link to="/dashboard"><FontAwesomeIcon className="mr-3"  icon={faGripHorizontal} />Dashboard</Link>
        <Link to="/customerOrder"><FontAwesomeIcon className="mr-3"  icon={faShoppingCart} />My Order</Link>
        <Link to="home"><FontAwesomeIcon className="mr-3"  icon={faHome} />Home</Link>
        </div>
         }
        </div>
     
          
        </>
    );
};

export default Sidebar;
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Cart from './Pages/Cart/Cart';
import { createContext, useState } from 'react';
import CheckoutForm from './Pages/CheckoutForm/CheckoutForm';
import Login from './Pages/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [cart,setCart] = useState([])
  const [loggedInUser,setLoggedInUser] = useState({})
  const [user, setUser] = useState({
    isSignedIn: false,
    name : '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })
  if(loggedInUser.email){
    sessionStorage.setItem('email', loggedInUser.email);
  }

  return (
     <UserContext.Provider value={[cart,setCart,loggedInUser,setLoggedInUser,user, setUser]}>
     <Router>
       <Switch>
         <Route path ="/home">
           <Home/>
         </Route>
         <Route path ="/foodDetails/:name">
            <FoodDetails/>
         </Route>
         <Route path = "/cart">
           <Cart/>
         </Route>
         <PrivateRoute Route path="/checkoutForm">
           <CheckoutForm/>
         </PrivateRoute>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;

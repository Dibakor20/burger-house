
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Cart from './Pages/Cart/Cart';
import { createContext, useState } from 'react';
import CheckoutForm from './Pages/CheckoutForm/CheckoutForm';
import Login from './Pages/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

import Dashboard from './Pages/Dashboard/Dashboard';
import CustomerOrder from './Pages/Customer/CustomerOrder';

import AllOrder from './Pages/Admin/OrderList/AllOrder';
import ManageAllBurger from './Pages/Admin/OrderList/ManageAllBurger';
import AddFood from './Pages/Admin/OrderList/AddFood';
import AddNewAdmin from './Pages/Admin/AddNewAdmin';

export const UserContext = createContext();

function App() {

  const [cart, setCart] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [orderInfo, setOrderInfo] = useState([])
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })
  if (loggedInUser.email) {
    sessionStorage.setItem('email', loggedInUser.email);
  }
  if (loggedInUser.displayName) {
    sessionStorage.setItem('displayName', loggedInUser.displayName);

  }


  return (
    <UserContext.Provider value={[cart, setCart, loggedInUser, setLoggedInUser, user, setUser, orderInfo, setOrderInfo]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/foodDetails/:name">
            <FoodDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <PrivateRoute Route path="/checkoutForm">
            <CheckoutForm />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/customerOrder">
            <CustomerOrder/>
          </PrivateRoute>
          <PrivateRoute path="/addFood">
            <AddFood/>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <AllOrder/>
          </PrivateRoute>
          <PrivateRoute path="/manageAllBurger">
            <ManageAllBurger/>
          </PrivateRoute>
          <PrivateRoute path ="/addAdmin">
            <AddNewAdmin/>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

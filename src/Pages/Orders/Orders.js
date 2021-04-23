import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Orders.css'
import delivery from '../../images/delivery.png'

const Orders = () => {
  const [userOrders,setUserOrders] =useState([])
  const [,,loggedInUser, setLoggedInUser] = useContext(UserContext)
  
  const [,,,,,,orderInfo,setOrderInfo] = useContext(UserContext)

  const emailData = sessionStorage.getItem('email')
  
  useEffect(()=>{
      fetch('https://guarded-bayou-10411.herokuapp.com/orders?email='+ emailData)
      .then(res=>res.json())
      .then(data=> setUserOrders(data))
 
     

    setOrderInfo(JSON.parse(sessionStorage.getItem('orderInfo')));
    
  },[emailData, setOrderInfo])
 
    return (
        < >
       
        <div className="container">
         <div className="order-form">
           <h3 className="font-family">Your Recent Order</h3>
         {           
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                
                    <th scope="col">Food</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
             userOrders.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                 <span class="sr-only">Loading...</span>
                    </div>        
            }
                    {
                      userOrders?.map(item=>item.cart?.map(userItem =>
                            <tr key={userItem._id}>
                              
                                <td><img src={userItem.img} alt="" className="orderImg"/></td>
                                <td><h4 className="font-family">{userItem?.name}</h4></td>
                                <td><h4 className="font-family">{userItem.price}</h4></td>
                                <td><h5 className="font-family">{userItem.count}</h5></td>
                                <td><h5 className="font-family">{userItem.time}</h5></td>
                                <td>
                                {
                            userItem?.status === 'PENDING' ?
                                <button className="w-75 btn btn-secondary d-block mx-auto text-center  text-white font-weight-bold ">{item?.status}</button>
                                : userItem?.status === 'APPROVED' ?
                                    <button className="w-75 btn btn-primary d-block mx-auto text-center  text-white font-weight-bold ">{item?.status}</button>
                                      
                                    : userItem?.status === 'CANCELED' ?
                                        <button className="w-75 btn btn-danger d-block mx-auto text-center  text-white font-weight-bold ">{item?.status}</button>
                                                :
                                                <button className="w-75 btn btn-primary d-block mx-auto text-center  text-white font-weight-bold ">{item?.status}</button>
                        }    
                                  </td>                         
                            </tr>
                        )
                      )
                    }
                </tbody>
            </table>        
        }
         </div>

        </div>
   
        </>
    );
};

export default Orders;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../../Component/Header/Header';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart,setCart] = useContext(UserContext)
    useEffect(()=>{
      setCart(JSON.parse(sessionStorage.getItem('cart')));
    }, [setCart])
  
    const removeItem = key => {
      const savedCart = JSON.parse(sessionStorage.getItem('cart'));
      const updateFood = savedCart.filter(allFood => allFood.key !== key);
      sessionStorage.setItem('cart', JSON.stringify(updateFood));
      setCart(updateFood);
  }

      
    return (
        <>
            <Header/>
            <div className="container">
            {
                cart?.length ?
                    <h1 className='total-item'>Total Item in Cart: <span className='text-danger'>{cart?.length}</span></h1>
                    : <h1 className='text-center px-3 display-5 text-danger mt-5'>Your Cart is Empty!</h1>
            }
           
                     
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Food</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        cart?.map(foodItems =>
                            <tr key={foodItems._id}>
                              <td><img src={foodItems.img} alt="" className="item-img"/></td>
                                <td><h4 className="font-family">{foodItems.name}</h4></td>
                                <td><h5 className="font-family">{foodItems.count * foodItems.price}</h5></td>
                                <td>{foodItems.count}</td>
                                <td><button onClick={() => removeItem(foodItems?.key)} className="btn btn-danger">Remove</button></td>                         
                            </tr>
                        )
                    }
                          <tr>
                              <td colspan='2' className='h3 text-center font-family'>Total Cost: </td>
                              <td colspan='2' className='h4 text-right font-family'>${cart?.reduce((total, current) => total + current?.price * current.count , 0)}</td>
                          </tr>
                </tbody>
            </table>
 
        
       {
           cart?.length>0 ? <Link to="/checkoutForm"> <button onClick="" className="d-block ml-auto btn btn-success mr-5 pl-5 pr-5 mb-5">Checkout</button></Link> :
           <button onClick="" className="d-block ml-auto btn btn-success disabled mr-5 pl-5 pr-5 mb-5">Checkout</button>
       }
        </div>



           
        </>
    );
};

export default Cart;
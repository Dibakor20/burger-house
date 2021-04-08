import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../../Component/Header/Header';
import FakeData from '../../FakeData';
import './FoodDetails.css'

const FoodDetails = () => {
 const {name} = useParams()
 const history = useHistory()
 const [foodItem,setfoodItem] = useState({})
 const [count,setCount] = useState(1)
 const [cart,setCart] =useContext(UserContext)


 
useEffect(()=>{
    const foodData = FakeData.find(food =>food.name===name);
    setfoodItem(foodData)
    sessionStorage.setItem('foodData',JSON.stringify(foodData))
},[name])

   const buttonIncrease =()=>{
    const newCount = count+1
    setCount(newCount)
  }
  const buttonDecrease =()=>{
     const newCount = count-1
     setCount(newCount)
   }

  const handleAddToCart = () =>{
    let updatedCart;
        if (cart?.length) {
            updatedCart = [...cart, { ...foodItem,"count":count }];
        }
        else {
            updatedCart = [{ ...foodItem,"count":count }]
        }

        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    
        if(updatedCart){
          alert("Your Food added successfuly")
          history.push('/')
        }
  }   
   
    return ( 
        <>
          <Header/>
         
          <div className ="container">
            <div className="row">
                <div className="col-md-6">
                   <h3 className="food-title">{foodItem?.name}</h3> 
                   <p className="mt-4 food-description">{foodItem?.description}</p>
                   <div className="row mt-4">
                       <div className="col-md-5">
                        <h4>${count * foodItem?.price}</h4>
                       </div>
                       <div className="col-md-7">
                       <div class="input-group number-spinner">
                        <button onClick={buttonDecrease} class="btn btn-default"><i class="fas fa-minus"></i></button>
                        <input id="phone-count" type="text" class="form-control text-center" value={count}/>
                        <button onClick={buttonIncrease} class="btn btn-default plus"><i class="fas fa-plus"></i></button>
                                </div>
                       </div>
                   </div>
                 <button onClick={handleAddToCart} className="btn btn-danger mt-5">Add To Cart</button>
                </div>
                <div className="col-md-6 foodImg">
                    <img src={foodItem?.img} alt="" className="w-75"/>
                </div>
            </div>
          </div>
        </>
    );
};

export default FoodDetails;
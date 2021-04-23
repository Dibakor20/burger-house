import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Component/Header/Header';
import { useForm } from "react-hook-form";
import './CheckoutForm.css'
import { UserContext } from '../../App';
import { useHistory } from 'react-router';

const CheckoutForm = () => {
    const history = useHistory()
    const [cart,setCart] = useContext(UserContext)
    const [,,loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [,,,,,,orderInfo,setOrderInfo] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const emailData = sessionStorage.getItem('email')

    useEffect(()=>{
        setCart(JSON.parse(sessionStorage.getItem('cart')));
        console.log(cart)
    },[setCart])

    const onSubmit = data => {
        const orderDetails = {
            name:loggedInUser.displayName,
            email: emailData,
            cart:[...cart],
            shipment: data,
            "status": 'PENDING',
            time:new Date().toLocaleString()
        };
        fetch('https://guarded-bayou-10411.herokuapp.com/allOrder',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(orderDetails)
        })    
        setOrderInfo(orderDetails)

            if(data){
                sessionStorage.removeItem('cart')
                setCart([])
                alert('You Have Order Successfully')
                history.push('/customerOrder')
            }        
    };
   sessionStorage.setItem('orderInfo',JSON.stringify(orderInfo))

    const total = cart.reduce((total,current)=> total + current?.price * current.count , 0 )
    const fee = 50
    const subtotal = (total + fee )
  
    return (
        <>
           <Header/>
           
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-7">
                <div class="booking-form">
                    <h3 className="font-family">Billing Details <span className="cash ml-3">(Cash on delivery)</span></h3>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Name</label><br/>
                        <input className="inp-style" value={sessionStorage.getItem('displayName')} {...register("name", { required: true })} /><br/>
                        {errors.name && <span className="error">Name field is required</span>}
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Email</label><br/>
                        <input className="inp-style" value={ sessionStorage.getItem('email')} {...register("email", { required: true })} /><br/>
                        {errors.email && <span className="error">Email field is required</span>}
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Mobile Number</label><br/>
                        <input className="inp-style" type="number" placeholder="Enter Your Mobile Number" {...register("number", { required: true })} /><br/>
                        {errors.number && <span className="error">Mobile number field is required</span>}
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="input-group">
                        <label for="">Street Adress</label>
                        <select className="inp-style selectType" {...register("city", { required: true })} ><br/>
                        {errors.city && <span className="error">Mobile number field is required</span>}
                        <option selected disabled>Select Your street Name</option>
                        <option>Zindabazar</option> 
                        <option>Bondhor</option> 
                        <option>Barudhkana</option> 
                        <option>Subanighat</option> 
                        <option>Rekabibazar</option> 
                        <option>Amberkana</option> 
                        <option>Mirabazar</option> 
                        <option>Shibgonj</option> 
                        <option>Chowhatta</option> 
                        <option>Lamabazar</option> 
                    </select>
                        </div>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="">Address</label><br/>
                        <input className="inp-style" placeholder="Flat suite or floor" {...register("adress", { required: true })} /><br/>
                        {errors.adress && <span className="error">Adress field is required</span>}
                        </div>
                       
                        {
                            <button  className='btn btn-primary d-block mx-auto my-2'>Place Order</button>
                        }
                       
                       </form>
                </div>
                </div>
                <div className="col-md-5">
                <div className="booking-form">
                {
                <h1 className='total-food'>Total Item in Cart: <span className='text-danger'>{cart.length}</span></h1>       
                }

                    {     
                     <table className="table">
                         <thead id='thead' className="bg-light">
                             <tr>
                                 <th scope="col">Food</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Quantity</th>
                                
                             </tr>
                         </thead>
                         <tbody>
                        {
                            cart.map(foodItems =>
                                <tr key={foodItems._id}>
                                <td><img src={foodItems.img} alt="" className="food-img"/></td>
                                    <td><h5 className="font-family">{foodItems.name}</h5></td>
                                    <td><h5 className="font-family">{foodItems.count * foodItems.price}</h5></td>
                                    <td className="font-family">{foodItems.count}</td>
                                                         
                                </tr>
                            )
                        }
                            <tr>
                                <td colspan='3' className='h5 text-center font-family '>Total Cost: </td>
                                <td colspan='3' className='h4 text-right font-family'>${total}</td>
                            </tr>
            
                            <tr>
                                <td colspan='3' className='h5 text-center font-family'>Delivery fee: </td>
                                <td colspan='3' className='h4 text-right font-family'>${fee}</td>
                            </tr>
                            <tr>
                                <td colspan='3' className='h5 text-center font-family'>SubTotal: </td>
                                <td colspan='3' className='h4 text-right font-family'>${subtotal}</td>
                            </tr>
                    </tbody>
                </table>
                 }
                 
                </div>
                </div>
            </div>
    </div>
        </>
    );
};

export default CheckoutForm;
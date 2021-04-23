import React, { useState } from 'react';
import Header from '../../Component/Header/Header';
import FakeData from '../../FakeData';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './ManageFood.css'

const ManageFood = () => {
    const [imageUrl,setImageUrl] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const burgerData ={
            name:data.name,
            price:data.price,
         
            img:imageUrl,
        }
        const url =`https://guarded-bayou-10411.herokuapp.com/addBurger`
        console.log(burgerData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(burgerData)
          })
          .then(res => {
            if(data){
              
              alert("food added Successfully")
          
            }
          })
    }        
    
        const handleImageUpload = (event) =>{
            console.log(event.target.files[0])
            const imageData =new FormData()
            imageData.set('key', '70615785ffbafdc7dd120e546041a491')
            imageData.append('image', event.target.files[0])
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageUrl(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });
        }  


    return (
        <>
        
        <div className="manage-form mb-5">
                   <h3>Add Burger</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

               <div className="input-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Food Name" className="inp-style" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="inp-style" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                </div>

                <input name="file"  type="file" onChange={handleImageUpload} /><br/>
                {errors.file && <span style={{color:'red'}}>This field is required</span>}<br/>

                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add Food</button>
                </div>
               </form>
               </div> 
        
            
        </>
    );
};

export default ManageFood;
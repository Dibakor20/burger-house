import React, { useState } from 'react';

const ManageBurger = () => {
    const[manageBurger,setManageBurger] = useState([])

    const AllBurger = () => {
        fetch('https://guarded-bayou-10411.herokuapp.com/burger')
        .then(res=>res.json())
        .then(data=>setManageBurger(data))
    }
    if(AllBurger.length === 0){
        AllBurger()
    }
 
    const deleteFood = (id) => {
           fetch(`https://guarded-bayou-10411.herokuapp.com/deleteFood/${id}`,{
               method:'DELETE'
           })
           .then(res=>res.json())
           .then(result=>{
               if(result){
                   AllBurger()
               }
           })
    }


    return (
        <>
          <div className="container">
         <div className="order-form">
           <h3 className="font-family">All Food</h3>
         {           
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                       <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th>Action</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                {
             manageBurger.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                 <span class="sr-only">Loading...</span>
                    </div>        
            }

                    {
                      manageBurger.map(item=> 
                            <tr key={item._id}>
                              
                                <td><img src={item.img} alt="" className="orderImg"/></td>
                                <td><h5 className="font-family">{item?.name}</h5></td>
                                <td><h4 className="font-family">{item.price}</h4></td>
                                <td>   <button onClick={()=>deleteFood(`${item._id}`)} className="p-1 p-sm-2 btn btn-danger">
                                        <i className="far fa-trash-alt"></i>
                                    </button> </td>                       
                            </tr>
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

export default ManageBurger;
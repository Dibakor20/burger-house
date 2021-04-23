import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const OrderList = () => {
    const [customerOrder,setCustomerOrder] = useState([])
    
    const options = [
        { value: 'PENDING', label: 'PENDING' },
        { value: 'APPROVED', label: 'APPROVE' },
        { value: 'CANCELED', label: 'CANCELED' },
    ];

    const loadAll = () =>{
        fetch('https://guarded-bayou-10411.herokuapp.com/orderList')
        .then(res=>res.json())
        .then(data=>setCustomerOrder(data))
    }
    if (customerOrder.length === 0) {
        loadAll();
    }

    const handleStatusChange = (e,id) => {
        fetch(`https://guarded-bayou-10411.herokuapp.com/updateOrder/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status has updated successfully!')
                }
            })
    }
  
    const deleteProduct =(id) =>{
        console.log()
        fetch(`https://guarded-bayou-10411.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   loadAll()
                }
            })
    }


    return (
        <>

         <div className="container">
         <div className="order-form">
           <h3 className="font-family">All Order</h3>
         {           
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                
                    <th scope="col">Name</th>
                        <th scope="col">Food</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
             customerOrder.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                 <span class="sr-only">Loading...</span>
                    </div>        
               }
                    {
                      customerOrder.map(item=> item.cart.map(userItem =>
                            <tr key={userItem._id}>
                              
                                <td><h5 className="font-family">{item?.shipment?.name}</h5></td>
                                <td><h5 className="font-family">{userItem?.name}</h5></td>
                                <td><h4 className="font-family">{userItem.price}</h4></td>
                                <td><h5 className="font-family">{userItem.count}</h5></td>
                                <td> <Dropdown placeholderClassName='Select Status' options={options} onChange={(e) => { handleStatusChange(e, `${item._id}`) }} value={{ value: item?.status, label: item?.status }} placeholder="Select an option" /> </td>
                               
                                <td>   <button onClick={()=>deleteProduct(`${item._id}`)} className="p-1 p-sm-2 btn btn-danger">
                                        <i className="far fa-trash-alt"></i>
                                    </button> </td>                       
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

export default OrderList;
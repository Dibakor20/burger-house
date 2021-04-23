import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './Menu.css'

const Menu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('https://guarded-bayou-10411.herokuapp.com/burger')
        .then(res=>res.json())
        .then(data=>setMenu(data))

    },[])
    return (
        <>
        <div className="container mt-5 mb-5">
         <h1 class="menu-title">Menu Categories</h1>
            <div className="row">
            {
                        menu.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                        
                        
             
                    }

                {
                    menu.map(burger=><div className="col-md-4"><FoodItem burger={burger}></FoodItem></div>)
                }
            </div>
         </div>
        </>
    );
};

export default Menu;
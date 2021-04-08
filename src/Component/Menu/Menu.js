import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData';
import FoodItem from '../FoodItem/FoodItem';
import './Menu.css'

const Menu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        setMenu(FakeData)
    },[])
    return (
        <>
        <div className="container mt-5 mb-5">
         <h1 class="menu-title">Menu Categories</h1>
            <div className="row">
                {
                    FakeData.map(burger=><div className="col-md-4"><FoodItem burger={burger}></FoodItem></div>)
                }
            </div>
         </div>
        </>
    );
};

export default Menu;
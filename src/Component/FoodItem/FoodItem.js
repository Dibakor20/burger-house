import React from 'react';
import './FoodItem.css'
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const {name,img,price} = props.burger
    return (
        <>
          <Link to={`/foodDetails/${name}`}> <div className="card food m-4">
            <img src={img} alt="" className="foodImg p-3 d-block mx-auto"/>
            <div className="card-body">
                <h3 className="text-center food-name">{name}</h3>
                <h4 className="text-center food-name">$ {price}</h4>
            </div>     
        </div>
        </Link>
        </>
    );
};

export default FoodItem;
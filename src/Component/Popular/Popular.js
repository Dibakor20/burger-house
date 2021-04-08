import React from 'react';
import './Popular.css'
import img1 from '../../images/3606214.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const Popular = () => {
    return (
        <> 
        <div className="container mt-5 mb-5">
        <h3 className="popular-burger">Our Most Popular Burger</h3>
        <div className="row">
            <div className="col-md-6">
                <div className="food-one">
                        <h5 className="text-white ml-5 pt-3 fresh">try it today</h5>
                        <h3 className="text-white ml-5 fresh">Most Popular Burger</h3>
                </div>
            </div>
            <div className="col-md-6">
            <div className="food-two">
                        <h5 className="text-white ml-5 pt-3 fresh">try it today</h5>
                        <h3 className="text-white ml-5 fresh">More Fun</h3>
                        <h3 className="text-white ml-5 fresh">More Taste</h3>
                </div>
                <div className="food-three">
                        <h5 className="text-white ml-5 pt-3 fresh">try it today</h5>
                        <h3 className="text-white ml-5 fresh">Fresh And Chili</h3>
                        
                </div>

            </div>
        </div>
        </div>
        </>
    );
};

export default Popular;
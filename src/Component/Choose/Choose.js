import React from 'react';
import './Chosse.css'
import img8 from '../../images/chose1.png'
import img9 from '../../images/chose2.png'
import img10 from '../../images/chose3.png'

const Choose = () => {
    return (
        <>  
        <div className="container mb-5">
            <h3 className="choose mb-5">Why You Choose Us</h3> 
            <div className="row">
                <div className="col-md-4">
                <div class="card">
                <img src={img8} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Fast Delivery</h5>
                    <p class="card-text">It's our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative,</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card">
                <img src={img9} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">A Good Responder</h5>
                    <p class="card-text">It's our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative,</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card">
                <img src={img10} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Home Delivery</h5>
                    <p class="card-text">It's our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative,</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Choose;
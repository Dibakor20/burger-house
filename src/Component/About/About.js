import React from 'react';
import './About.css';
import chef from '../../images/chef.png';

const About = () => {
    return (
        <>
            <div class="container py-5" id="about">
            <div class="row d-flex align-items-center">
                <div class="col-md-6">
                    <h2 className=''>Welcome to Burger House!</h2>
                    <p className="paragraph">“Would you like millions of new customers to enjoy your amazing food and groceries? So would we!It's simple we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat.”</p>
                    <span>- Debakor Acharjee -</span>
                </div>
                <div class="col-md-6 text-center">
                    <img className="img-fluid" src={chef} alt="" />
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
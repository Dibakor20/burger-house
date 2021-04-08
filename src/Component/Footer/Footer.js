import React from 'react';
import './Footer.css'
import lastLogo from '../../images/logo-2.png'

const Footer = () => {
    return (
        <>
           <div className="last-banner">
               <div className="container">
                   <img src={lastLogo} alt="" className="mt-4 last-logo"/>
                   <div className="row">
                       <div className="col-md-6 ">
                     <p className="text-white mt-5">  We provide the continual delivery of superior technical support while simultaneously providing industry leading customer.We Are Knowledgeable and Experienced.We're confident that we are the only Cybersecurity, Food services</p>
                       </div>
                       <div className="col-md-6 mt-5">
                           <div className="row adress">
                               <div className="col-2">
                               <i class="far fa-map-marker-alt text-white"></i>
                               </div>
                               <div className="col-10">
                               <h5 className="text-white footer-title">Noyasorok,sylhet,bangladesh</h5>
                               </div>
                           </div>
                           <div className="row adress">
                               <div className="col-2">
                               <i class="far fa-envelope text-white"></i>
                               </div>
                               <div className="col-10">
                               <h5 className="text-white footer-title">debakor10@gmail.com</h5>
                               </div>
                           </div>   
                       </div>
                   </div>
                   <div className="row">
                       <div className ="col-md-6">
                        <p className="text-white mt-5">© Dibakor 2021, a Hero initiative.</p>
                       </div>
                       <div className="col-md-6">
                       <div class="social-icon">
                        <ul>
                            <a href=""><li><i class="fal fa-camera"></i></li></a>
                            <a href=""><li><i class="fab fa-facebook-f"></i></li></a>
                            <a href=""><li><i class="fab fa-twitter"></i></li></a>
                            <a href=""><li><i class="fab fa-whatsapp"></i></li></a>
                         </ul>
                    
                    </div>
                       </div>
                   </div>
               </div>
               
           </div> 
        </>
    );
};

export default Footer;
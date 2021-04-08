import React from 'react';
import img4 from '../../images/bg-7.jpg'
import img5 from '../../images/burger-5.jpg'
import img6 from '../../images/burger-6.jpg'
import './Event.css'

const Event = () => {
    return (
        <>
            <div className='py-5 my-5 bottom-slider'>
            <div className='text-center w-50 d-block mx-auto my-5'>
                <h6 className="news">Latest News</h6>
                <h2 className="upComming">UP COMMING EVENT</h2>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img4} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On January 01, 2021</p>
                            <h5>Learn About American Burger</h5>
                            <p>A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.  </p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img5} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On February 01, 2021</p>
                            <h5>Learn About Humburger</h5>
                            <p>The Beef Burger: How to describe this menu staple · Classic Beef Cheeseburgers · “Tasty, delicious, and has me craving more on the first bite.</p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img6} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On march 01, 2021</p>
                            <h5>Learn About Chess Burger</h5>
                            <p>More Likes. More Comments. Higher Engagement. Some Funny. Some Trendy. Some Serious. Perfectly Describe Any Burger Picture. Top Captions For Social.</p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>    
          
        </>
    );
};

export default Event;
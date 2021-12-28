import React from 'react';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Choose from '../../Component/Choose/Choose';
import Event from '../../Component/Event/Event';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Menu from '../../Component/Menu/Menu';
import Popular from '../../Component/Popular/Popular';
import bg from '../../images/bg.jpg'
import './Home.css'

const Home = () => {
    return (
        <> 
            <div className="header-background">
            <Header/>
            <Banner/>
            </div>
            <About/>
            <Popular/>
            <Menu/>
            <Event/>
            <Choose/>
            <Footer/>
        </>
    );
};

export default Home;
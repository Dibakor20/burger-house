import React from 'react';
import Dashbar from '../../Component/dashboard/Dashbar';
import Sidebar from '../../Component/dashboard/Sidebar';
import Header from '../../Component/Header/Header';
import Map from '../../Component/Map/Map';
import Orders from '../Orders/Orders';


const Dashboard = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3  mt-5">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <Dashbar/>
                </div>
            </div>
            </div>
           
        </>
    );
};

export default Dashboard;
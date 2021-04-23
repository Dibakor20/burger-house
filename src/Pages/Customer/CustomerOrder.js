import React from 'react';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/dashboard/Sidebar';
import Orders from '../Orders/Orders';

const CustomerOrder = () => {
    return (
        <>
             <Header/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3  mt-5">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <Orders/>
                </div>
            </div>
            </div>
        </>
    );
};

export default CustomerOrder;
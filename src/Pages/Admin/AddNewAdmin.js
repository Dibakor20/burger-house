import React from 'react';
import Sidebar from '../../Component/dashboard/Sidebar';
import Header from '../../Component/Header/Header';
import AddAdmin from './AddAdmin';

const AddNewAdmin = () => {
    return (
        <>
            <Header/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3  mt-5">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <AddAdmin/>
                </div>
            </div>
            </div>
        </>
    );
};

export default AddNewAdmin;
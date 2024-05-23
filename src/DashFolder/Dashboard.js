import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "./custom.css";
import { Route, Routes } from 'react-router-dom';
import Newsupdate from './Newsupdate';


const Dashboard = () => {

    <Routes>
        <Route path="/news" element={<Newsupdate />} />
    </Routes>

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='bg-slate-200 nfvh flex'>
                <div className='tfvw bg-slate-800'><Sidebar /></div>
                <div className='p-10'>
                    <Newsupdate />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

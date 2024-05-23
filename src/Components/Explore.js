import React from 'react';
import Sidebar from './Sidebar';
import Searchuser from './Searchuser';
import Latest from "./Latest";

const Explore = () => {
    return (
        <div className='bg-slate-900 hvh hvw'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-y-scroll'>
                    <Searchuser />
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Explore

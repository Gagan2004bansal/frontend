import React from 'react';
import Sidebar from './Sidebar';
import Latest from "./Latest";

const Message = () => {
    return (
        <div className='bg-slate-900 hvh hvw'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-y-scroll hvh'>
                    <div className='p-10 text-3xl text-white'>Chat & Calls</div>
                    <div className='bg-white h-[2px] w-full rounded-md '></div>
                    <div className='flex items-end justify-center text-red-500 hvh underline p-10'>
                        Message Option to be Coming Soon
                    </div>
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Message

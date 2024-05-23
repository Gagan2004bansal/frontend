import React from 'react';
import Sidebar from './Sidebar';
import Latest from "./Latest";
import { MdBookmark } from "react-icons/md";

const Bookmark = () => {
    return (
        <div className='bg-slate-900 hvh hvw'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-y-scroll'>
                    <div className='flex flex-col p-10'>
                        <div className='text-2xl text-white font-bold flex items-center gap-x-2'>
                            <p><MdBookmark /></p>
                            <p>Saved</p>
                        </div>
                        <div className='w-full h-[2px] bg-white my-5'></div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Bookmark

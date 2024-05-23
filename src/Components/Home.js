import React from 'react'
import Sidebar from './Sidebar';
import Latest from "./Latest";
import Tweet from './Tweet';
import Show from './Show';
import './custom.css';

const Home = () => {
    return (
        <div className='bg-slate-900 hvh hvw custom-shadow'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-scroll hvh'>
                    <div className='p-10 flex flex-col '>
                        <div className='text-2xl text-white font-bold bg-sky-500 px-5 py-2 w-fit rounded-lg cursor-pointer hover:bg-sky-400'>For you</div>
                        <div className='w-full h-[2px] bg-white my-5'></div>
                        <div><Tweet /></div>
                        <div className='w-full h-[2px] bg-white my-5'></div>
                        <div><Show /></div>
                    </div>
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Home

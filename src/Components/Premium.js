import React from 'react'
import { useNavigate } from 'react-router-dom'

const Premium = () => {
    const naviagte = useNavigate();
    function clickHandler() {
        naviagte("/premium");
    }
    return (
        <div className='mt-10'>
            <div className='bg-slate-800 opacity-95 py-2 px-4 rounded-xl flex flex-col gap-y-2'>
                <h1 className='text-2xl opacity-75'>Subscribe to Premium</h1>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className='bg-sky-500 hover:bg-sky-600 px-10 py-2 rounded-xl' onClick={clickHandler}>Subscribe</button>
            </div>
        </div>
    )
}

export default Premium

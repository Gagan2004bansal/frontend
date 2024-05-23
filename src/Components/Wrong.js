import React from 'react'
import { Link } from 'react-router-dom'
import isvg from "../images/404.svg"

const Wrong = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-black text-white hvh'>
            <p className='font-bold text-4xl mb-5 underline'>Blogify</p>
            <div className='text-red-400 text-4xl'>404 ERROR</div>
            <p>Page Not Found</p>
            <div className='flex gap-x-3 mt-5'>
                <Link to='/signup'><button className='bg-sky-400 hover:bg-sky-500 px-10 py-2 rounded-xl'>Sign up</button></Link>
                <Link to='/login'><button className='bg-sky-400 hover:bg-sky-500 px-10 py-2 rounded-xl'>Login</button></Link>
            </div>
        </div>
    )
}

export default Wrong

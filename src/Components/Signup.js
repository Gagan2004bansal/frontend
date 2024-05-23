import React from 'react';
import { FaBlog } from "react-icons/fa6";
import Form from './Form';
import svg1 from "../images/signupimg.webp"
import "./custom.css";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg-slate-900 hvh hvw overflow-y-scroll'>
            <div className='flex items-center justify-center mt-4'>
                <div className='p-5 sm:w-8/12 lg:w-4/12'>
                    <div className='bg-slate-700 rounded-lg text-white'>
                        <div>
                            <div className='flex items-center pl-4 pt-2'>
                                <h1 className='text-3xl pr-2'><FaBlog /></h1>
                                <h1 className='text-3xl font-bold'> Blogify</h1>
                            </div>
                            <p className='pl-4 pt-2 text-2xl font-semibold opacity-75'>Create Your Account</p>
                            <p className=' text-slate-300 px-4 py-2 opacity-75'>Start your website in seconds.
                                Already have an account? <Link to='/login'><span className='text-sky-400'>Login here</span></Link>
                            </p>
                        </div>
                        <div className='p-4'>
                            <Form />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img src={svg1} alt='error' />
                </div>
            </div>
        </div>
    )
}

export default Signup

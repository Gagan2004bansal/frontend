import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

const Form = () => {

    const navigate = useNavigate();

    const [post, setPost] = useState({
        username: '',
        firstname: '',
        lastname: '',
        city: '',
        email: '',
        password: '',
        cpassword: '',
        followers: 0,
        following: 0,
        totalblog: 0,
    });

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (post.password !== post.cpassword) {
            console.log("Password Incorrect")
            toast.error("Password Does not match");
        }
        else {
            try {
                const response = await axios.post("http://localhost:3000/signup", post);
                console.log(response.data);

                if (response.data.success === false) {
                    toast.error("Email is already in used");
                }
                else {
                    toast.success("Sign up Successfully");
                    navigate('/home');
                    setPost({
                        username: '',
                        firstname: '',
                        lastname: '',
                        city: '',
                        email: '',
                        password: '',
                        cpassword: '',
                        followers: 0,
                        following: 0,
                        totalblog: 0
                    })
                }
            } catch (error) {
                console.error("Error during signup:", error);
                toast.error("Error during signup. Please try again later.");
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-1'>
                    <label htmlFor="username" className='font-bold'>
                        Username
                    </label>
                    <input type='text' required placeholder='Enter Username...' id='username' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='username' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="firstname" className='font-bold'>
                        Firstname
                    </label>
                    <input type='text' required placeholder='Enter Firstname...' id='firstname' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='firstname' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="lastname" className='font-bold'>
                        Lastname
                    </label>
                    <input type='text' required placeholder='Enter Lastname...' id='lastname' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='lastname' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="city" className='font-bold'>
                        City
                    </label>
                    <input type='text' required placeholder='Enter City...' id='city' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='city' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="email" className='font-bold'>
                        Email
                    </label>
                    <input type='email' required placeholder='Enter email...' id='email' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='email' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="password" className='font-bold'>
                        Password
                    </label>
                    <input type='password' required placeholder='Enter email...' id='password' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='password' onChange={handleInput} />
                </div>
                <div className='flex flex-col py-1'>
                    <label htmlFor="cpassword" className='font-bold'>
                        Confirm Password
                    </label>
                    <input type='password' required placeholder='Enter email...' id='cpassword' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='cpassword' onChange={handleInput} />
                </div>
                <div>
                    <button type='submit' className='bg-sky-400 w-full mt-4 py-2 rounded-md font-bold hover:bg-sky-500' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form

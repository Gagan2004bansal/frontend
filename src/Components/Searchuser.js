import axios from 'axios';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Usercard from './Usercard';
import { toast } from "react-toastify";

const Searchuser = () => {
    ;
    // const [loading, setLoading] = useState(false);
    const [userinfo, setUserinfo] = useState();
    const [username, setUsername] = useState("");

    async function searchhandle() {
        // setLoading(true);
        try {
            console.log(username);
            const response = await axios.post("http://localhost:3000/explore", username);
            setUserinfo(response.data.data);
            console.log(response);
            setUsername("");
        } catch (error) {
            toast.error("User not found");
            console.log("User Doesn't Exist");
        }
        // setLoading(false);
    }

    const handleInput = (event) => {
        setUsername({ ...username, [event.target.name]: event.target.value });
    }

    function submitHandler(event) {
        event.preventDefault();
        searchhandle();
    }

    return (
        <div>
            <div className='flex flex-col p-10'>
                <div className='bg-white rounded-lg'>
                    <form className='flex gap-x-2' onSubmit={submitHandler}>
                        <input type='text' required placeholder='Search' className='w-full px-10 py-2 rounded-l-lg text-lg' name='username' onChange={handleInput} />
                        <button type='submit' className='p-5'><FaSearch /></button>
                    </form>
                </div>
                <div className='w-full h-1 bg-gray-50 mt-10 opacity-15'></div>
                <div className='py-10'>
                    {
                        userinfo ? <Usercard userinfo={userinfo} /> : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Searchuser

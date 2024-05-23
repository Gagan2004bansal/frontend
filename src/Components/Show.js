import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { MdBookmark } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSolidCommentDetail } from "react-icons/bi";

const Show = (props) => {

    const delopt = props.userDel;

    const [value, setValue] = useState([]);

    async function Showdata() {
        try {

            const response = await axios.get("http://localhost:3000/home");
            setValue(response.data.data);

        } catch (error) {
            toast.error("Server Error");
        }
    }

    useEffect(() => {
        Showdata();
    }, [value]);


    const formatDate = (date) => {
        const dateTime = new Date(date);

        const day = dateTime.toLocaleString('en-US', { weekday: 'short' });
        const dayOfMonth = dateTime.getDate();
        const month = dateTime.toLocaleString('en-US', { month: 'short' });
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;

        const formattedDate = `${day} ${dayOfMonth} ${month} ${formattedHour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;

        return formattedDate;
    };

    const clickHandler = () => {
        toast.success("Bookmarked 📩");
    }

    async function deleteHandler(blogPostId) {
        try {
            console.log("delete");
            console.log(blogPostId);
            const response = await axios.delete(`http://localhost:3000/blog/${blogPostId}`);
            console.log(response);
            toast.warning("Deleted!");
            Showdata();
        } catch (error) {
            toast.error("Can't delete, try again later");
        }
    }



    return (
        <div>
            <div>{delopt ? <div className='font-bold text-white text-lg mb-5'></div> : <div className='font-bold text-white text-lg mb-5'>Recent Updates</div>}</div>
            <div className='text-slate-300'>
                <div className='flex flex-col gap-y-5 px-10'>
                    {value.map((info, index) => (
                        <div className='relative'>
                            <div className='bg-white w-10 h-10 rounded-full top-[-10px] left-[-10px] absolute border border-sky-300 hover:border-sky-500 hover:border-2 cursor-pointer'>
                                <div className='flex items-center justify-center w-full h-full text-black text-lg'>
                                    <CgProfile />
                                </div>
                            </div>

                            <div key={index} className='flex flex-col gap-y-1 border-2 border-slate-400 bg-slate-700 rounded-md py-2 px-10 shadow-md shadow-slate-600'>
                                <h2 className='text-lg'>{info.content}</h2>
                                <div className='flex gap-x-2'>
                                    <button className='text-sky-500 hover:text-sky-600'><AiFillLike /></button>
                                    <button className='text-red-500 hover:text-red-600'><AiFillDislike /></button>
                                    <button><BiSolidCommentDetail /></button>
                                    <button className='text-white' onClick={clickHandler}><MdBookmark /></button>
                                    <p className='text-sky-300'>{formatDate(info.time)}</p>
                                    {delopt ? <div>
                                        <button className='px-5 py-[3px] bg-slate-800 rounded-lg ml-5 hover:bg-slate-900' onClick={() => deleteHandler(info._id)}>Delete</button>
                                    </div> : <p></p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center pt-10 underline'>Designed by Gagan Bansal © 2024
                    <p>All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Show

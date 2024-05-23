import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Latest from './Latest';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function ProfileData() {
            try {
                const response = await fetch("http://localhost:3000/profile", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });

                console.log(response);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responsedata = await response.json();
                setProfile(responsedata.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        }

        if (token) {
            ProfileData();
        } else {
            navigate('/login');
        }
    }, [token, navigate]);

    const [hidden, setHidden] = useState(0);
    function hideHandler() {
        setHidden(1);
    }

    return (
        <div className='bg-slate-900 hvh hvw'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-scroll text-white hvh'>
                    <div className='flex flex-col gap-y-2 p-10'>
                        <div className='w-40 h-40 rounded-full'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlskv232Il3n__5TCZRRfD_MSRLQ9c5fwYhS2CkSUFA&s' alt='avatar' className='rounded-full' />
                        </div>
                        <div className='pl-5 flex flex-col gap-y-2 mt-5'>
                            <div className='font-bold text-3xl'>{profile.firstname} {profile.lastname}</div>
                            <div className='font-semibold text-l'>{profile.username}</div>
                            <div className='text-red-600 font-medium'>{profile.city}, India</div>
                            <div className='flex gap-x-5 text-lg'>
                                <div>Followers : {profile.followers}</div>
                                <div>Following : {profile.following}</div>
                                <div>Total Blogs : {profile.totalblog}</div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-10 flex gap-x-10'>
                        <button className='bg-sky-400 hover:bg-sky-500 ml-5 px-10 py-2 rounded-lg text-lg' onClick={hideHandler}>Edit Profile</button>
                        <button className='bg-black rounded-full px-4 py-2 hover:text-slate-400'><BsThreeDotsVertical /></button>
                    </div>
                    <div className='h-[2px] w-full px-15 bg-slate-700 mt-5'></div>
                    <div className='p-10'>
                        {hidden ? <EditProfile setHidden={setHidden} hidden={hidden} /> : <div></div>}
                    </div>
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Profile;

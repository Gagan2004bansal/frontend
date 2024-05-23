import React, { useState } from 'react';
import { FaBlog } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleSetActiveTab = (path) => {
        setActiveTab(path);
    }

    return (
        <div className='bg-black'>
            <div className='tfvw hvh pl-10 py-20 border-r border-slate-600' >
                <div className=''>
                    <Link to="/home" >
                        <div className='flex text-slate-100'>
                            <h1 className='text-4xl pr-2'><FaBlog /></h1>
                            <h1 className="text-4xl font-bold pl-1">Blogify</h1>
                        </div>
                    </Link>
                    <div className='mt-10 text-slate-100 '>
                        <Link to="/home" onClick={() => handleSetActiveTab("/home")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/home' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <RiHomeFill />
                                <p>Home</p>
                            </div>
                        </Link>
                        <Link to="/explore" onClick={() => handleSetActiveTab("/explore")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/explore' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <FaSearch />
                                <p>Explore</p>
                            </div>
                        </Link>
                        <Link to="/blog" onClick={() => handleSetActiveTab("/blog")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/blog' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <FaBlog />
                                <p>Blog</p>
                            </div>
                        </Link>
                        <Link to="/bookmarks" onClick={() => handleSetActiveTab("/bookmarks")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/bookmarks' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <MdBookmark />
                                <p>Bookmarks</p>
                            </div>
                        </Link>
                        <Link to="/message" onClick={() => handleSetActiveTab("/message")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/message' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <RiMessage2Fill />
                                <p>Messages</p>
                            </div>
                        </Link>
                        <Link to="/profile" onClick={() => handleSetActiveTab("/profile")}>
                            <div className={`font-semibold text-2xl py-2 my-1  flex items-center gap-x-5 hover:underline ${activeTab === '/profile' ? 'active-tab text-sky-500 underline' : ''}`}>
                                <CgProfile />
                                <p>Profile</p>
                            </div>
                        </Link>
                    </div>
                    <div className='mt-10'>
                        <button className='bg-sky-400 px-20 py-2 rounded-md text-white hover:bg-sky-500 text-lg'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

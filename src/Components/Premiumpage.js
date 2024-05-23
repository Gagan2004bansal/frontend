import React from 'react';
import { Link } from 'react-router-dom';

const Premiumpage = () => {

    return (
        <div className='bg-black hvh hvw overflow-y-scroll flex items-center justify-center'>
            <div className='max-w-[850px] h-full w-full'>
                <div className='text-white text-3xl sm:text-6xl font-extrabold mt-20 text-center'>Upgrade to Premium</div>
                <div className='font-extralight text-white text-lg text-center mt-8 flex-wrap px-2'>Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.
                    (Not have an account, <Link to='/signup'><span className='text-sky-500'>sign up here</span></Link> )
                </div>
                <div className='text-white font-bold flex items-center justify-center my-8 '>
                    <div className='bg-slate-800 p-1 rounded-xl flex gap-x-2'>
                        <button className='bg-black px-4 py-2 rounded-xl'>Monthly</button>
                        <button className=' px-4 py-2 rounded-xl'>Annual</button>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-y-5 sm:gap-x-5 items-center sm:justify-center shadow-inner pb-10 sm:items-start'>
                    <div className='text-white max-w-[250px] p-5 bg-slate-900 rounded-xl'>
                        <div className='font-bold text-2xl'>Basic</div>
                        <div><span className='text-4xl font-extrabold'>₹215.87</span>/ month</div>
                        <div className='text-sky-500'>Billed annually</div>
                        <div className='flex my-3 items-center justify-center '>
                            <button className='bg-white text-black px-10 py-2 rounded-xl font-bold hover:opacity-65'>Subscribe</button>
                        </div>
                        <div className='px-2'>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Small reply boost</li>
                                <li>Encrypted direct messages</li>
                                <li>Bookmark folders</li>
                                <li>Highlights tab</li>
                                <li>Edit post</li>
                                <li>Hide your likes</li>
                                <li>Longer posts</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white max-w-[250px] p-5 bg-slate-900 rounded-xl'>
                        <div className='font-bold text-2xl'>Advanced</div>
                        <div><span className='text-4xl font-extrabold'>₹566.67</span>/ month</div>
                        <div className='text-sky-500'>Billed annually</div>
                        <div className='flex my-3 items-center justify-center '>
                            <button className='bg-white text-black px-10 py-2 rounded-xl font-bold hover:opacity-65'>Subscribe</button>
                        </div>
                        <div className='px-2'>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li className='text-red-500 font-semibold'>Everyting in Basic</li>
                                <li>Get paid to post</li>
                                <li>Half Ads in For You and Following</li>
                                <li>Larger reply boost</li>
                                <li>X Analytics, Media Studio</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white max-w-[250px] p-5 bg-slate-900 rounded-xl'>
                        <div className='font-bold text-2xl'>Advanced Pro</div>
                        <div><span className='text-4xl font-extrabold'>₹933.33</span>/ month</div>
                        <div className='text-sky-500'>Billed annually</div>
                        <div className='flex my-3 items-center justify-center '>
                            <button className='bg-white text-black px-10 py-2 rounded-xl font-bold hover:opacity-65'>Subscribe</button>
                        </div>
                        <div className='px-2'>
                            <ul style={{ listStyleType: 'disc' }} >
                                <li className='text-red-500 font-semibold'>Everyting in Advanced</li>
                                <li>No Ads in For You and Following</li>
                                <li>Largest reply boost</li>
                                <li>Write Longer Blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premiumpage

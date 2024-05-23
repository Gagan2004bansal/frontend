import React from 'react'
import Premium from './Premium'
import { Link } from 'react-router-dom'

const Latest = () => {
    return (
        <div>
            <div className='px-10 py-20 flex flex-col border-l border-slate-600 hvh'>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold'>Latest News</h1>
                    <Link to="/news"><button className='text-sky-500 underline'>more</button></Link>
                </div>
                <div className='w-full h-[2px] bg-white opacity-80 mt-5'>
                </div>
                <div className='mt-5 flex flex-col gap-y-2'>
                    <li>Trial of the news.</li>
                    <li>All most like blog link to be shown here and their profile link.</li>
                    <li>If you bookmarked any blog and you want to remove it from bookmarked list then you have to delete it from bookmarked tab.</li>
                    <li>Edit button soon in Blog tab. User can once edit their blog.</li>
                </div>
                <div><Premium /></div>
                <div className='mt-10 cursor-pointer'>
                    <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='googleplay' />
                </div>
            </div>
        </div>
    )
}

export default Latest

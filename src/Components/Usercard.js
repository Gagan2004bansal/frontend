import React from 'react'

const Usercard = (props) => {

    const data = props.userinfo;

    return (
        <div>
            <div className='flex flex-col  text-white border-2 border-slate-700 p-2 rounded-lg shadow shadow-slate-700'>
                <h1 className='font-bold text-xl'>{data.firstname} {data.lastname}</h1>
                <p>{data.username}</p>
                <p className='text-red-600'>{data.city}, India</p>
                <div className='flex gap-x-3'>
                    <p>Followers : {data.followers}</p>
                    <p>Following : {data.following}</p>
                </div>
            </div>
        </div>
    )
}

export default Usercard

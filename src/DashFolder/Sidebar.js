import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className='flex flex-col p-10'>
                <div className='mt-10 text-white border-2 py-5 px-3 rounded-lg'>
                    <div className='text-4xl py-2'>Gagan Bansal</div>
                    <p className='text-lg text-red-500'>GaganCU</p>
                </div>
                <div className='mt-10 text-2xl flex flex-col gap-y-3'>
                    <div className='text-white hover:underline border-2 pl-4 py-2 rounded-lg bg-slate-600'>News</div>
                    <div className='text-white hover:underline border-2 pl-4 py-2 rounded-lg bg-slate-600'>Premium</div>
                    <div className='text-white hover:underline border-2 pl-4 py-2 rounded-lg bg-slate-600'>Catogeries</div>
                    <div className='text-white hover:underline border-2 pl-4 py-2 rounded-lg bg-slate-600'>Analysis</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

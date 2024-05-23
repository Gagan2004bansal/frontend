import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Latest from "./Latest";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

// a7fb37d3a0404503b9a04bbcd97e0316


const News = () => {

    const [info, setInfo] = useState([]);

    async function newsFetch() {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=100&apiKey=a7fb37d3a0404503b9a04bbcd97e0316");
        console.log(response);
        setInfo(response.data.articles);
    }

    useEffect(() => {
        newsFetch();
    }, []);

    return (
        <div className='bg-slate-900 hvh hvw'>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='fiftyvw overflow-scroll hvh'>
                    <div className='flex flex-col pb-10'>
                        <div className='text-white bg-black flex items-center justify-between py-4 px-5 rounded-xl shadow-xl shadow-slate-950 fixed fiftyvw mb-4'>
                            <div className='flex gap-x-5 items-center justify-center'>
                                <Link to='/home'><p className='flex items-center cursor-pointer'><MdArrowBackIos />Back</p></Link>
                                <p className='text-xl font-bold'>Blogify News</p>
                            </div>
                            <div className='bg-zinc-900 px-5 py-1 rounded-xl hover:bg-zinc-800 cursor-pointer'>Filter</div>
                        </div>

                        <div className='p-10 text-white mt-10'>
                            {info.map((val, index) => (
                                <div key={index}>
                                    <div className='border-2 m-3 border-zinc-700 rounded-xl '>
                                        <div className='px-10 py-2'>{val.title}</div>
                                        <div className='flex items-center justify-center'><img src={val.urlToImage} alt='news' /></div>
                                        <div className='px-10 py-2'>{val.description}
                                            <span className='text-sky-500 underline hover:text-sky-400'><Link to={val.url}> more</Link></span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='tfvw bg-black text-white'>
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default News

import React from 'react';
import { useRef } from 'react';
import { FaImage } from "react-icons/fa6";

const EditProfile = (props) => {

    const inputFile = useRef(null);

    function hideHandler() {
        let val = !props.hidden;
        props.setHidden(val);
    }

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };



    return (
        <div>
            <div className='bg-slate-600 opacity-50 w-full rounded-xl h-full p-5 border-2 border-white drop-shadow-lg'>
                <div className='px-8 py-1 bg-slate-700 w-fit rounded-xl cursor-pointer text-white hover:bg-slate-900 shadow-md' onClick={hideHandler}>close</div>
                <div className='flex justify-between items-center bg-slate-700 mt-5 px-8 py-2 rounded-md drop-shadow-lg'>
                    <div className='flex items-center'>Add Photo</div>
                    <div className=' cursor-pointer bg-slate-800 text-white rounded-md text-lg px-4 py-2 ml-2' onClick={onButtonClick}><FaImage /></div>
                </div>
                <div className='flex justify-between items-center bg-slate-700 mt-5 px-8 py-2 rounded-md drop-shadow-lg'>
                    <div className='flex items-center'>Change Location</div>
                    <input type='text' placeholder='Delhi...' className='px-5 py-2 bg-slate-700 border rounded-lg' />
                </div>
                <div>
                    <form className='flex gap-x-2 items-end'>
                        <input type='text' style={{ display: 'none' }} />
                        <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                        <button className='bg-sky-400 hover:bg-sky-600  px-10 rounded-md h-10 text-white w-full text-lg mt-4 w-fit' >Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile

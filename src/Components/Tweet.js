import React, { useRef, useState } from 'react';
import { FaImage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import axios from 'axios';

const Tweet = () => {

    const inputFile = useRef(null);
    // console.log(inputFile);

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const maxCharacters = 800;
    const [value, setValue] = useState('');
    const [data, setData] = useState({ content: '' });

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxCharacters) {
            setValue(inputValue);
            setData({ content: inputValue });
        }
    };

    async function submitHandler() {
        try {
            if (value.length > 0) {
                const response = await axios.post("http://localhost:3000/home", data);
                console.log(response);

                toast.success("Posted!");

                setValue('');
                setData({ content: '' });
            }
            else {
                toast.error("Can't Post")
            }
        } catch (error) {
            toast.error("Network Error! try again later");
        }
    }


    return (
        <div>
            <div>
                <div className='flex bg-slate-700 min-h-24 rounded-lg p-2 gap-x-4 items-start justify-center drop-shadow-2xl shadow-xl'>
                    <div className='bg-white p-2 rounded-full flex items-center justify-center text-2xl'>
                        <CgProfile />
                    </div>
                    <div className='w-full flex'>
                        <form className='flex gap-x-2 items-end'>
                            <textarea value={value} onChange={handleChange} maxLength={maxCharacters} className='min-h-24 bg-slate-700 min-w-72 lg:min-w-96 text-white px-2 py-2 text-lg ' placeholder='What is happening?!' name='content' />
                            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                        </form>
                        <div className='flex items-end gap-x-2'>
                            <div className=' cursor-pointer bg-slate-800 text-white rounded-md text-lg px-4 py-2 ml-2' onClick={onButtonClick}><FaImage /></div>
                            <button className='bg-sky-400 hover:bg-sky-600  px-10 rounded-md h-10 text-white w-full text-lg' onClick={submitHandler}>Post</button>
                        </div>
                    </div>
                </div>
                {maxCharacters - value.length <= 30 && (
                    <div className='text-red-400'>
                        {maxCharacters - value.length} characters remaining
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tweet

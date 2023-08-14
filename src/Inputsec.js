import React, { useState } from 'react'
import { useRef } from 'react'
import Apicall from './Apicall';
const Inputsec = () => {
    const inputRef = useRef(null);
    const [update, setUpdate] = useState('');

    const sortUrl = () => {
        setUpdate(inputRef.current.value);
    }
    return (
        <div>
            <div className='mt-4 flex justify-center rounded-xl bg-gray-500  w-[90%] h-12 m-auto bg-[url(../src/img/shortener.png)] phones:ml-9 '>
                <input ref={inputRef} type='text' placeholder='Shorten a link here...' className='text-sm rounded-xl m-2 outline-none pl-2 w-3/4 phones:text-[10px]' />
                <button onClick={sortUrl} type='submit' className='m-2 rounded-xl text-xs p-1 w-20
                bg-Cyan hover:text-white hover:bg-cyan-950 text-white phones:text-[10px] phones:w-15'>Shorten It!</button>
            </div>

            <Apicall data={update} />
            
        </div>

    )
}

export default Inputsec

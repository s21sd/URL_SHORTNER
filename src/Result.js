import React, { useState } from 'react'

const Result = (props) => {

    const [copy, setCopy] = useState('Copy');

    const copyPassword = () => {
        navigator.clipboard.writeText(props.linkVal);
        setCopy("Copied!");

    }
    return (
        props.linkVal != null ?
            (
                <div className='flex justify-between items-center p-1 w-[90%] m-auto rounded-xl mt-2 bg-slate-100 h-12'>
                    <div>
                        <p className='text-[10px] phones:text-[6px]'>{props.acVal}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[Cyan] text-xs phones:text-[8px]'>{props.linkVal}</p>
                        <button onClick={copyPassword} className='m-2 rounded-lg text-xs p-1 w-20 bg-Cyan hover:bg-cyan-950 text-white phones:text-[8px] phones:w-15'>{copy}</button>
                    </div>
                </div>
            ) :
            null

    )
}

export default Result
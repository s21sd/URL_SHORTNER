import React from 'react'
import logo from "../src/img/desktop.avif"
const Second = () => {
    return (
        <div className='flex items-center justify-around  phones:m-4 '>
            <div>
                <h1 className='font-bold text-4xl phones:text-2xl'>More than just<br></br>
                    shorter links</h1>

                <p className='text-xs text-gray-500'>  Build your brand's recognition and get detailed<br></br> insights
                    on how your links are performing.</p>

                <button className='m-3 rounded-3xl text-xs p-1 w-20  bg-Cyan hover:bg-cyan-950 text-white'>Get Started</button>
            </div>
            <div>
                <img src={logo} alt='basic' className='w-60 h-60 phones:ml-6' />
            </div>

        </div>
    )
}

export default Second

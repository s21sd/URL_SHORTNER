import React from 'react'
import './index.css';
export default function Header() {
    return (
        <div className='flex justify-between m-3 items-center phones:text-sm phones:mt-3 phones:ml-1 '>
            <div className='flex justify-around items-center ml-2 cursor-pointer'>
                <h1 className='font-bold'>Shortly</h1>
                <ul className='flex ml-2 text-xs text-gray-500 '>
                    <li className='m-2 hover:text-black'>Features</li>
                    <li className='m-2 hover:text-black'>Pricing</li>
                    <li className='m-2 hover:text-black'>Resources</li>
                </ul>
            </div>
            <div className='flex justify-center items-center mr-2 text-gray-500 text-xs'>
                <button className='m-2 rounded-xl text-xs p-1 w-14
                hover:bg-Cyan  hover:text-white'>LogIn</button>
                <button className='m-2 rounded-xl text-xs p-1 w-14 bg-Cyan text-white'>SignUp</button>
            </div>
        </div>
    )
}
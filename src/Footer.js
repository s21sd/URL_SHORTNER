import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='bg-black phones:w-[100%]'>
            <div className='text-center bg-Cyan p-6 mt-8'>
                <h1 className='font-bold text-lg text-yellow-50 '>Boost your links today</h1>
                <button className='m-2 rounded-3xl text-xs p-1 w-20 bg-yellow-50 hover:bg-cyan-950 hover:text-white text-black' >Get Started</button>
            </div>

            <div className='flex justify-between m-2 text-white p-6'>
                <h1>Shortly</h1>
                <div className='flex text-sm'>

                    <div className='ml-4'>
                        <p className='font-semibold'>Features</p>
                        <ul className='text-xs text-gray-500 mt-1'>
                            <li className='cursor-pointer hover:text-white' >Link Shortening</li>
                            <li className='cursor-pointer hover:text-white'>Branded Links</li>
                            <li className='cursor-pointer hover:text-white'>Analytics</li>
                        </ul>
                    </div>

                    <div className='ml-4'>
                        <p className='font-semibold' >Resources</p>
                        <ul className='text-xs text-gray-500 mt-1'>
                            <li className='cursor-pointer hover:text-white'>Blog</li>
                            <li className='cursor-pointer hover:text-white'>Developers</li>
                            <li className='cursor-pointer hover:text-white'>Support</li>
                        </ul>
                    </div>

                    <div className='ml-4'>
                        <p className='font-semibold' >Company</p>
                        <ul className='text-xs text-gray-500 mt-1' >
                            <li className='cursor-pointer hover:text-white'>About</li>
                            <li className='cursor-pointer hover:text-white'>Our Team</li>
                            <li className='cursor-pointer hover:text-white'>Careers</li>
                            <li className='cursor-pointer hover:text-white'>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='flex'>
                    <FontAwesomeIcon className='m-1 cursor-pointer hover:translate-y-1' icon={faFacebook} />
                    <FontAwesomeIcon className='m-1 cursor-pointer hover:translate-y-1' icon={faTwitter} />
                    <FontAwesomeIcon className='m-1 cursor-pointer hover:translate-y-1' icon={faPinterest} />
                    <FontAwesomeIcon className='m-1 cursor-pointer hover:translate-y-1' icon={faInstagram} />
                </div>
            </div>
        </div>
    )
}

export default Footer

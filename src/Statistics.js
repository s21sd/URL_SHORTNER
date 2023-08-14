import React from 'react'

const Statistics = () => {
    return (
        <div>
            <div>

                <div className='m-10'>
                    <h1 className='text-3xl font-bold text-center phones:text-2lg'>Advanced Statistics</h1>
                    <p className='text-xs mt-1 ext-gray-500 text-center phones:text-sm '>Track how your links are performing across the web with<br></br>our advanced Statistics dashboard</p>
                </div>


                <div className='flex justify-center items-center ml-4 mr-4 '>
                    <div className='bg-slate-100  leading-4 m-2 p-4 rounded-lg'>
                        <h1 className='text-xl font-bold text-center phones:text-[10px]' >Brand Recognition</h1>
                        <p className='text-sm ext-gray-500 text-center phones:text-[13px]' >Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className='bg-slate-100 leading-4 m-2 p-4 rounded-lg '>
                        <h1 className='text-xl font-bold text-center phones:text-[10px]' >Detailed Records</h1>
                        <p className='text-sm ext-gray-500 text-center phones:text-[13px]' >Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className='bg-slate-100 m-2 leading-4 p-4 rounded-lg'>
                        <h1 className='text-xl font-bold text-center phones:text-[10px]' >Fully Customizable
                        </h1>
                        <p className='text-sm ext-gray-500 text-center phones:text-[13px]' >Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement with us.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Statistics

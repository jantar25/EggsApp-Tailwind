import React from 'react'

const navbar = () => {
    return (
        <div className='flex justify-between h-24 py-5 px-8 md:px-16 bg-white-700'>
            <div className='flex justify-center items-center'>
                <div className="flex justify-center items-center h-10 w-10 md:h-16 md:w-16 bg-gradient-to-r 
                from-cyan-500 to-teal-500 rounded-lg font-medium text-3xl md:text-5xl">G</div>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-teal-500'>LOGIN</h1>
            </div>

        </div>
    )
}

export default navbar

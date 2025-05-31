import React from 'react'
import ProgressChart from './ProgressChart'

const Header = () => {


    return (
        <div className='max-w-4xl mx-auto text-center bg-white shadow-lg rounded-xl p-6'>
            <h1 className='text-4xl font-bold text-blue-700'>My Daily Routine</h1>
            <p className='text-lg text-gray-600 mt-2'>
                Manage your daily tasks effectively and stay productive.
            </p>
            <ProgressChart />
        </div>
    )
}

export default Header
import React from 'react';
import './Bookmark.css';
const Bookmark = ({time}) => {
    return (
        <div >
            <div className='px-10 py-5 border border-secondary bg-secondary bg-opacity-10 rounded-lg text-center'>
                <h3 className='font-bold text-2xl text-secondary'>Spent time on read : {time<10?'0'+time:time} min</h3>
            </div>
            <div className='p-7 bg-neutral bg-opacity-5 rounded-lg mt-6'>
                <h3 className='text-2xl font-bold text-neutral'>Bookmarked Blogs : 8</h3>
                <div className='p-5 rounded-lg bg-white my-4'>
                    <p className='font-semibold text-lg text-neutral'>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
                <div className='p-5 rounded-lg bg-white my-4'>
                    <p className='font-semibold text-lg text-neutral'>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
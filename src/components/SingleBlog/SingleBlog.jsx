import React from 'react';
import './SingleBlog.css';

const SingleBlog = ({blog}) => {
    const {id, question, answer} = blog;
    return (
        <div className='border border-error/25 rounded-lg p-8 mb-10 bg-accent bg-opacity-25'>
            <h1 className='font-bold text-secondary mb-3'>{id}. {question}</h1>
            <p className='text-gray-600 mb-2'>
                <span className='font-extrabold'>Ans: </span>
                {answer}
            </p>
            
        </div>
    );
};

export default SingleBlog;
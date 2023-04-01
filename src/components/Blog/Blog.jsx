import React, { useEffect, useState } from 'react';
import './Blog.css'
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json').then(res=>res.json()).then(data=>setBlogs(data))
    },[])

    return (
        <div className='mx-5 lg:mx-10 my-16'>
            <h1 className='font-bold text-4xl my-8 text-center text-secondary'>Simple Question Answer</h1>
            {
                blogs && blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;
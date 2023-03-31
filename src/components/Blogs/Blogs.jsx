import React, { useEffect, useState } from 'react';
import './Blogs.css'
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json').then(res=>res.json()).then(data=>setBlogs(data))
    },[])

    return (
        <div>
            {
                blogs && blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;
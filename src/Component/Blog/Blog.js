import React, { useContext } from 'react';
import {PostContext} from '../Home/Home'

const Blog = () => {
    const [post, setPost] = useContext(PostContext);
    
    const handleChange = e =>{
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit= e =>{
        e.preventDefault();
        fetch('http://localhost:4000/blog/new', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <input type="text" className="form-control" name='title' onChange={handleChange} value={post.title} />
            <input type="text" className="form-control" name='body' onChange={handleChange} value={post.body} />
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Blog;
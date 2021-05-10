import React, { createContext, useState } from 'react';
import Blog from '../Blog/Blog';

export const PostContext= createContext();

const Home = () => {
    const [post, setPost] = useState({
        title:'',
        body:''
    })

    return (
        <PostContext.Provider value={[post,setPost]}>
            <Blog />
        </PostContext.Provider>
    );
};

export default Home;
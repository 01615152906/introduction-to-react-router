
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {

const posts = useLoaderData();

    return (
        <div className='text-center p-5'>
           <h2>Posts: {posts.length}</h2> 
<div className='grid grid-cols-3  gap-10 m-10   '>
    {
        posts.map(post => <Post key={post.id} post={post}></Post>)
    }
</div>

        </div>
    );
};

export default Posts;
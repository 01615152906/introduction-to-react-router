import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;
    console.log(postId);
   const handleGoBack = () => {
    navigate(-1);
   }
    return (
        <div className='text-center p-5'>
          <h2>Post details about:{id}</h2>  
          <p>Title:{title}</p>
          <p><small>{body}</small></p>
          <button onClick={handleGoBack} className='p-3 bg-amber-300 rounded-2xl m-4'>Go back</button>
        </div>
    );
};

export default PostDetails;
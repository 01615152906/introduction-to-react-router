import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title,  } = post;
const navigate = useNavigate();
const handleShowDetail = () => {
navigate(`/post/${id}`)
}

    return (
        <div className='text-center border border-yellow-500  rounded-2xl overflow-auto p-2 bg-amber-700 text-amber-50  '>
           
         <h3>
            Post of id: {id}
         </h3>
         <p className='mb-3'>{title}</p>
         <Link className='bg-red-500 p-2 rounded-2xl' to={`/post/${id}`}> Post Detail</Link>
         <Link  to={`/post/${id}`}><button  className='m-4 bg-amber-800 p-2  rounded-2xl'>Show Details</button></Link>
         <button className='bg-yellow-600 p-2  rounded-2xl' onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post; 
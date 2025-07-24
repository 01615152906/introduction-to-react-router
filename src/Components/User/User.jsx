import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone } =user
    return (
        <div className=' border border-yellow-500    rounded-2xl overflow-auto p-2 bg-emerald-700  text-white'>
           <h2 className='pb-5'>{name}</h2> 
           <p className='pb-5'>email:{email} </p>
           <p className='pb-5'>phone:{phone}</p>


           <Link to={`/user/${id}`} className='bg-fuchsia-500 p-2 rounded-xl' >Show Details</Link>
            <Link to={`/user/${id}`}><button className='m-4 bg-blue-950 p-3 rounded-xl'>Click me</button></Link>
        </div>
    );
};

export default User;
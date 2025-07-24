
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className='text-center p-10'>
            <h2>Our Users:{users.length} </h2>
            <p>Fantastic vodro Users</p>

            <div className=' grid grid-cols-3  gap-10 m-10 '>
                {
                    users.map( user => <User key={user.id} user={user} ></User> )
                }
            </div>
        </div>
    );
};

export default Users;
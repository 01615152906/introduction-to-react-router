import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='m-5 text-center text-5xl space-y-6'>
            <h2>Oops !!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div>
                    <p>Go hack wherre you from </p>
                    <Link to="/"><button className='bg-emerald-300 p-4 rounded-2xl mt-3'>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
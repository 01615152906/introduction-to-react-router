import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
 <div className='text-center mt-20' >
            

  <nav className='text-blue-600  '>
  
    <p className='pb-5 '>My-Website</p>
    <div>


 <Link  to="/"> Home</Link>
 <NavLink   to="/users"> Usres</NavLink>
 {/* <Link className='m-5' to="users"> Users</Link> */}
<NavLink   to="/posts"> Posts</NavLink>
 {/* <Link className='m-5'  to="/posts"> Posts</Link> */}
 <Link  to="/about"> About</Link>
  <Link  to="contact"> Contact</Link>
                
   </div>

   </nav>
   </div>
    );
};

export default Header;
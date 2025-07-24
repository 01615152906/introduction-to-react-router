import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
const location = useLocation();

console.log(location);
    return (
        <div>
 <Header></Header>
 {
    navigation.state === "loading" ? <p className='text-center'>Loading</p> : 
    <Outlet></Outlet>
 }
{/* <Outlet></Outlet> */}
 <Footer></Footer>
   {/* <h2>This is the home components</h2>

   <Outlet></Outlet> */}
        </div>
    );
};

export default Home;
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter,
//    RouterProvider, 
//   } from 'react-router-dom'




// const router = createBrowserRouter([

// {
//   path: '/', 
//   element: <div>Hello from react router !!</div>
// },
// {
//   path: '/about',
//   element: <div>I am in the about page</div>
// },
// {
//   path: '/contact',
//   element: <div>Call right now !!</div>
// }

// ])
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
// import Header from './Components/Header/Header.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    //  <div>Hello world!</div>,
errorElement: <ErrorPage></ErrorPage>,

children: [
  {
    path: '/about',
    element: <About></About>


  },

 {
    path: '/contact',
    element: <Contact></Contact>
  },

  {
    path: '/users',
loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element: <Users></Users>
  },
  {
    path: '/user/:userId',
    loader: ({params}) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      //  console.log(params.userId)
  ,
    element: <UserDetails></UserDetails>
  },

  {
    path: '/posts',

    loader: () => fetch ('https://jsonplaceholder.typicode.com/posts'),
    element: <Posts></Posts>
  },
  {
   path: '/post/:postId',
loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element: <PostDetails></PostDetails>
  }



] },




  // {
  //   path: 'header',
  //   element: <Header></Header>
  // }


]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
{/* <RouterProvider router={router}></RouterProvider> */}
 <RouterProvider router={router} />

  </StrictMode>,
)
   
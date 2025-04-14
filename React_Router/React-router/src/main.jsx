import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import Users from './components/Users/Users.jsx'
import Github  from './components/Github/Github.jsx'
import HandleLoader from './components/Github/HandleLoader.jsx'

// First Way to create a router element for the RouterProvider
// const router = createBrowserRouter([
//   {
//   path:"/",
//   element : <Layout />,
//   children : [
//     {path:"" ,
//     element : <Home />
//     },
//     {
//       path:"about",
//       element : <About />,
//     },
//     {
//       path:"contact",
//       element : <Contact />
//     }
//   ]
//   }
// ])



// Second Way to create a router element for the RouterProvider

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="users/:userId" element={<Users />}/>
    <Route layout={HandleLoader} path="github" element={<Github />}/>
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)




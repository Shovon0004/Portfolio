import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Skill from './components/Skill.jsx'
import Blogs from './components/Blogs.jsx'
import ParticleCursor from './components/ParticleCursor.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }, {
//         path: "Projects",
//         element: <Projects />
//       }, {
//         path: "Contact",
//         element:<Contact/>
        
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Router path='/' element={<Layout />}>
      <ParticleCursor/>
      <Routes path="" element={<Home />} />
      <Routes path="about" element={<About />} />
      <Routes path="Projects" element={<Projects />} />
      <Routes path="Contact" element={<Contact />} />
      <Routes path="Skill" element={<Skill />} />
      <Routes path="Blogs" element={<Blogs/>}/>
    </Router>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
      <RouterProvider router={router} />
     
  </StrictMode>,
)
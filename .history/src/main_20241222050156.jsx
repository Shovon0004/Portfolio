import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Skill from './components/Skill.jsx'
import Blogs from './components/Blogs.jsx'



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
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Skill" element={<Skill />} />
      <Route P
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
      <RouterProvider router={router} />
     
  </StrictMode>,
)

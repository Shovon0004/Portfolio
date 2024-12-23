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
const initializeTheme = () => {
  // Check if theme exists in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    // Apply saved theme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    return;
  }

  // If no saved theme, check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};

// Initialize theme before rendering
initializeTheme();


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
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
      <RouterProvider router={router} />
     
  </StrictMode>,
)

import React from 'react';
import { Outlet } from 'react-router-dom';
import ParticleCursor from './componentsParticleCursor'; // Import the particle cursor component

const Layout = () => {
  return (
    <div>
      <ParticleCursor /> {/* Add the particle cursor here */}
      <header>
        {/* Your navigation or header content */}
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/Projects">Projects</a>
          <a href="/Skill">Skills</a>
          <a href="/Blogs">Blogs</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
      <main>
        <Outlet /> {/* This renders the child route components */}
      </main>
    </div>
  );
};

export default Layout;

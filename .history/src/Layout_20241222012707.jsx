import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <main className="flex-grow text-gray-900 dark:text-white">
                <Outlet />
            </main>
    <Footer />
    </>
  )
}

export default Layout
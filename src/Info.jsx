import React from 'react'
import './Info.css'
import About from './About'
import Resume from './Resume'
import { Routes, Route, NavLink, Outlet } from 'react-router'
import Projects from './Projects'
import Contact from './Contact'
function Info() {
    return (
        <div className='info-container'>
            <div className="navigator">
                <NavLink to='/'><span>About</span></NavLink>
                <NavLink to='/resume'><span>Resume</span></NavLink>
                <NavLink to='/projects'><span>Projects</span></NavLink>
                <NavLink to='/contact'><span>Contact</span></NavLink>
            </div>
            <Routes>
                <Route path='*' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Info
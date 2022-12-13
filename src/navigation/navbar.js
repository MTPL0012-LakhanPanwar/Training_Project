import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Service from './service';
import Contact from './contact';
import About from './about';
import Login from './login'

export default function Navbar() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/src/navigation/home.js">Home</Link>
                    </li>

                    <li>
                        <Link to="/src/navigation/service.js">Service</Link>
                    </li>

                    <li>
                        <Link to="/src/navigation/contact.js">Contact</Link>
                    </li>

                    <li>
                        <Link to="/src/navigation/about.js">About</Link>
                    </li>

                    <li>
                        <Link to="/src/navigation/login.js">Login</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/src/navigation/home.js" element={<Home />} />
                <Route path="/src/navigation/service.js" element={<Service />} />
                <Route path="/src/navigation/contact.js" element={<Contact />} />
                <Route path="/src/navigation/about.js" element={<About />} />
                <Route path="/src/navigation/login.js" element={<Login />} />
            </Routes>
        </div>
    )
}

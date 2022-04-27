import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = (props) => {
    const [fondo, setFondo] = useState(props.principal === "true")
    const cambiarFondo = () => {
        if (props.principal === "true") {
            if (window.scrollY < 400) {
                setFondo(true);
            }
            else{
                setFondo(false);
            }
        }
    }
    window.addEventListener('scroll', cambiarFondo);
    return (
        <header>
            <div className={fondo ? "navbar fixed z-10 top-0 text-white fondo h-20 font-chivo font-bold bg-transparent" :
                "navbar fixed z-10 top-0 text-white fondo h-20 font-chivo font-bold bg-blue-700"}>
                <div className="navbar-start bg-blue">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink style={({ isActive }) =>
                                isActive ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                    : {}} to="/services">Servicios</NavLink></li>
                            <li><NavLink style={({ isActive }) =>
                                isActive ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                    : {}} to="/jobs">Trabajos</NavLink></li>
                            <li><NavLink style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: '#3B82F6',
                                    }
                                    : {}} to="/about">Nosotros</NavLink></li>
                            <li><NavLink style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: '#3B82F6',
                                    }
                                    : {}} to="/news">Noticias</NavLink></li>
                            <li><NavLink style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: '#3B82F6',
                                    }
                                    : {}} to="/contact">Contacto</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/"><img src={require("../logo.png")} alt='Inicio' className="w-32 m-2 p-7" /></NavLink>
                </div>
                <div className="navbar-end hidden mr-7 lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                : {}} to="/services">Servicios</NavLink></li>
                        <li><NavLink style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                : {}} to="/jobs">Trabajos</NavLink></li>
                        <li><NavLink style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                : {}} to="/about">Nosotros</NavLink></li>
                        <li><NavLink style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                : {}} to="/news">Noticias</NavLink></li>
                        <li><NavLink style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: '#3B82F6',
                                }
                                : {}} to="/contact">Contacto</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
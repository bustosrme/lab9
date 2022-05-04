import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='shadow-xl mt-10 text-gray-700'>
            <footer className="footer p-10 bg-white ">
                <div className="items-center grid-flow-col w-full">
                    <Link to='/'>
                        <img src={require("../Logo-footer.png")} alt="Logo" className="w-32 p-4" />
                    </Link>
                </div>
                <div className='lg:ml-80'>
                    <a href='' className="link link-hover">Marketing Digital</a>
                    <a href='' className="link link-hover">Innovación Empresarial</a>
                    <a href='' className="link link-hover">Desing Sprint</a>
                    <a href='' className="link link-hover">Brading</a>
                    <a href='' className="link link-hover">Diseño de Interfaces</a>
                    <a href='' className="link link-hover">Desarrollo</a>
                </div>
                <div>
                    <a href='' className="link link-hover">Nosotros</a>
                    <a href='' className="link link-hover">Trabajos</a>
                    <a href='' className="link link-hover">Noticias</a>
                    <a href='' className="link link-hover">Sumate</a>
                    <a href='' className="link link-hover">Contacto</a>
                </div>
                <div className="justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-blue-700">
                        <a href='https://www.facebook.com/lab9.digital.agency' rel="noreferrer" target={'_blank'}><FaFacebookSquare size={30} /></a>
                        <a href='https://www.instagram.com/lab9.agencia/' rel="noreferrer" target={'_blank'}><FaInstagram size={30} /></a>
                        <a href='https://www.linkedin.com/company/lab-9-agencia-digital' rel="noreferrer" target={'_blank'}><FaLinkedin size={30} /></a>
                        <a href='https://api.whatsapp.com/send?phone=5493815512810&text=Hola,%20me%20interesa%20comunicarme%20con%20Lab9' rel="noreferrer" target={'_blank'}><FaWhatsapp size={30} /></a>
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-white">
                <p>2022 © Hecho con ❤ en Tucumán, Argentina</p>
            </footer>
        </div>
    );
}

export default Footer;
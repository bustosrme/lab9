import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from "react";
import { Form, Field } from 'react-final-form';

const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

function Contact() {
    return (
        <div>
            <Navbar fondo="bg-blue-700" />
            <div className='lg:flex px-10 lg:px-28 justify-center mt-32 lg:mt-44 gap-12'>
                <div className='lg:w-1/2 text-lg text-gray-600 font-chivo'>
                    <h1 className='text-blue-700 text-4xl font-comfortaa font-bold leading-normal'>Ponte en contacto con Lab9, queremos conocerte.</h1>
                    <p className='pt-2'>¿Tienes una idea extraordinaria, un desafío que te mantiene despierto por las noches?</p>
                    <p className='py-10'>¿Quieres que hablemos sobre los últimos desarrollos tecnológicos y digitales, que podrías aplicar en tu empresa?</p>
                    <p>Siéntete libre para plantearnos estas u otras inquietudes, contáctanos.</p>
                    <p className='text-blue-700 font-comfortaa pt-8'>Dirección</p>
                    <p>San Miguel de Tucumán (4000) Tucumán, Argentina</p>
                    <p className='text-blue-700 font-comfortaa pt-6'>Teléfono</p>
                    <p className='font-mono'><a href='tel:+543813174279'>+54 381 3174279</a>/<a href='tel:+543815512810'>+54 381 5512810</a></p>
                    <p className='text-blue-700 font-comfortaa pt-6'>Correo electrónico</p>
                    <p>info@lab9.co</p>
                    <div className='text-blue-700 mt-10 grid grid-flow-col justify-start gap-10'>
                        <a href='https://www.facebook.com/lab9.digital.agency' target={'_blank'}><FaFacebookSquare size={30} /></a>
                        <a href='https://www.instagram.com/lab9.agencia/' target={'_blank'}><FaInstagram size={30} /></a>
                        <a href='https://www.linkedin.com/company/lab-9-agencia-digital' target={'_blank'}><FaLinkedin size={30} /></a>
                        <a href='https://api.whatsapp.com/send?phone=5493815512810&text=Hola,%20me%20interesa%20comunicarme%20con%20Lab9' target={'_blank'}><FaWhatsapp size={30} /></a>
                    </div>
                </div>
                <div className='h-screen lg:w-1/2 rounded-3xl text-black bg-white shadow-xl'>
                    <form className='px-10 pb-10' onSubmit={onSubmit}>
                        <div>
                            <label className='block pt-6'>Nombre<span className="obligatorio">*</span></label>
                            <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Nombre" />
                        </div>
                        <div>
                            <label className='block pt-6'>Email<span className="obligatorio">*</span></label>
                            <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Correo Electrónico" />
                        </div>
                        <div>
                            <label className='block pt-6'>Asunto<span className="obligatorio">*</span></label>
                            <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Asunto" />
                        </div>
                        <div>
                            <label className='block pt-6'>Mensaje<span className="obligatorio">*</span></label>
                            <input className='input input-bordered input-primary w-full bg-gray-100 border-white h-24' name="introducir_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu mensaje..." />
                        </div>
                        <p className="pt-4 pb-10 text-sm">
                            <span className="obligatorio"> * </span>los campos son obligatorios.
                        </p>
                        <button className='btn btn-primary' type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
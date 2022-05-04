import { Link } from "react-router-dom";
import CardInicio from "../components/CardInicio";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import tarjetasInicio from '../js/tarjetasInicio';
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineHighlight } from 'react-icons/ai'
import { TiLocationArrowOutline } from 'react-icons/ti'

function Services() {
    return (
        <div className="font-chivo">
            <Navbar />
            <div className='sm:p-5 lg:p-24 font-comfortaa bg-cover bg-[url("http://lab9.co/wp-content/uploads/2021/03/Smarter-service.png")]'>
                <div className='text-black bg-cover'>
                    <h4 className='text-blue-700 text-xl mt-16 mb-5'>Servicios</h4>
                    <h1 className="text-5xl w-4/5">Te guiamos a convertir tus innovaciones en soluciones viables.</h1>
                    <p className="text-gray-700 text-2xl mt-16">Brindamos soluciones innovadoras, de alta calidad, enfocadas y entregadas a tiempo.
                        Asistimos a nuestros clientes en la implementación de soluciones que simplifican y abordan problemas con el fin de impulsar la innovación en su industria.</p>
                </div>
                <div className='gap-4 mt-8 ml-4 justify-center items-stretch flex-wrap flex'>
                    <CardInicio tarjetasInicio={tarjetasInicio} />
                </div>
                <h1 className="text-3xl text-blue-700 font-comfortaa font-bold text-center mt-14">Así es como trabajamos.</h1>
                <p className="px-8">Con el análisis, el diseño y la implementación de herramientas ya probadas que funcionan, te conducimos a la innovación.</p>
                <div className='gap-4 ml-3 mt-6 justify-center items-stretch flex-wrap flex text-center lg:text-left'>
                    <div className="flex flex-col items-center lg:items-start p-9" style={{ flex: '0 0 330px' }}>
                        <div><FaGraduationCap className="text-blue-700" size={45} /></div>
                        <h4 className="text-black text-2xl my-3 pr-10">Investigamos y planificamos.</h4>
                        <p className="text-gray-500">Comenzando con los problemas que tienes, los identificamos para abordar, verificamos las oportunidades y vinculamos los puntos, buscando las soluciones viables.</p>
                    </div>
                    <div className="flex flex-col items-center font-bold lg:items-start p-9" style={{ flex: '0 0 330px' }}>
                        <div><AiOutlineHighlight className="text-blue-700" size={45} /></div>
                        <h4 className="text-black text-2xl my-3 pr-10">Diseñamos y construímos.</h4>
                        <p className="text-gray-500">Ejecutamos tus proyectos con increíble rapidez y precisión, desde el prototipo hasta el producto terminado. En poco tiempo ves los resultados.</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start p-9" style={{ flex: '0 0 330px' }}>
                        <div><TiLocationArrowOutline className="text-blue-700" size={45} /></div>
                        <h4 className="text-black text-2xl my-3 pr-10">Lanzamos y crecemos.</h4>
                        <p className="text-gray-500">Comenzamos esta fiesta enviando tu producto al público. Ahora es el momento de expandirnos y adaptarnos a las necesidades cambiantes de tus clientes.</p>
                    </div>
                </div>
                <h1 className="text-xl text-blue-700 font-comfortaa font-bold text-center mt-32 mb-6">La metodología Design Sprint</h1>
                <p className="text-2xl text-black font-comfortaa font-light text-center">Gracias al timeboxing, Design Sprint toma un proceso que a veces puede prolongarse durante meses y lo condensa en solo 5 días.</p>
                <div className='relative w-full bg-cover rounded-3xl my-12 bg-[url("http://lab9.co/wp-content/uploads/2021/02/service-image001.png")]' style={{ height: "450px" }}>
                    <Link className='absolute bottom-10 left-10' to=''>
                        <button className="btn btn-primary rounded-xl mt-32 from-purple-500 bg-gradient-to-tl">Ver más</button>
                    </Link>
                </div>
                <div className="text-black p-2 mt-32">
                    <h1 className="text-5xl font-comfortaa font-bold mb-7">¡Ponte en contacto con nosotros!</h1>
                    <p>Diseñamos soluciones digitales para las empresas más exitosas del mundo. Podemos ayudarlo a diseñar un nuevo producto desde cero, desarrollar un producto existente o inspirar a su equipo para que sea más creativo. Solicite una consulta utilizando este formulario para obtener más información:</p>
                    <div className="bg-white lg:mx-28 px-8 py-2 mt-10 rounded-3xl font-chivo font-bold">
                        <form className="" style={{ maxWidth: "100%" }}>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="text" name="nombre" id="nombre" placeholder="Nombre *" />
                            </div>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="text" name="nombreEmpresa" id="nombreEmpresa" placeholder="Nombre de la Empresa *" />
                            </div>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="email" name="correoEmpresa" id="correoEmpresa" placeholder="Correo de la Empresa" />
                            </div>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="text" id="tituloEmpresa" placeholder="¿Cuál es su título en la empresa? *" />
                            </div>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="tel" name="telefono" id="telefono" placeholder="Número de teléfono *" />
                            </div>
                            <div className="pt-7">
                                <input className='input input-bordered input-primary w-full bg-gray-100 border-white' type="pais" name="pais" id="mensaje" placeholder="País *" />
                            </div>
                            <h4 className="py-6 text-lg">¿Qué podemos ayudarte? *</h4>
                            <div className="text-gray-500 font-medium form-control">
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">Me gustaría usar Design Sprints para ayudarme a crear o mejorar un producto tecnológico (remoto o en persona).</span>
                                </label>
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">La formación presencial en creatividad y sprints de diseño es algo que me gustaría hacer por mi equipo.</span>
                                </label>
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">Me gustaría usar Internet para capacitar a mi equipo sobre innovación y sprints de diseño.</span>
                                </label>
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">Quisiera obtener servicios de marketing y consultoría estratégica</span>
                                </label>
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">Me gustaría consultoría en servicios de comercio electrónico, para su creación, implementación o crecimiento</span>
                                </label>
                                <label className="pb-2 cursor-pointer flex justify-start items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                    <span className="px-3">Soy un emprendedor con una idea genial y necesito un equipo que me ayude a hacerla realidad con un Sprint de estrategia, me gustaría recibir ayuda con las prioridades de la estrategia.</span>
                                </label>
                            </div>
                            <hr className="mt-4 mb-2"/>
                            <h5 className="text-gray-400 text-sm font-light mb-8">Tiene la opción de darse de baja de estos correos electrónicos en cualquier momento. Consulte nuestra Política de privacidad para obtener más detalles sobre cómo cancelar la suscripción, nuestras políticas de privacidad y cómo nos comprometemos a preservar y mantener su privacidad.</h5>
                            <button className='btn btn-primary' type="submit"><p>Enviar</p></button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
import { Link } from "react-router-dom";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function aboutUs() {
    return (
        <div>
            <Navbar />
            <div className='text-base-200 py-32 bg-cover bg-[url("http://lab9.co/wp-content/uploads/2021/03/Smarter-service.png")]'>
                <div className='text-black font-comfortaa fond-bold px-7 pb-16 lg:px-28'>
                    <h4 className='text-blue-700 text-xl mt-20'>Nosotros</h4>
                    <h1 className="text-5xl mt-2 mb-8">Apasionados por la Innovación.</h1>
                    <h1 className="text-blue-700 text-3xl mb-16">Somos una agencia digital apasionada por la innovación, la usabilidad y un diseño hermoso.</h1>
                    <p className=" text-2xl font-light">Somos una agencia formada por un equipo excepcional de profesionales que quieren cambiar el mundo utilizando la tecnología y ofrecer soluciones de calidad, asequibles y a tiempo.</p>
                </div>
                <section className='w-full bg-cover bg-fixed bg-[url("http://lab9.co/wp-content/uploads/2021/03/about-us-image.png")]' style={{ height: "500px" }}></section>
                <div className="font-comfortaa font-light pt-20 pb-14 px-32 text-2xl">
                    <p>Con décadas de experiencia entregando aplicaciones amigables al usuario a exitosas compañías, logramos crear un tipo de agencia con la que nosotros mismos siempre quisimos trabajar, un nuevo tipo de agencia: una que se alinee completamente con cada cliente y, más importante aún, acelere sus negocios!</p>
                    <h1 className="text-blue-700 py-10">Tú éxito es nuestro éxito.</h1>
                    <p>En este mundo acelerado y en constante cambio, las empresas deben lanzar productos o servicios rápidamente, aprender de los comentarios de los consumidores e iterar para llegar al objetivo deseado.
                        Nos enorgullece incorporar y colaborar con tu equipo para producir resultados sobresalientes, utilizando una estrategia ágil que maximiza los recursos disponibles, como equipos, tiempo y presupuesto.</p>
                    <p className="py-10">Para eso vivimos. Esa es nuestra pasión.</p>
                    <h1 className="text-blue-700 text-center text-3xl font-bold pt-32 pb-10">Nuestros valores</h1>
                    <div className='grid gap-x-8 gap-y-28 px-4' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                        <div>
                            <h3>La tecnología es un facilitador.</h3>
                            <p className="font-chivo text-lg">Creemos que las grandes experiencias son posibles gracias a la tecnología. Nos gusta y la usamos, pero hemos evitado enamorarnos de ella. Porque evaluamos el caso específico para decidir la mejor solución  tecnológica para la tarea y cada cliente.</p>
                        </div>
                        <div>
                            <h3>Opiniones fuertes.</h3>
                            <p className="font-chivo text-lg">Tenemos mucho conocimiento (¡y opiniones!) sobre la construcción de productos, las estrategias de MKT, el diseño, el branding y mucho más. Te recomendamos lo mejor para la construcción de tu negocio, eso sí, siendo muy flexibles para trabajar juntos  buscando lo mejor.</p>
                        </div>
                        <div>
                            <h3>La felicidad la determinan los clientes.</h3>
                            <p className="font-chivo text-lg">No estaremos satisfechos hasta que nuestro cliente y sus clientes lo estén. Aspiramos a satisfacer a todos nuestros clientes, y seguimos trabajando hasta que tengamos la confianza de que los usuarios finales, también están felices con lo que ofrecemos.</p>
                        </div>
                        <div>
                            <h3>Confiable y honesto.</h3>
                            <p className="font-chivo text-lg">Estas son las características que valoramos en los demás y nos esforzamos por lograr en nosotros mismos. Queremos estos valores en cada miembro de nuestro equipo, y trabajamos para proporcionarle estos valores a nuestros clientes todos los días.</p>
                        </div>
                    </div>
                    <h1 className="text-blue-600 text-center text-4xl font-semibold pt-32 pb-10">¡Trabajamos de manera más inteligente para que puedas obtener los mejores resultados!</h1>
                    <div className='grid gap-5 text-center font-medium my-8' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
                        <div>
                            <h3 className="text-3xl">35+</h3>
                            <h4 className="font-chivo text-lg pt-3">Clientes globales</h4>
                        </div>
                        <div>
                            <h3 className="text-3xl">100+</h3>
                            <h4 className="font-chivo text-lg pt-3">Proyectos completados</h4>
                        </div>
                        <div>
                            <h3 className="text-3xl">100k+</h3>
                            <h4 className="font-chivo text-lg pt-3">Usuarios felices</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-black font-comfortaa font-bold text-center text-2xl px-28 bg-cover bg-[url("http://lab9.co/wp-content/uploads/2021/02/back-back.png")]'>
                <h4 className='text-blue-700 text-xl pt-28'>Nuestro equipo</h4>
                <p className='font-light my-16'>Nuestro equipo de personas con experiencia en productos lo ayudará a crear el producto adecuado para sus clientes.</p>
                <div className="bg-white bg-opacity-20 p-8 rounded-2xl flex w-full flex-col-reverse lg:flex-row items-stretch justify-center shadow-lg">
                    <div className="flex p-5 flex-col items-start lg:w-3/4">
                        <FaQuoteLeft className="w-10 h-10 inline-flex" />
                        <p className="text-lg text-left mx-12">En Lab9, creamos soluciones digitales para las empresas más innovadoras del mundo. Podemos ayudarle a crear un nuevo producto desde cero, mejorar un producto existente o inspirar a su equipo a ser más innovador.</p>
                        <FaQuoteRight className="w-10 h-10 ml-auto mr-2 -mt-6 inline-flex" />
                    </div>
                    <div className="lg:w-1/4 font-comfortaa font-bold mt-2 mb-3 flex flex-col text-base items-center justify-center">
                        <img className="w-24 p-1" src="http://lab9.co/wp-content/uploads/2021/06/Alejandro.png" alt="Alejandro Jatib" />
                        <h1 className="text-blue-700 text-xl">Alejandro Jatib</h1>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className="text-5xl text-center mt-24 ">
                    <h1 className="">¿Tienes algún proyecto en mente?</h1>
                    <h1 className="text-blue-700 mt-2 mb-12">¡Vamos a trabajar juntos!</h1>
                    <Link className="shadow-2xl" to='/contact'>
                        <button className="btn btn-primary rounded-xl w-48 from-purple-500 bg-gradient-to-tl">Contáctanos&nbsp;<FaArrowRight /></button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default aboutUs;
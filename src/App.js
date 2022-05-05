import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import fondo from './images/fondo.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import tarjetasInicio from './js/tarjetasInicio';
import CardInicio from './components/CardInicio';
import { Field, Form } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

function App() {
  return (
    <div className='bg-white text-black'>
      <section className='text-white bg-cover h-screen' style={{ backgroundImage: `url(${fondo})` }}>
        <Navbar principal='true' />
        <div className='top-1/3 xl:left-28 absolute px-10 max-w-3xl font-comfortaa font-bold'>
          <h1 className='pb-10 text-5xl'>Agencia Digital con Mente Innovadora.<br /></h1>
          <h1 className='pb-10 text-3xl'>¡Aterrizamos tus ideas al mundo real!</h1>
          <Link to='/about'>
            <button className="btn btn-primary rounded-xl w-40 from-purple-500 bg-gradient-to-tl">Ver más &nbsp;<FaArrowRight /></button>
          </Link>
        </div>
      </section>
      <div className='text-center mt-40  text-blue-700 font-comfortaa font-medium'>
        <h4 className='text-xl'>Nosotros</h4>
        <h2 className='text-3xl mt-10 px-16'>Somos un equipo diferente. Profesionales comprometidos con cambiar y mejorar el mundo utilizando la tecnología.</h2>
        <p className='text-black font-chivo mt-10 mx-40 mb-48 text-left font-light'>Te ofrecemos soluciones de calidad de acuerdo a tu presupuesto, con la rapidez, eficacia y confianza que nos caracteriza.
          Tenemos la visión de transformación y crecimiento para empresas de distintos tamaños, en diferentes países de todo el mundo.</p>
        <h4 className='text-xl mb-16'>Trabajos</h4>
        <div className="card lg:card-side justify-center lg:justify-between items-stretch flex-wrap flex mb-20 text-white bg-blue-700 mx-5 lg:mx-32  text-left shadow-xl">
          <div className="lg:card-body w-5/6 pt-7 pl-7 lg:w-1/3">
            <h1 className="card-title pt-3 font-comfortaa font-bold text-6xl">Ximaro</h1>
            <p className='mt-2'>Empresa de venta minorista y mayorista de insumos electrónicos y todo tipo de accesorios.</p>
            <div className="card-actions justify-start my-7 lg:mt-20">
              <button className="btn btn-sm btn-primary w-1/3 text-blue-700 bg-white rounded-2xl">Ver caso</button>
            </div>
          </div>
          <figure className='p-7' style={{ flex: '0 0 480px' }}><img src={require("./images/home/06.jpg")} className="rounded-2xl" alt="Movie" /></figure>
        </div>
        <div className='justify-center items-stretch flex-wrap flex gap-4 px-5'>
          <div className="card w-auto shadow-xl" style={{ flex: '0 0 480px' }}>
            <figure className='max-h-64 overflow-hidden'><img src="https://lab9.co/wp-content/uploads/2022/03/imagen-proyecto-v2.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title py-5 text-blue-700 font-comfortaa font-bold">Sonet</h2>
              <p className='text-left text-base-200 font-chivo font-light text-lg'>Sonet es una comunidad de profesionales dedicados al desarrollo de asentamientos humanos en otros mundos, especialmente en La Luna y Marte.</p>
              <div className="card-actions py-6 justify-start">
                <button className="btn btn-sm btn-outline btn-primary rounded-xl">Ver caso</button>
              </div>
            </div>
          </div>
          <div className="card w-auto shadow-xl" style={{ flex: '0 0 480px' }}>
            <figure className='max-h-64 overflow-hidden'><img src="https://lab9.co/wp-content/uploads/2022/03/Portadas-1024x576.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title py-5 text-blue-700 font-comfortaa font-bold">Petersburg</h2>
              <p className='text-left text-base-200 font-chivo font-light text-lg'>La tienda de hamburguesas que llega a revolucionar el concepto de las hamburgueserías.</p>
              <div className="card-actions py-6 justify-start">
                <button className="btn btn-sm btn-outline btn-primary rounded-xl">Ver caso</button>
              </div>
            </div>
          </div>
        </div>
        <Link to='/jobs'>
          <button className="btn btn-primary rounded-xl mt-32 from-purple-500 bg-gradient-to-tl">Ver todos los trabajos</button>
        </Link>
        <div className='font-comfortaa font-bold ' style={{ backgroundImage: `url("http://lab9.co/wp-content/uploads/2021/02/Eclipse.png")` }}>
          <h4 className='text-xl mt-40'>Que hacemos nosotros?</h4>
          <div className='gap-4 ml-3 mt-8 justify-center items-stretch flex-wrap flex' >
            <CardInicio tarjetasInicio={tarjetasInicio} />
          </div>
          <h4 className='text-xl mt-36'>¿Qué es un Design Sprint?</h4>
          <p className='font-light text-black p-8 text-left'>Aplicamos un método Design Thinking que se utiliza para resolver problemas complejos mediante la creación conjunta y rápida de prototipos de la mano con las pruebas cualitativas con usuarios específicos.</p>
          <div className='w-full flex flex-row flex-nowrap items-start mb-24 px-5'>
            <div className='text-black hover:text-white bg-white hover:bg-violet-600 rounded-3xl opacity-80 pt-24 h-96 w-1/5'>
              <h3 className=' mb-5'>Día 1</h3>
              <img src="https://lab9.co/wp-content/uploads/2021/02/eclip.png" alt="" />
              <h2 className='mt-5'>Mapa</h2>
              <p className='text-white mt-5 mb-7 px-5 font-chivo font-bold'>Crea un mapa y elige un objetivo</p>
            </div>
            <div className='text-black hover:text-white bg-white hover:bg-violet-600 rounded-3xl opacity-80 pt-24 h-96 w-1/5'>
              <h3 className=' mb-5'>Día 2</h3>
              <img src="https://lab9.co/wp-content/uploads/2021/02/eclip.png" alt="" />
              <h2 className='mt-5'>Boceto</h2>
              <p className='text-white mt-5 mb-7 px-5 font-chivo font-bold'>Analizar, investigar y generar ideas para posibles soluciones.</p>
            </div>
            <div className='text-black hover:text-white bg-white hover:bg-violet-600 rounded-3xl opacity-80 pt-24 h-96 w-1/5'>
              <h3 className=' mb-5'>Día 3</h3>
              <img src="https://lab9.co/wp-content/uploads/2021/02/eclip.png" alt="" />
              <h2 className='mt-5'>Decidir</h2>
              <p className='text-white mt-5 mb-7 px-5 font-chivo font-bold'>Seleccione las mejores soluciones para seguir adelante.</p>
            </div>
            <div className='text-black hover:text-white bg-white hover:bg-violet-600 rounded-3xl opacity-80 pt-24 h-96 w-1/5'>
              <h3 className=' mb-5'>Día 4</h3>
              <img src="https://lab9.co/wp-content/uploads/2021/02/eclip.png" alt="" />
              <h2 className='mt-5'>Prototipo</h2>
              <p className='text-white mt-5 mb-7 px-5 font-chivo font-bold'>Construiremos un prototipo de nuestro nuevo producto / servicio centrado en la usabilidad.</p>
            </div>
            <div className='text-black hover:text-white bg-white hover:bg-violet-600 rounded-3xl opacity-80 pt-24 h-96 w-1/5'>
              <h3 className=' mb-5'>Día 5</h3>
              <img src="https://lab9.co/wp-content/uploads/2021/02/eclip.png" alt="" />
              <h2 className='mt-5'>Prueba</h2>
              <p className='text-white mt-5 mb-7 px-5 font-chivo font-bold'>Finalmente lo probaremos con sus clientes reales.</p>
            </div>
          </div>
        </div>
        <div className='font-comfortaa font-bold text-xl bg-cover h-screen bg-[url("https://lab9.co/wp-content/uploads/2022/02/pexels-startup-stock-photos-7096-scaled.jpg")]'>
          <div className='bg-purple-900 bg-cover h-screen bg-opacity-80'>
            <h4 className='text-white mb-14 pt-8'>Testimonios</h4>
            <div className='justify-center items-center gap-y-11 flex-wrap flex'>
              <button className='bg-white btn hover:bg-white font-mono text-base font-light text-base-200 rounded-none border-0'>SABRINA GANS @SHARYCO</button>
              <div className='border-2 p-5 w-fit ml-20'>
                <iframe id="player" type="text/html" width="640" height="360"
                  src="http://www.youtube.com/embed/UhCBuiO9kN4?enablejsapi=1&" />
              </div>
            </div>
          </div>
        </div>
        <h4 className='text-xl mt-36'>Noticias</h4>
        <Link className=' right-0' to='/news'>
          <button className="btn btn-ghost rounded-xl mt-32 text-purple-500">Ver más&nbsp;<FaArrowRight /></button>
        </Link>
        <div className='font-comfortaa font-bold text-center text-lg text-base-200 mt-24'>
          <h1 className='text-6xl p-5'>¿Tienes algún proyecto en mente?</h1>
          <h1 className='text-6xl p-1 text-blue-700'>¡Vamos a trabajar juntos!</h1>
          <h4 className='text-blue-700 text-xl mt-16 mb-10'>¿Eres emprendedor, tienes una startup o empresa que busca innovar?</h4>
          <h4 className='font-chivo font-light'>Te ayudamos a transformar tus ideas en soluciones de calidad.</h4>
          <h4 className='font-chivo font-light'>Con el Design Sprint, o con nuevas estrategias y tecnologías, logramos impulsarte con seguridad en tus propias iniciativas</h4>
          <h4 className='text-blue-700 text-xl mt-16 mb-10'>¿Lideras un equipo?</h4>
          <h4 className='font-chivo font-light px-5'>Los acompañamos a adoptar tecnologías para simplificar, resolver desafíos y realizar el cambio y avance que estás buscando, de la manera más rápida y efectiva. </h4>
        </div>
      </div>
      <div className='lg:flex px-10 lg:px-28 justify-center mt-20 gap-12'>
        <div className='h-screen lg:w-1/2 rounded-3xl text-black bg-white shadow-xl'>
          <Form
            onSubmit={onSubmit}
            render={() => (
              <form className='px-10 pb-10' onSubmit={onSubmit}>
                <div>
                  <label className='block pt-6'>Nombre<span>*</span></label>
                  <Field
                    className='input input-bordered input-primary w-full bg-gray-100 border-white'
                    name='name'
                    component='input'
                    type='text'
                    placeholder='Nombre'
                  />
                </div>
                <div>
                  <label className='block pt-6'>Email<span>*</span></label>
                  <Field
                    className='input input-bordered input-primary w-full bg-gray-100 border-white'
                    name='email'
                    component='input'
                    type='email'
                    placeholder='Correo Electrónico'
                  />
                </div>
                <div>
                  <label className='block pt-6'>Asunto<span>*</span></label>
                  <Field
                    className='input input-bordered input-primary w-full bg-gray-100 border-white'
                    name='issue'
                    component='input'
                    type='text'
                    placeholder='Asunto'
                  />
                </div>
                <div>
                  <label className='block pt-6'>Mensaje<span>*</span></label>
                  <Field
                    className='input input-bordered input-primary w-full bg-gray-100 border-white'
                    name='message'
                    component='input'
                    type='text'
                    placeholder='Deja aquí tu mensaje...'
                  />
                </div>
                <p className="pt-4 pb-10 text-sm">
                  <span> * </span>los campos son obligatorios.
                </p>
                <button className='btn btn-primary' type="submit" name="enviar" id="enviar"><p>Enviar</p></button>
              </form>
            )}
          />
        </div>
        <div className='lg:w-1/2 text-lg text-gray-600 font-chivo'>
          <p className='py-2 pr-28'>Llame a este número para obtener asistencia inmediata</p>
          <p className='font-mono mb-36'><a href='tel:+543815512810'>+54 381 5512810</a></p>
          <p className='text-blue-700 font-comfortaa pt-8'>¡Trabajo más inteligente, mejores resultados!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
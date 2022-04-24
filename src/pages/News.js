import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tarjetas from '../js/tarjetas';

const News = () => {
    return (
        <div className="" >
            <Navbar fondo="bg-blue-700" />
            <div className="my-32 m-auto relative shadow-2xl hero rounded-3xl w-9/12 h-96 bg-[url('https://lab9.co/wp-content/uploads/2022/03/pexels-liza-summer-6347919-scaled.jpg')]">
                <div className="hero-overlay rounded-3xl bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content absolute bottom-auto left-0">
                    <div className="max-w-md text-white text-left">
                        <h1 className="mb-5 text-3xl font-bold">¿Qué hace un Content Manager?</h1>
                        <p className="mb-5 text-justify">Director o administrador de contenido es el que supervisa el contenido presentado en sitios web y blogs, y también puede ser responsable de crear, editar, publicar, actualizar y, en ocasiones, limpiar contenido obsoleto. Algunos administradores de contenido se enfocan estrictamente en el contenido, mientras que otros solo se enfocan en el lado de la administración. […]</p>
                        <button className="btn btn-sm btn-primary">Leer Artículo</button>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-4xl text-center text-black pb-16'>No te pierdas ningun post</h1>
                <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <Card tarjetas={tarjetas} />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default News;
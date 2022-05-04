import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Jobs() {
    return (
        <div>
            <Navbar />
            <div className='text-center pt-40 text-blue-700 font-comfortaa font-medium bg-cover bg-[url("https://lab9.co/wp-content/uploads/2021/03/Smarter-service.png")]'>
                <h4 className='text-xl mb-16'>Trabajos</h4>
                <div className="card lg:card-side justify-center lg:justify-between items-stretch flex-wrap flex mb-20 text-white bg-blue-700 mx-5 lg:mx-32  text-left shadow-xl">
                    <div className="lg:card-body w-5/6 pt-7 pl-7 lg:w-1/3">
                        <h1 className="card-title pt-3 font-comfortaa font-bold text-6xl">Ximaro</h1>
                        <p className='mt-2'>Empresa de venta minorista y mayorista de insumos electrónicos y todo tipo de accesorios.</p>
                        <div className="card-actions justify-start my-7 lg:mt-20">
                            <button className="btn btn-sm btn-primary w-1/3 text-blue-700 bg-white rounded-2xl">Ver caso</button>
                        </div>
                    </div>
                    <figure className='p-7' style={{  flex: '0 0 480px' }}><img src={require("../images/home/06.jpg")} className="rounded-2xl" alt="Movie" /></figure>
                </div>
                <div className='justify-center items-stretch flex-wrap flex gap-6 px-5'>
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
                    <div className="card w-auto shadow-xl" style={{ flex: '0 0 480px' }}>
                        <figure className='max-h-64 overflow-hidden'><img src="https://lab9.co/wp-content/uploads/2022/03/Portada-1-1024x576.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title py-5 text-blue-700 font-comfortaa font-bold">Coletti</h2>
                            <p className='text-left text-base-200 font-chivo font-light text-lg'>Empresa de servicios profesionales integrados, especializados en el sector inmobiliario con más de 80 años de trayectoria</p>
                            <div className="card-actions py-6 justify-start">
                                <button className="btn btn-sm btn-outline btn-primary rounded-xl">Ver caso</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-auto shadow-xl" style={{ flex: '0 0 480px' }}>
                        <figure className='max-h-64 overflow-hidden'><img src="https://lab9.co/wp-content/uploads/2022/03/Foto-proyecto-1024x1024.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title py-5 text-blue-700 font-comfortaa font-bold">Sharyco</h2>
                            <p className='text-left text-base-200 font-chivo font-light text-lg'>Aplicación para empresas que premia a los empleados por realizar acciones sostenibles y solidarias. Impulsa a los usuarios a alcanzar los ODS (Objetivos de Desarrollo Sostenible).</p>
                            <div className="card-actions py-6 justify-start">
                                <button className="btn btn-sm btn-outline btn-primary rounded-xl">Ver caso</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Jobs;
import { FaArrowRight } from 'react-icons/fa';
import '../styles/card.css';

const CardInicio = ({tarjetasInicio}) => {
    let display
    if (tarjetasInicio) {
        display = tarjetasInicio.map((x) => {
            let { titulo, descripcion, imagen } = x;
            return (
                <div id='tarjeta' className="relative card w-72 text-neutral-content text-transparent font-extrabold hover:from-violet-300 hover:to-violet-500 hover:bg-gradient-to-b hover:text-white" style={{flex: '0 0 300px'}}>
                    <img className="absolute p-6" src={require(`../images/home/${imagen}`)} alt={titulo} />
                    <div className="card-body items-center text-left text-sm font-comfortaa" >
                        <h2 className="card-title text-base">{titulo}</h2>
                        <p>{descripcion}</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-ghost"><FaArrowRight size={25}/></button>
                        </div>
                    </div>
                </div>
            );
        });
    }
    else { display = "No se encuentran productos"; }
    return (display);
}
export default CardInicio;
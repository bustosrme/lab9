// rafc o sfc
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <div className="bg-blue-700 py-36 text-black text-center font-mono">
            <h1 className="text-8xl">ERROR 404</h1>
            <h3 className="text-4xl p-16 ">No se ha encontrado la pagina solicitada</h3>
            <Link to="/">
                <button className="btn btn-secundary text-lg">Volver al inicio</button>
            </Link>
        </div>
    );
}

export default Error404;
const Card = ({ tarjetas }) => {
    let display
    if (tarjetas) {
        display = tarjetas.map((x) => {
            let { titulo, imagen } = x;
            return (
                <div className="card card-compact w-80 bg-base-100 shadow-2xl">
                    <figure><img src={`${imagen}`} /></figure>
                    <div className="card-body bg-white text-black">
                        <h2 className="card-title pb-5">{titulo}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Leer artículo</button>
                        </div>
                    </div>
                </div>
            );
        });
    }
    else { display = "No se encuentran productos"; }
    return (display);
}

export default Card;
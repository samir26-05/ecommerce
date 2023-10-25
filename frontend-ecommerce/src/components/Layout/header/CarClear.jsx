import cesta from "../../../assets/Img/cesta.png";
import { Car } from "./CarStyled";

const CarClear = () => {
    return (
        <Car style={{width:"100%"}}>
            <div className="Vacio">
                <img src={cesta} alt="Img Cesta" className="VacioImg" />
                <p className="Tiltle">El carrito está vacío</p>
                <p className="Text">
                    Aún no tienes compras en nuestra tienda
                    <br />
                    <span>
                        Pero puedes ver el catalogo ¡y te lo llevamos a casa!
                    </span>
                </p>
                <br />
            </div>
        </Car>
    );
};

export default CarClear;

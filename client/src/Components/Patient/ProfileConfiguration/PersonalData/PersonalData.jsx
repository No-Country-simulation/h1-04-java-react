/* eslint-disable react/prop-types */
import tilde from "../../../../Assets/Imgs/tilde.png"
import "./personalData.css"

const PersonalData = ({user}) => {
    return (
        <section>
            <div>
                <p>Identidad Validada</p>
                <img src={tilde} alt="Tilde" />
            </div>
            <h3>Nombre y Apellido</h3>
            <p>{user.name}</p>
            
            <h3>Nombre Elegido</h3>
            <p>{user.name}</p>
            
            <h3>Documento de Identidad</h3>
            <p>{user.name}</p>
            
            <h3>Correo Electrónico</h3>
            <p>{user.name}</p>
            
            <h3>Número de Teléfono</h3>
            <p>{user.name}</p>
            
            <h3>Domicilio</h3>
            <p>{user.name}</p>
            
            <h3>Ciudad</h3>
            <p>{user.name}</p>
            
            <h3>Pais</h3>
            <p>{user.name}</p>
        </section>
    )
}

export default PersonalData
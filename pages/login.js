import React from 'react';

import '../styles/login.css';

export const login = () => {
    return (
        <div>

            <div className="container">
                    
                <label>Correo Electrónico</label>
                <input type="text" name="uname" placeholder="Ingrese su correo electrónico" required/>

                <label>Contraseña</label>
                <input type="password" name="psw" placeholder="Ingrese su contraseña" required/>

                <button type="submit">INICIAR SESIÓN</button>

                <label>
                    <input type="checkbox"  name="remember" /> Recuérdame 
                </label>

            </div>


        </div>

    )
}

export default login
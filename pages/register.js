import React, { useEffect, useState } from 'react';

import  { Button, Input, Checkbox, notification } from 'antd';
//import '../styles/login.css';

export const register = () => {

    const [persona, setPersona] = useState({ name: "", lastname: "", age: "", email: "" })

    //destructuramos el useState persona
    const { name, lastname, age, email } = persona;

    const manageForm = (event) => {

        const { name, value } = event.target;

        setPersona(add => ({
            ...add,
            [name]: value
        }))
    }


     useEffect(() => {

        console.log(persona)

    }, [persona]) 

    // Notificacion ANT DESIGN
    const openNotification = () => {
        notification.open({
          message: 'REGISTRO SATISFACTORIO!',
          description:
            `Nombre: ${name}, Apellido: ${lastname}, Edad: ${age}, Correo: ${email} `,
          className: 'custom-class',
          style: {
            width: 600,
          },
        });
      };


    return (
        
        <form >

            <div className="container">
                    
                <label>Nombre</label>
                <Input type="text" value={name} name="name" onChange={ manageForm } required/>
                
                <label>Apellido</label>
                <Input type="text" value={lastname} name="lastname" onChange={ manageForm } required  />

                <label>Edad</label>
                <Input type="number" value={age} name="age" onChange={ manageForm } required  />

                <label>Correo Electrónico</label>
                <Input type="text" value={email} name="email" onChange={ manageForm } required  />

                <Button type="primary" onClick= { openNotification }>REGISTRARSE</Button>

            </div>

        </form>

    )
}

export default register


import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./EditUser.scss";


const EditUser = () => {
     //mensaje de confirmación de la solicitud
    function message () { 
        alert('Usuario editado exitosatamente !')
        window.location.assign("./users-assigned")
      };
  return (
    <div className='editUsersContainer'>
        <div className='topRow'>
        <label className='labelContainer'>
            <p className='title'>Cuestionario asignado:</p>
            <input type="text" name="id"/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Nombre: </p>
            <input type="text" name="name"/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Apellido: </p>
            <input type="text" name="lastname"/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Email: </p>
            <input type="text" name="email"/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Contacto: </p>
            <input type="text" name="contact" />
        </label>
        </div>

        <div className='buttonWrapper'>
         <Link to="/users" className="buttonContainer">
             <p className= "title">{"Cancelar"}</p>
         </Link>
         <button className="buttonContainer"  type="submit" onClick={message}>
             <p className= "title">{"Guardar"}</p>
         </button>
        </div>
    </div>
  )
}
export default EditUser;


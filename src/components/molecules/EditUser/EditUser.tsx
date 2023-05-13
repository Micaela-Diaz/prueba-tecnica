import React,{useState} from 'react';
import { Link } from "react-router-dom";
import "./EditUser.scss";


interface EditUserProps {
    id_questionnaire_assigned: string,
    name: string,
    lastName: string,
    email: string,
    telephoneNumber: number

}

const EditUser = ({
    id_questionnaire_assigned,
    name,
    lastName,
    email,
    telephoneNumber
}
  : EditUserProps) => {
    
  return (
    <div className='editUsersContainer'>
        <div className='topRow'>
        <label className='labelContainer'>
            <p className='title'>Cuestionario asignado:</p>
            <input type="text" name="id" placeholder={id_questionnaire_assigned}/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Nombre: </p>
            <input type="text" name="name" placeholder={name}/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Apellido: </p>
            <input type="text" name="lastname" placeholder={lastName}/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Email: </p>
            <input type="text" name="email" placeholder={email}/>
        </label>
        <label className='labelContainer'>
            <p className='title'>Contacto: </p>
            <input type="text" name="contact" placeholder={telephoneNumber.toString()}/>
        </label>
        </div>
        <div className='buttonWrapper'>
         <Link to="/users" className="buttonContainer">
             <p className= "title">{"Cancelar"}</p>
         </Link>
         <button className="buttonContainer">
             <p className= "title">{"Guardar"}</p>
         </button>
        </div>
    </div>
  )
}
export default EditUser;
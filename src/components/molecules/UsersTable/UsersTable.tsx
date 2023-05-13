import React from 'react';
import { Link } from "react-router-dom";
import "./UsersTable.scss";

interface UsersTableProps {
    id_questionnaire_assigned: string,
    name: string,
    lastName: string,
    email: string,
    telephoneNumber: number

}

const UsersTable = ({
    id_questionnaire_assigned,
    name,
    lastName,
    email,
    telephoneNumber
}
: UsersTableProps) => {

  return (
    <div className='usersContainer'>
       <div className='topRow'>
       <p className='titleRow'>Datos</p>
       <div className='infoWrapper'>
          <p className='title'>Cuestionario asignado:</p>
          <p className='description'>{id_questionnaire_assigned}</p>
        </div>
        <div className='infoWrapper'>
          <p className='title'>Nombre:</p>
          <p className='description'>{name}</p>
        </div>
        <div className='infoWrapper'>
          <p className='title'>Apellido:</p>
          <p className='description'>{lastName}</p>
        </div>
        <div className='infoWrapper'>
          <p className='title'>Email:</p>
          <p className='description'>{email}</p>
        </div>
        <div className='infoWrapper'>
          <p className='title'>Contacto:</p>
          <p className='description'>{telephoneNumber}</p>
        </div>
       </div>
        <div className='bottomRow'>
        <p className='titleRow'>Opciones</p>
        <div className='buttonWrapper'>
          <button className="buttonContainer">
             <p className= "title">{"Editar"}</p>
         </button>
         <button className="buttonContainer" >
             <p className= "title">{"Eliminar"}</p>
         </button>
        </div>
        </div>
    </div>
  )
}
export default UsersTable;
import React from 'react';
import { Link } from "react-router-dom";
import "./UsersTable.scss";

interface UsersTableProps {
    id_questionnaire_assigned: string,
    name: string,
    lastName: string,
    email: string,
    telephoneNumber: number,
    id?: string;

}

const UsersTable = ({
    id_questionnaire_assigned,
    name,
    lastName,
    email,
    telephoneNumber,
    id
}
: UsersTableProps) => {

  const deleteUser = ((id:any) => {
      if(window.confirm("Desea eliminar este usuario ?")){
          fetch('usersData.json'+id,
          {method: "DELETE"}).then(() => {
            window.location.reload()
          }).catch((err) => {
            console.log(err);
          })
      }
  })


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
          <Link to="/edit-user" className="buttonContainer">
             <p className= "title">{"Editar"}</p>
         </Link>
         <button className="buttonContainer" onClick={() =>{deleteUser(id)} }>
             <p className= "title">{"Eliminar"}</p>
         </button>
        </div>
        </div>
    </div>
  )
}
export default UsersTable;
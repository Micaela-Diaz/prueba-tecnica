import React from 'react';
import { Link } from "react-router-dom";
import "./UsersUnassigned.scss";

interface UsersUnassignedProps {
    name: string,
    lastName: string,
    email: string,
    telephoneNumber: number,
    id?: string;

}

export const UsersUnassigned = ({
    name,
    lastName,
    email,
    telephoneNumber,
    id
}
: UsersUnassignedProps) => {

  return (
    <form className='usersUnassignedContainer'>
       <p className='titleRow'>Datos</p>
       <label className='infoWrapper'>
          <p className='title'>Nombre:</p>
          <p className='description'>{name}</p>
        </label>
        <label className='infoWrapper'>
          <p className='title'>Apellido:</p>
          <p className='description'>{lastName}</p>
        </label>
        <label className='infoWrapper'>
          <p className='title'>Email:</p>
          <p className='description'>{email}</p>
        </label>
        <label className='infoWrapper'>
          <p className='title'>Contacto:</p>
          <p className='description'>{telephoneNumber}</p>
        </label>
        <label className='selectWrapper'>
          <p>Seleccionar</p>
          <input type="checkbox"></input>
        </label>
    </form>
  )
};
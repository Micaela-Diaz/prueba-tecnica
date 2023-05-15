import React, {useState, useEffect} from "react";
import { UsersUnassigned } from '../../molecules';
import { useParams } from 'react-router-dom';
import "./Users.scss";


const Users = () => {
    const id = 1;
    const [data, setData] = useState([]);
    const [userFiltered, setUserFiltered] = useState([]);
    const fetchJson = () => {
      fetch('usersData.json')
      .then(response => {
        return response.json();
      }).then(data => {
        setData(data);
      }).catch((e: Error) => {
        console.log(e.message);
      });
    }
    useEffect(() => {
      fetchJson()
    },[]);
    
   function message () { 
      alert('Usuarios asignados correctamente !')
      window.location.assign("./questionnaires-assigned")
    };

  return (
    <div className="Users">
      <h1 className="mainTitle">Asignar usuarios</h1>
      {data.map((i:any) => {
          return (
            <p className='description'>
            <UsersUnassigned
            name={i.name} 
            lastName={i.lastName} 
            email={i.email} 
            telephoneNumber={i.telephoneNumber}
            id={i.id}/>
            </p>
          );
        })}
      <button type="submit" onClick={message}>Enviar</button>
    </div>
  );
};
export default Users;
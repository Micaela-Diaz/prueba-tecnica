import React, {useState, useEffect} from "react";
import { UsersTable } from '../../molecules';
import { useParams } from 'react-router-dom';
import "./Users.scss";


const Users = () => {
    /* const { id } = useParams(); */
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

/*      useEffect(() => {
      if (data.length > 0) {
        const dataFiltered= data.filter((data:any) => data.id_questionnaire_assigned === id)
        setUserFiltered(dataFiltered)
      }
    },[data]); */

  return (
    <div className="Users">
      <h1 className="mainTitle">Cuestionario Asignado</h1>
      {data.map((i:any) => {
          return (
            <p className='description'>
            <UsersTable 
            id_questionnaire_assigned={i.id_questionnaire_assigned} 
            name={i.name} 
            lastName={i.lastName} 
            email={i.email} 
            telephoneNumber={i.telephoneNumber}
            id={i.id}/>
            </p>
          );
        })}
      
    </div>
  );
};
export default Users;
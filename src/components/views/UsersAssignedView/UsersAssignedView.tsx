import React, {useState, useEffect} from "react";
import { UsersAssigned } from '../../molecules';
import { useParams } from 'react-router-dom';
import "./UsersAssignedView.scss";


const UsersAssignedView = () => {
    /* const { id } = useParams(); */
    const id = 1;
    const [data, setData] = useState([]);
    const [userFiltered, setUserFiltered] = useState([]);
    const fetchJson = () => {
      fetch('usersAssigned1Data.json')
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

   function message () { 
      alert('Usuarios asignados correctamente !')
      window.location.assign("./questionnaires-assigned")
    };

  return (
    <div className="UsersAssignedView">
      <h1 className="mainTitle">Usuarios asignados</h1>
      {data.map((i:any) => {
          return (
            <p className='description'>
            <UsersAssigned
            id_questionnaire_assigned={i.id_questionnaire_assigned}
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
export default UsersAssignedView;
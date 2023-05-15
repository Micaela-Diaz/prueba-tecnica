import React, {useState, useEffect} from "react";
import { UsersAssigned } from '../../molecules';
import "./UsersAssignedView.scss";


const UsersAssignedView = () => {
    const [data, setData] = useState([]);
    const [userFiltered, setUserFiltered] = useState([]);
    const fetchJson = () => {
      fetch('usersAssignedData.json')
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

    useEffect(() => {
        if (data.length > 0) {
          const dataFiltered= data.filter((data:any) => data.id_questionnaire_assigned === 1)
          setUserFiltered(dataFiltered)
        }
      },[data]);

      console.log(userFiltered)

    

  return (
    <div className="UsersAssignedView">
      <h1 className="mainTitle">Usuarios asignados</h1>
      {userFiltered.map((i:any) => {
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
    </div>
  );
};
export default UsersAssignedView;
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Questionnaire.scss";

interface QuestionnaireProps {
  isAssigned: boolean;
}


export const Questionnaire = ({ isAssigned
}: QuestionnaireProps) => {
const [data, setData] = useState([])
const fetchJson = () => {
  fetch('questionnaireTypes.json')
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
},[])

  return (
    <div className='questionnaireContainer'>
          {data.map((item:any, index) => {
          return (
        <div key={index}>
          <div className='infoWrapper' >
          <p className='columnTitle'>Tipo</p>
            <p className='description'>
            {
              isAssigned ? 
              <Link to="/users" className="link">{item.id_questionnaire}</Link>
              : 
              <Link to="/users-assigned" className="link">{item.id_questionnaire}</Link>
            }
            </p>
            </div>
        <div className='infoWrapper'>
          <p className='columnTitle'>Descripcion</p>
            <p className='description'>{item.description}</p>
        </div>
        </div>
      
          );
        })}
    </div>
  )
}
;
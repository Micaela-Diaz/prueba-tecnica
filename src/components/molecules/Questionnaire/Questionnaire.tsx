import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Questionnaire.scss";



export const Questionnaire = ({
}) => {
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
            <Link to="/users" className="link">{item.id_questionnaire}</Link>
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
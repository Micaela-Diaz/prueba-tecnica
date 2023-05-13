import React from 'react';
import { Link } from "react-router-dom";
import "./Questionnaire.scss";

interface QuestionnaireProps {
    id_questionnaire:string,
    description: string

}

const Questionnaire = ({
    id_questionnaire,
    description
}
: QuestionnaireProps) => {

  return (
    <div className='questionnaireContainer'>
        <div className='infoWrapper'>
          <p className='columnTitle'>Tipo</p>
          <p className='description'>
          <Link to="/users" className="link">{id_questionnaire}</Link>
          </p>
          
        </div>
        <div className='infoWrapper'>
          <p className='columnTitle'>Descripcion</p>
          <p className='description'>{description}</p>
        </div>
    </div>
  )
}
export default Questionnaire;
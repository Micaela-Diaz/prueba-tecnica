import React from "react";
import { Questionnaire } from '../../molecules';
import "./QuestionnairesAssignedView.scss";

export const QuestionnairesAssignedView = () => {
  return (
      <div className="QuestionnairesAssignedView">
      <h1 className="mainTitle">Cuestionarios asignados</h1>
      <Questionnaire isAssigned={false}/>
    </div>
  );
};
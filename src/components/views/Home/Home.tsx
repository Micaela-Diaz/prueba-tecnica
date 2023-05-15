import React from "react";
import { Questionnaire } from '../../molecules';
import "./Home.scss";

export const Home = () => {
  return (
      <div className="Home">
      <h1 className="mainTitle">Cuestionarios</h1>
      <Questionnaire isAssigned={true}/>
    </div>
  );
};

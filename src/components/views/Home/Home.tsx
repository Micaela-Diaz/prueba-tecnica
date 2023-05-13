import React from "react";
import { Questionnaire } from '../../molecules';
import "./Home.scss";

const Home = () => {

  return (
    <div className="Home">
      <h1 className="mainTitle">Cuestionarios</h1>
      <Questionnaire id_questionnaire={"1"} description={"Cuestionario 1"}/>
    </div>
  );
};
export default Home;
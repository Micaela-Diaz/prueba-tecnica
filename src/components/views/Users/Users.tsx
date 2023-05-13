import React from "react";
import { UsersTable } from '../../molecules';
import "./Users.scss";

const Users = () => {

  return (
    <div className="Home">
      <h1 className="mainTitle">Cuestionario tipo 1</h1>
      <UsersTable id_questionnaire_assigned={"1"} name={"Matias"} lastName={"Diaz"} email={"lgjgjbekgber"} telephoneNumber={4593932}/>
    </div>
  );
};
export default Users;
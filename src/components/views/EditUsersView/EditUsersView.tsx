import React from "react";
import { EditUser } from '../../molecules';
import "./EditUsersView.scss";

const EditUsersView = () => {

  return (
    <div className="EditUsersView">
      <h1 className="mainTitle">Editar usuario</h1>
      <EditUser id_questionnaire_assigned={"1"} name={"Matias"} lastName={"Diaz"} email={"lgjgjbekgber"} telephoneNumber={4593932} />
    </div>
  );
};
export default EditUsersView;
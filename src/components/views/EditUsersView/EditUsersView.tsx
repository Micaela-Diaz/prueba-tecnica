import React from "react";
import { EditUser } from '../../molecules';
import "./EditUsersView.scss";

const EditUsersView = () => {

  return (
    <div className="EditUsersView">
      <h1 className="mainTitle">Editar usuario</h1>
      <EditUser />
    </div>
  );
};
export default EditUsersView;
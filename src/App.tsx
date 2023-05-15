import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
  Home,
  Users,
  EditUsersView,
  QuestionnairesAssignedView,
  UsersAssignedView
} from "./components/views";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/edit-user' element={<EditUsersView/>}/>
          <Route path='/questionnaires-assigned' element={<QuestionnairesAssignedView/>}/>
          <Route path='/users-assigned' element={<UsersAssignedView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
  Home,
  Users,
  EditUsersView
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

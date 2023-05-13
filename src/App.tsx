import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
  Home,
  Users
} from "./components/views";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

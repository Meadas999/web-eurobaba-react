import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

import Home from "./Pages/Home";

const App = () =>  {
        Crisp.configure("528fe09d-dba5-49bd-9595-3e7ba9ede4a9");
  return (

              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>

  );
};

export default App;

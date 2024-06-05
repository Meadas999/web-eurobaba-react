import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";
import { useAuth0 } from "@auth0/auth0-react";


import Home from "./Pages/Home";
import AuthenticatedAppBar from "./Components/AuthenticatedAppBar";
import GeneralAppBar from "./Components/GeneralAppBar";

const App = () =>  {
        Crisp.configure("528fe09d-dba5-49bd-9595-3e7ba9ede4a9");
    const{ user, isAuthenticated, isLoading } = useAuth0();
    const navbar = isAuthenticated ? <AuthenticatedAppBar/> : <GeneralAppBar/>
  return (
        <div>
            {navbar}
              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>
        </div>
  );
};

export default App;

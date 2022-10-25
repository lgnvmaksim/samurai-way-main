import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div  className={'app-wrapper-content'}>
                <Route path='/dialogs' render={()=><Dialogs/>}/>
                <Route path='/profile' render={()=><Profile/>}/>
                <Route path='/News' render={()=><Profile/>}/>
                <Route path='/Music' render={()=><Profile/>}/>
                <Route path='/Settings' render={()=><Profile/>}/>
            </div>
        </div>
            </BrowserRouter>
    )
}


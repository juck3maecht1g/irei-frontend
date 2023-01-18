import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { LobbyPage } from './lobbyPage/LobbyPage';
import ChooseLabPage from './chooseLabPage/ChooseLabPage';

export default function App (){
    return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route index element={<ChooseLabPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    )
}


ReactDom.render(
    <App /> , document.getElementById("root"));
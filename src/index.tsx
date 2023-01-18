import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LobbyPage from './lobbyPage/LobbyPage';

export default function App (){
    return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route index element={<LobbyPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    )
}


ReactDom.render(
    <App /> , document.getElementById("root"));
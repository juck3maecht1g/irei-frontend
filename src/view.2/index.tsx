import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LobbyPage from './lobbyPage/LobbyPage';

function LobbyPage() {
    
  return (  
      <div>
              hi
      </div>
  );
  
}

export default function App (){
    return (
      <BrowserRouter>
        <Routes >
          <Route index element={<LobbyPage />} />
        </Routes>
      </BrowserRouter>
    )
}


ReactDom.render(
    <App /> , document.getElementById("root"));
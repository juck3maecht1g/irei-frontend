import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseLaboratoryPage from "./choosePages/chooseLaboratoryPage/ChooseLaboratoryPage";
import ControlPage from "./controlPage/ControlPage";

export default function App (){
    return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route index element={<ChooseLaboratoryPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    )
}



const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
//ReactDom.render(
    //<App /> , document.getElementById("root"));
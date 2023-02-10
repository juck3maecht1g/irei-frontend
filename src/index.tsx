import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ControlPage from "./controlPages/ControlPage"
import ChooseDirectoryPage from "./choosePages/chooseDirectoryPage/ChooseDirectoryPage"
import ChooseLaboratoryPage from "./choosePages/chooseLaboratoryPage/ChooseLaboratoryPage"
import ChooseLanguagePage from "./choosePages/chooseLanguagePage/ChooseLanguagePage"
import ChooseRobotPageMultiple from "./choosePages/chooseRobotPage/ChooseRobotPage";
import ChooseVariablePage from "./choosePages/chooseVariablePage/ChooseVariablePage"
import ChooseExperimentRobots from "./choosePages/chooseLaboratoryPage/ChooseExperimentRobots";
import ChooseExperimentRegister from "./choosePages/chooseLaboratoryPage/ChooseExperimentRegister";
import ActionListPage from "./controlPages/ActionPage/ActionListPage";

export default function App (){
    return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route index element={<ChooseDirectoryPage/>} />
          <Route path="/ControlPage" element={<ControlPage/>} />
          <Route path="/ChooseDirectoryPage" element={<ChooseDirectoryPage/>} />
          <Route path="/ChooseLaboratoryPage" element={<ChooseLaboratoryPage/>} />
          <Route path="/ChooseLanguagePage" element={<ChooseLanguagePage/>} />
          <Route path="/ChooseRobotPageMultiple" element={<ChooseRobotPageMultiple/>} />
          <Route path="/ChooseVariablePage" element={<ChooseVariablePage/>} />
          <Route path="/ChooseExperimentRobots" element={<ChooseExperimentRobots/>} />
          <Route path="/ChooseExperimentRegister" element={<ChooseExperimentRegister/>} />
          
          <Route path="/ActionListPage" element={<ActionListPage/>} />
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
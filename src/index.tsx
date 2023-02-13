import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ControlPage from "./controlPages/ControlPage"

import ChooseDirectoryPage from "./choosePages/chooseDirectoryPage/ChooseDirectoryPage"
import ChooseLaboratoryPage from "./choosePages/chooseLaboratoryPage/ChooseLaboratoryPage"
import ChooseExperimentRobots from "./choosePages/chooseLaboratoryPage/ChooseExperimentRobots";
import ChooseExperimentRegister from "./choosePages/chooseLaboratoryPage/ChooseExperimentRegister";

import ActionListPage from "./controlPages/ActionPage/ActionListPage";
import ChooseListPage from "./controlPages/ActionPage/ChooseListPage";
import ActionKindPage from "./controlPages/ActionPage/actionkind/ActionKindPage";

import ChooseVariablePage from "./controlPages/ActionPage/actionkind/ChooseVariablePage";
import ChooseRobotPage from "./controlPages/ActionPage/actionkind/ChooseRobotPage";
import SetTimePage from "./controlPages/ActionPage/actionkind/SetTimePage";

import ChooseLanguagePage from "./choosePages/chooseLanguagePage/ChooseLanguagePage"

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
          <Route path="/ChooseExperimentRobots" element={<ChooseExperimentRobots/>} />
          <Route path="/ChooseExperimentRegister" element={<ChooseExperimentRegister/>} />
          
          <Route path="/ActionListPage" element={<ActionListPage/>} />
          <Route path="/ChooseListPage" element={<ChooseListPage/>} />
          <Route path="/ActionKindPage" element={<ActionKindPage/>} />

          <Route path="/ChooseRobot" element={<ChooseRobotPage/>} />
          <Route path="/ChooseVariablePage" element={<ChooseVariablePage/>} />
          <Route path="/SetTimePage" element={<SetTimePage/>} />
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
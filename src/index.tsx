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

import MappingRobotsPage from "./choosePages/chooseRobotPage/MappingRobots";

import ChooseVariablePage from "./controlPages/ActionPage/actionkind/ChooseVariablePage";
import ChooseRobotPage from "./controlPages/ActionPage/actionkind/ChooseRobotPage";
import SetTimePage from "./controlPages/ActionPage/actionkind/SetTimePage";
import SetCustomPage from "./controlPages/ActionPage/actionkind/SetCustomPage";

import Settings from "./settings/Settings"
import ActionKindPage from "./controlPages/ActionPage/actionkind/ActionKindPage";

export default function App (){

  return (

    <div>
      <BrowserRouter>
        <Routes >
          <Route index element={<ChooseDirectoryPage/>} />
          <Route path="/ControlPage" element={<ControlPage/>} />
          <Route path="/ChooseDirectoryPage" element={<ChooseDirectoryPage/>} />
          <Route path="/ChooseLaboratoryPage" element={<ChooseLaboratoryPage/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/ChooseExperimentRobots" element={<ChooseExperimentRobots/>} />
          <Route path="/ChooseExperimentRegister" element={<ChooseExperimentRegister/>} />

          <Route path="/ActionKindPage" element={<ActionKindPage/>} />
          <Route path="/ActionListPage" element={<ActionListPage/>} />

          <Route path="/ChooseListPage" element={<ChooseListPage/>} />
          <Route path="/MappingRobotsPage" element={<MappingRobotsPage/>} />
          <Route path="/ChooseRobot" element={<ChooseRobotPage/>} />
          <Route path="/ChooseVariablePage" element={<ChooseVariablePage/>} />
          <Route path="/SetTimePage" element={<SetTimePage/>} />
          <Route path="/SetCustomPage" element={<SetCustomPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )

}


const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
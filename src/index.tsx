import React from "react"
import ReactDom from "react-dom"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ControlPage from "./controlPages/ControlPage"
import EditActionListPage from "./controlPages/ActionPage/EditActionListPage"
import ChooseActionListPage from "./choosePages/chooseActionListPage/ChooseActionListPage"
import ChooseDirectoryPage from "./choosePages/chooseDirectoryPage/ChooseDirectoryPage"
import ChooseLaboratoryPage from "./choosePages/chooseLaboratoryPage/ChooseLaboratoryPage"
import ChooseLanguagePage from "./choosePages/chooseLanguagePage/ChooseLanguagePage"
import ChooseNamePage from "./choosePages/chooseNamePage/ChooseNamePage"
import ChooseRobotPageMultiple from "./choosePages/chooseRobotPage/ChooseRobotPageMultiple";
import ChooseVariablePage from "./choosePages/chooseVariablePage/ChooseVariablePage"
import ChooseExperimentRobots from "./choosePages/chooseLaboratoryPage/ChooseExperimentRobots";

export default function App (){
    return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route index element={<ChooseDirectoryPage/>} />
          <Route path="/ControlPage" element={<ControlPage/>} />
          <Route path="/EditActionListPage" element={<EditActionListPage/>} />
          <Route path="/ChooseActionListPage" element={<ChooseActionListPage/>} />
          <Route path="/ChooseDirectoryPage" element={<ChooseDirectoryPage/>} />
          <Route path="/ChooseLaboratoryPage" element={<ChooseLaboratoryPage/>} />
          <Route path="/ChooseLanguagePage" element={<ChooseLanguagePage/>} />
          <Route path="/ChooseNamePage" element={<ChooseNamePage/>} />
          <Route path="/ChooseRobotPageMultiple" element={<ChooseRobotPageMultiple/>} />
          <Route path="/ChooseVariablePage" element={<ChooseVariablePage/>} />
          <Route path="/ChooseExperimentRobots" element={<ChooseExperimentRobots/>} />

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
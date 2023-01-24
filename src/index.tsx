import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ControlPage from "./controlPages/ControlPage"
import EditActionListPage from "./controlPages/ActionPage/EditActionListPage"
import ChooseActionListPage from "./choosePages/chooseActionListPage/ChooseActionListPage"
import ChooseDirectoryPage from "./choosePages/chooseDirectoryPage/ChooseDirectoryPage"
import ChooseLaboratoryPage from "./choosePages/chooseLaboratoryPage/ChooseLaboratoryPage"
import ChooseLanguagePage from "./choosePages/chooseLanguagePage/ChooseLanguagePage"
import ChooseNamePage from "./choosePages/chooseNamePage/ChooseNamePage"
import ChooseRobotPage from "./choosePages/chooseRobotPage/ChooseRobotPage"
import ChooseVariablePage from "./choosePages/chooseVariablePage/ChooseVariablePage"

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
          <Route path="/ChooseRobotPage" element={<ChooseRobotPage/>} />
          <Route path="/ChooseVariablePage" element={<ChooseVariablePage/>} />
          <Route index element={<ChooseDirectoryPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
    )
}


ReactDom.render(
    <App /> , document.getElementById("root"));
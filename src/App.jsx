import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Counter2 } from "./Counter/Counter2";

function App() {
  

  return (
    <>
    <BrowserRouter>
  <Routes>
      <Route path="/counter2" element={<Counter2/>}></Route>
  </Routes>
  </BrowserRouter>
  </>   
  )
}
export default App

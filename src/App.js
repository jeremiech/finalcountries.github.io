import React from "react";
import Header from "./Components/Header";
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Count from "./Components/Count";
import Country from "./Components/Country";
// import Countries from "./Components/Countries";
// import Filter from "./Components/Filter"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Count />}></Route>
        <Route path="/countries/:name" element={<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

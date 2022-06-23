import React from 'react'
// import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Countries from './Components/Countries'
import Header from './Components/Header';
import Filter from './Components/Filter';
// import Country from './Components/Country';

function App() {
  
  return (
    <Router>
      {/* <Route/> */}
      <Header/>
      {/* <Route exact path="/"> */}
        <Filter/>
        <Countries />
      {/* </Route> */}
      {/* <Route path="/grid/:name" children=
      {<Country />}></Route> */}
      
  </Router>
  )
}

export default App;

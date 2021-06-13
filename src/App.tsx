import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FirestationInfo from './Pages/FirestationInfo';


// pages
import Firestations from './Pages/Firestations';
import Home from './Pages/Home';
import MedicalRecords from './Pages/MedicalRecords';
import PersonInfo from './Pages/PersonInfo';
import Persons from './Pages/Persons';

export default function App() {
  return (
     <Router>
       <Switch>
         <Route path="/" exact>
           <Home />
         </Route>
         <Route path="/persons/:id" exact>
           <PersonInfo />
         </Route>
               <Route path="/firestations/:id" exact>
           <FirestationInfo />
         </Route>
         <Route path="/persons">
           <Persons />
         </Route>
         <Route path="/medical-records">
           <MedicalRecords />
         </Route>
         <Route path="/firestations">
           <Firestations />
         </Route>
       </Switch>
   </Router>
  )
}

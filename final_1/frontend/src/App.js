import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './Components/Signin';
import Home from './Components/Home';
import Signup from './Components/Signup';
import UserData from './Components/UserData';
import Update from './Components/Update';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
   return<>
      <Router>
         <Navbar></Navbar>
         <Routes>
         <Route path='/signup' element={<Signup />} />
            <Route element={<ProtectedRoute />}>
               <Route path='/' element={<Home />} />
               <Route path='/userdata' element={<UserData />} />
               <Route path='/update/:id' element={< Update/>} />
            </Route>
               <Route path='/signin' element={<Signin />} />
         </Routes>
      </Router>
      
   </>
}

export default App;
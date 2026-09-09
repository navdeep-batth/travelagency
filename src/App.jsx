
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import App from './App.css'

import Home from './Home'
import About from './About'
import Destination from './Destination'
import Portfolios from './Portfolios'
import Contact from './Contact'
// import Testingpage from './Testingpage'

function App() {
  

  return (
    <>
        <Router basename="/travelagency">
          {/* <div> */}
            <Routes>
              <Route exact path='/' element={<Home/>} ></Route>  
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/destination' element={<Destination/>}></Route>
              <Route exact path='/portfolios' element={<Portfolios/>}></Route>
              <Route exact path='/contact' element={<Contact/>}></Route> 
              {/* <Route exact path='/contact' element={<Contact/>}></Route> */}

            </Routes>
          {/* </div> */}
        </Router> 
    </>
  )
}

export default App

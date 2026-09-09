import React from 'react'
// ध्यान दें: यहाँ BrowserRouter की जगह HashRouter को इम्पोर्ट किया गया है
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Destination from './Destination'
import Portfolios from './Portfolios'
import Contact from './Contact'

function App() {
  return (
    <>
        {/* HashRouter में basename="/travelagency" लिखने की कोई ज़रूरत नहीं होती */}
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />  
              <Route path='/about' element={<About />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/portfolios' element={<Portfolios />} />
              <Route path='/contact' element={<Contact />} /> 
              {/* अगर कोई गलत यूआरएल टाइप करे, तो वो वापस होम पेज पर आ जाए */}
              <Route path='*' element={<Home />} />
            </Routes>
        </Router> 
    </>
  )
}

export default App

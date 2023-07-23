import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import Home from './components/pages/Home'

import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'


function App() {
  return (
    <Router>      
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      <footer>Footer</footer>
</Router>
  )
}

export default App

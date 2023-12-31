import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Project'
import Container from './components/layout/Container'


function App() {
  return (
    <Router>      
    <Navbar/>
    <Container customClass="min-height">
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/footer" element={<Footer />} />          
        </Routes>  
        </Container>
        <Footer/>
      </Router>      
  )
}

export default App

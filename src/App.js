import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';
import Projects from './Components/pages/Projects';

import Container from './Components/pages/Layout/Container';
import Navbar from './Components/pages/Layout/Navbar'
import Footer from './Components/pages/Layout/Footer'
import Project from './Components/pages/Project';

function App() {
  return(
    <Router>
    <Navbar/>        
    <Container customClass ="min-height">
    <Routes>      
      <Route exact path="/" element ={<Home/>}>
      </Route>
      <Route exact path ="/Projects" element={<Projects/>}>
      </Route>
      <Route exact path ="/company" element={<Company/>}>
      </Route>
      <Route exact path ="/contact" element={<Contact/>}>
      </Route>
      <Route exact path ="/newproject" element={<NewProject/>}>
      </Route> 
      <Route exact path ="/project/:id" element={<Project/>}>
      </Route>     
    </Routes>
    </Container>

    <Footer/>

    </Router>
  )
}

export default App;

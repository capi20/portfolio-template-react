import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Skills from './containers/skills'
import Resume from './containers/resume'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/about" index element={<About/>}/>
        <Route path="/skills" index element={<Skills/>}/>
        <Route path="/resume" index element={<Resume/>}/>
        <Route path="/portfolio" index element={<Portfolio/>}/>
        <Route path="/contact" index element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

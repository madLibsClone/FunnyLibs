import './css/setup.css';
import './css/animations.css';
import './App.css';
import './css/Header.css';
import './css/Homepage.css';
import './css/Form.css';
import './css/Display.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './comp/routes/Homepage';
import Form from './comp/Form';
import Display from "./comp/routes/Display.js";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-flex wrapper">
          <h1><Link to="/">MadLibone</Link></h1>
          <nav className="navigation">
            <ul>
              <li>About Us</li>
              <li>Placeholder</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Form' element={<Form />} />
            <Route path='/Display' element={<Display />} />
          </Routes>
        </main>
      </div>
    </div>
    
  );

}

export default App;

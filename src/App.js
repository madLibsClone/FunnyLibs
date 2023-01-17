import './App.css';
import './css/Homepage.css'
import './css/Form.css'
import './css/Display.css'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './comp/routes/Homepage';
import Form from './comp/Form';
import Display from "./comp/routes/Display.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1><Link to="/">MadLibone</Link></h1>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Placeholder</li>
            </ul>
          </nav>
        </header>
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

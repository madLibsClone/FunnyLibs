import './App.css';
import './css/Homepage.css'
import './css/Form.css'
import './css/Display.css'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './comp/Homepage';
import MadlibOne from './comp/routes/madlibBank/MadlibOne';
import FormOne from './comp/routes/FormBank/FormOne';

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
            <Route path='/MadlibOne' element={<MadlibOne />} />
            <Route path='/FormOne' element={<FormOne />}/>
          </Routes>
        </main>
      </div>
    </div>
  );

}

export default App;

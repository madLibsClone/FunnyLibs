import './css/setup.css';
import './App.css';
import './css/animations.css';
import './css/Header.css';
import './css/About.css';
import './css/Form.css';
import './css/mediaQueries.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './comp/Homepage';
import MadlibOne from './comp/routes/madlibBank/MadlibOne';
import MadlibTwo from './comp/routes/madlibBank/MadlibTwo';
import MadlibThree from './comp/routes/madlibBank/MadlibThree';
import FormOne from './comp/routes/FormBank/FormOne';
import FormTwo from './comp/routes/FormBank/FormTwo';
import FormThree from './comp/routes/FormBank/FormThree';
import About from './comp/routes/About';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-flex wrapper">
          <h1><Link to="/">FunnyLibs!</Link></h1>
          <nav className="navigation">
            <ul>
              <li><Link to="/About">About Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/MadlibOne' element={<MadlibOne />} />
            <Route path='/MadlibTwo' element={<MadlibTwo />} />
            <Route path='/MadlibThree' element={<MadlibThree />} />
            <Route path='/FormOne' element={<FormOne />}/>
            <Route path='/FormTwo' element={<FormTwo/>} />
            <Route path='/FormThree' element={<FormThree/>} />
            <Route path='/About' element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
    
  );

}

export default App;

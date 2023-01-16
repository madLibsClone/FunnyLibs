import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './comp/routes/Homepage';
import Form from './comp/Form';
import Display from "./comp/routes/Display.js";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>About Us</li>
            <li>Placeholder</li>
          </ul>
        </nav>
        <h1>MadLibone</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/Display' element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlacePage from './pages/PlacePage';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <h3 className='nav-heading'>TITLE</h3>
        <ul className='nav-list'>
          <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/page">Places</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/page' element={<PlacePage/>} />
      </Routes>
    </div>
  );
}

export default App;

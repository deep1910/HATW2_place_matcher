import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlacePage from './pages/PlacePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/page' element={<PlacePage/>} />
      </Routes>
    </div>
  );
}

export default App;

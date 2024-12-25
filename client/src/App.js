
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

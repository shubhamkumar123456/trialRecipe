
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dummy from './pages/Dummy';
import Navbar from './components/Navbar';
import SignleRecipe from './pages/SignleRecipe';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dummy' element={<Dummy/>}/>
          <Route path='/recipe' element={<SignleRecipe/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

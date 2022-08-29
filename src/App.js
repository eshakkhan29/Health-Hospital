
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/departments' element={<Departments/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

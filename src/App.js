import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar/Navbar';

//Styles
import './GlobalStyles.css';

//Pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Group from './Pages/Group/Group';
import SignupPage from './Pages/SignupPage';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/group' element={<Group/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

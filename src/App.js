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
import Member01 from './Pages/Group/Member01';
import Member02 from './Pages/Group/Member02';
import Member03 from './Pages/Group/Member03';
import Member04 from './Pages/Group/Member04';
import Member05 from './Pages/Group/Member05';

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
          <Route path='/group/member01' element={<Member01/>} />
          <Route path='/group/member02' element={<Member02/>} />
          <Route path='/group/member03' element={<Member03/>} />
          <Route path='/group/member04' element={<Member04/>} />
          <Route path='/group/member05' element={<Member05/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

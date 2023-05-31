import React, { useState } from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Calls from './components/Calls'
import Files from './components/Files';
import Footer from './components/Footer';
import Status from './components/Status';

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className="flex h-screen">
      <Router>
        <Sidebar isDark={isDark} setIsDark={setIsDark} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path='/' element={<Mainpage isDark={isDark} setIsDark={setIsDark} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/calls' element={<Calls />} />
          <Route path='/files' element={<Files />} />
          <Route path='/status' element={<Status />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

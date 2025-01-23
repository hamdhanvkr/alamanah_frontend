import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Logins/login';
import Layout from './components/Layout/layout';
import Dashboard from './components/Dashboard/dashboard';
import Members from './components/Memberdetails/member';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/alamanah/:username' element={<Layout />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='members' element={<Members />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

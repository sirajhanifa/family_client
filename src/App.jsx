import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Dashboard from './components/Pages/Dashboard';
import ToDoList from './components/Pages/ToDoList';
import Page3 from './components/Pages/Page3';
import Logout from './components/Pages/Logout';
import SignUp from './components/Pages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* Layout with Nested Routes */}
        <Route path="Layout/:username" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="todolist" element={<ToDoList />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

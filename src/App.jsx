import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard';
import DailyRoutine from './Pages/DailyRoutine/DailyRoutine';
import Logout from './Pages/Logout';
import SignUp from './Pages/SignUp';
import Celebrations from './Pages/Celebrations/Celebrations';
import Expenses from './Pages/Expenses/Expenses';
import Report from './Pages/Report/Report';
import Home from './Pages/Home';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Settings/Profile';
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* Layout with Nested Routes */}
        <Route path="Layout/:username" element={<Layout />}>
          <Route path="Dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="DailyRoutine" element={<DailyRoutine />} />
          <Route path="Celebrations" element={<Celebrations />} />
          <Route path="Expenses" element={<Expenses />} />
          <Route path="Report" element={<Report />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

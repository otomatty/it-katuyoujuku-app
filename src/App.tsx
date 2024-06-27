import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import InitialSetupPage from './pages/InitialSetupPage/InitialSetupPage';
import CommunityRoleSettings from './components/molecules/CommunityRoleSettings/CommunityRoleSettings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/initial-setup" element={<InitialSetupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/community-role-settings"
          element={<CommunityRoleSettings />}
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

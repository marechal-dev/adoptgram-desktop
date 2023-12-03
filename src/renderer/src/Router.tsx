import { Route, Router } from 'electron-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      }
    />
  );
}

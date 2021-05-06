import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
export const UserContext = createContext()

function App() {
  const [user, updateUser] = useState([]);
  return (
    <UserContext.Provider value={[user, updateUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin-dashboard">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/customer-dashboard">
            <CustomerDashboard />
          </PrivateRoute>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

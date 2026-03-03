
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import type {RootState} from "./store/store";
import Landing from './pages/Landing';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Campaigns from "./pages/dashboard/Campaigns";
import Analytics from "./pages/dashboard/Analytics";
import Insights from "./components/dashboardLayout/Insights";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuth ? <>{children}</> : <Navigate to="/" replace />;
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="graphs" element={<Insights />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

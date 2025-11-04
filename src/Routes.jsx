import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard/Dashboad";
import MenuBar from "./pages/MenuBar/MenuBar";
import Customers from "./pages/Customers/Customers";
import Products from "./pages/Products/Products";
import Invoices from "./pages/Invoices/Invoices";
import InvoiceCreation from "./pages/InvoiceCreation/InvoiceCreation";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

const Layout = () => (
  <>
    <MenuBar />
    <Outlet /> 
  </>
);

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/create-invoice" element={<InvoiceCreation />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;

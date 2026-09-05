import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminProducts from './pages/AdminProducts.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProtectedHome() {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Home />;
}

function ProtectedAdminProducts() {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <AdminProducts />;
}

export default function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />

      {!isAdminPage && <CustomCursor />}
      {!isAdminPage && <Header />}

      <Routes>
        <Route path="/" element={<ProtectedHome />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/products"
          element={<ProtectedAdminProducts />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}
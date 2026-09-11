import { Routes, Route, useLocation } from 'react-router';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import ProtectedRoute from './components/layout/ProtectedRoute';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Footer from './components/layout/Footer';

import Preloader from './components/layout/Perloader';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {/* <Preloader /> */}
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}
export default App;

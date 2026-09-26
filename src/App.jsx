import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Routes, Route, useLocation } from 'react-router';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
// import ProtectedRoute from './components/layout/ProtectedRoute';
// import AdminLogin from './admin/AdminLogin';
// import AdminDashboard from './admin/AdminDashboard';
import Footer from './components/layout/Footer';
import NotFound from '@/pages/NotFound';
import ScrollToTop from './components/layout/ScrollToTop';
import Jobs from '@/pages/Jobs';
import Preloader from './components/layout/Perloader';
import Privacy from '@/pages/Privacy';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      <Preloader />
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </div>
  );
}
export default App;

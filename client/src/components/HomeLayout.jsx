import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function HomeLayout({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
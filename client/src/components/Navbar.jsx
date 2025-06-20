import { useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { Home } from "lucide-react";
export default function Navbar({ onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optional: close menu on navigation click or logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
    setMobileMenuOpen(false);
  };

  // return (
  //   <nav className="bg-white shadow-md border-b border-gray-200 opacity-90 fixed top-0 left-0 right-0 z-50">
  //     <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
  //       {/* Brand */}
  //       <Link to="/home" className="no-underline">
  //         <div
  //           className="text-blue-700 text-lg tracking-wide cursor-pointer hover:text-blue-900 transition duration-300"
  //           style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
  //         >
  //           HostelHub
  //         </div>
  //       </Link>

  //       {/* Hamburger icon for small screens */}
  //       <button
  //         className="md:hidden text-blue-700 hover:text-blue-900 focus:outline-none"
  //         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  //         aria-label="Toggle menu"
  //       >
  //         {/* Simple hamburger icon */}
  //         <svg
  //           className="w-6 h-6"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           {mobileMenuOpen ? (
  //             // X icon when menu open
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M6 18L18 6M6 6l12 12"
  //             />
  //           ) : (
  //             // Hamburger icon when menu closed
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M4 6h16M4 12h16M4 18h16"
  //             />
  //           )}
  //         </svg>
  //       </button>

  //       {/* Menu links: hidden on small screens, visible on md+ */}
  //       <div className="hidden md:flex items-center space-x-6 text-blue-600 font-semibold">
  //         <Link to="/home/mess" className="hover:text-blue-800 transition">
  //           Rate My Mess
  //         </Link>
  //         <Link to="/home/lost" className="hover:text-blue-800 transition">
  //           Lost & Found
  //         </Link>
  //         <Link to="/home/polls" className="hover:text-blue-800 transition">
  //           Quick Polls
  //         </Link>
  //         <button
  //           onClick={handleLogout}
  //           className="text-red-500 hover:text-red-700 font-medium transition"
  //         >
  //           Logout
  //         </button>
  //       </div>
  //     </div>

  //     {/* Mobile menu dropdown */}
  //     {mobileMenuOpen && (
  //       <div className="md:hidden bg-white border-t border-gray-200 shadow-md  relative">
  //         <div className="flex flex-col space-y-2 px-4 py-3 text-blue-600 font-semibold absolute top-0 right-4 bg-gray-50 w-1.5/4">
  //           <Link
  //             to="/home"
  //             onClick={() => setMobileMenuOpen(false)}
  //             className="hover:text-blue-700 transition ease-in-out duration-100 hover:scale-105"
  //           >
  //             Rate My Mess
  //           </Link>
  //           <Link
  //             to="/home/lost"
  //             onClick={() => setMobileMenuOpen(false)}
  //             className="hover:text-blue-700 transition ease-in-out duration-100 hover:scale-105"
  //           >
  //             Lost & Found
  //           </Link>
  //           <Link
  //             to="/home/polls"
  //             onClick={() => setMobileMenuOpen(false)}
  //             className="hover:text-blue-700 transition ease-in-out duration-100 hover:scale-105"
  //           >
  //             Quick Polls
  //           </Link>
  //           <button
  //             onClick={handleLogout}
  //             className="text-red-500 hover:text-red-700 font-medium transition text-left ease-in-out duration-100 hover:scale-105"
  //           >
  //             Logout
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </nav>
  // );

  return (
    <nav className="bg-white shadow-md  border-b border-gray-200 opacity-90 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/home" className="no-underline ">
          <div className="flex justify-start gap-2 align-center">
            <Home className="w-6 h-6 text-pink-600  cursor-pointer hover:text-rose-700 transition duration-300" />
            <div
              className="text-pink-600 text-lg tracking-wide cursor-pointer hover:text-rose-700 transition duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              HostelHub
            </div>
          </div>

        </Link>

        {/* Hamburger icon for small screens */}
        <button
          className="md:hidden text-pink-600 hover:text-rose-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu links: hidden on small screens, visible on md+ */}
        <div className="hidden md:flex items-center space-x-6 text-pink-600 font-semibold">
          <Link to="/home/mess" className="hover:text-rose-700 transition">
            Rate My Mess
          </Link>
          <Link to="/home/lost" className="hover:text-rose-700 transition">
            Lost & Found
          </Link>
          {/* <Link to="/home/polls" className="hover:text-rose-700 transition">
            Quick Polls
          </Link> */}
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 rounded-xl shadow-md relative">
          <div className="flex flex-col space-y-2 px-4 py-3 text-pink-600 rounded-xl font-semibold absolute top-0 right-4 bg-pink-50 w-1.5/4">
            <Link
              to="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-700 transition ease-in-out duration-100 hover:scale-105"
            >
              Rate My Mess
            </Link>
            <Link
              to="/home/lost"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-700 transition ease-in-out duration-100 hover:scale-105"
            >
              Lost & Found
            </Link>
            {/* <Link
              to="/home/polls"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-700 transition ease-in-out duration-100 hover:scale-105"
            >
              Quick Polls
            </Link> */}
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700 font-medium transition text-left ease-in-out duration-100 hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );

}

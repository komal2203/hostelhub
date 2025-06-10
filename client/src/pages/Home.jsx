// src/pages/Home.jsx
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import MessRating from "./Mess.jsx";
import LostAndFound from "./LostAndFound.jsx";
import Polls from "./Polls.jsx";

export default function Home({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<MessRating />} />
          <Route path="/lost" element={<LostAndFound />} />
          <Route path="/polls" element={<Polls />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

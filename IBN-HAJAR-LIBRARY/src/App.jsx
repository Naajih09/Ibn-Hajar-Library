import React, { useState } from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Navbar */}
      <header className="bg-blue-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
        {/* App Title */}
        <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">
          📚 مكتبة ابن حجر
        </Link>

        {/* Search Input */}
        <input
          type="text"
          placeholder="ابحث عن كتاب..."
          className="p-2 text-black rounded w-full md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Navigation Links */}
        <nav className="mt-2 md:mt-0">
          <Link to="/" className="mr-4 hover:underline">الرئيسية</Link>
          <Link to="/about" className="hover:underline">عن المكتبة</Link>
        </nav>
      </header>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

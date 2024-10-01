import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/css/style.css";  // Assuming main CSS is stored in this path
import "./globalStyled.css";  // Assuming main CSS is stored in this path

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/homeLanding/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

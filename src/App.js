import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Page-1/About/About";
import Home from "./Page-1/Home/Home";
import Navbar from "./Page-1/Shared/Navbar/Navbar";
import Appointment from "./Page-1/Appointment/Appointment";
import Review from "./Page-1/Review/Review";
import Contact from "./Page-1/Contact/Contact";
import Login from "./Page-1/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Review" element={<Review />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

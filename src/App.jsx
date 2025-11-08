import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import OnlineClass from "./pages/OnlineClass";
import HirePartners from "./pages/HirePartners";
import Placement from "./pages/Placement";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/online-class" element={<OnlineClass />} />
        <Route path="/hire-partners" element={<HirePartners />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

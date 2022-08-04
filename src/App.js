import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import LoginRegister from "./components/LoginRegister";
import MainNews from "./components/MainNews";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:category/:title/:date" element={<Detail />} />
        <Route path="/login" element={<LoginRegister status="login" />} />
        <Route path="/register" element={<LoginRegister status="register" />} />
        <Route path="search/:query" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

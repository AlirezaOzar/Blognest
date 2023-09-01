import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Blog from "./components/Blog";
import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";
import Write from "./pages/write/write";
import Settings from "./pages/Settings/Settings";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import BlogsPage from "./pages/Blogs/BlogsPage";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/About-us/About-us";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<Blog />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

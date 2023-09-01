import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

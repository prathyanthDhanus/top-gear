import React from "react";
import { Outlet } from "react-router-dom";
import NavbarExample from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <NavbarExample />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

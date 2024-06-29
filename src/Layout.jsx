import React from "react";
import { Outlet } from "react-router-dom";
import NavbarExample from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./re-usable-components/Loader";
import { useState,useEffect } from "react";



const Layout = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 8 seconds
    }, 5000);

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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

// Note: This component is used to set the layout of the application.
//       The Navbar and Footer are constant and do not change.
//       The Outlet section changes based on the current route.
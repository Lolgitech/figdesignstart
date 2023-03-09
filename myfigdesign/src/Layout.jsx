import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./footer.jsx";
import Header from "./header.jsx";


import "./index.css";

//import CustomDropdown from "../CustomDropdown/CustomDropdown";

function Layout() {
  return (
    <div>
      <Header />

      
      <Outlet />
      
      
      {/* <Footer /> */}

    
    </div>
  );
}

export default Layout;

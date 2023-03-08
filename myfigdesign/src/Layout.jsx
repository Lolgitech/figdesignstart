import { Link, Outlet } from "react-router-dom";
import React from "react";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import LandingPage from "./routes/LandingPage.jsx";
import "./index.css";

//import CustomDropdown from "../CustomDropdown/CustomDropdown";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      
      <Footer />

      {/* <nav>
          <CustomDropdown />
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> 
        </nav> */}
    </div>
  );
}

export default Layout;

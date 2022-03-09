import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
   function changeCss() {
      const element = document.getElementById("navigration");
      this.scrollY > 100
         ? element.classList.add("scrolled")
         : element.classList.remove("scrolled");
   }
   window.addEventListener("scroll", changeCss, false);

   return (
      <div id="navigration" className="navbar fixed-top">
         <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
               <span className="line line1"></span>
               <span className="line line2"></span>
               <span className="line line3"></span>
            </div>
            <div className="logo">
               <img className="img-fluid" src={logo} alt="" />
            </div>
            <button className="yodda-btn">Connect Wallet</button>
            <div className="menu-items">
               <ul className="ps-0">
                  <li>
                     <a href="/">Home</a>
                  </li>
                  <li>
                     <a href="/">About</a>
                  </li>
                  <li>
                     <a href="/">Roadmap</a>
                  </li>
                  <li>
                     <a href="/">Team</a>
                  </li>
                  <li>
                     <a href="/">Faq</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;

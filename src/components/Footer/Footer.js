import React from "react";
import logo from "../../images/logo.png";
import "./Footer.scss";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import discord from "../../images/discord.png";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container text-center">
            <img className="img-fluid" src={logo} alt="" />

            <div className="social-links">
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img className="img-fluid icon" src={twitter} alt="" />
               </a>
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     className="img-fluid icon insta"
                     src={instagram}
                     alt=""
                  />
               </a>
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img className="img-fluid icon" src={discord} alt="" />
               </a>
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img className="img-fluid icon" src={twitter} alt="" />
               </a>
            </div>
            <div className="bottom d-flex align-items-center justify-content-between">
               <span className="text-light">
                  Copyright &copy; 2022 all rights reserved yoddaverse
               </span>
               <div className="float-right">
                  <ThemeChanger />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;

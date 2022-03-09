import React from "react";
import "./Banner.scss";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import discord from "../../images/discord.png";

const Banner = () => {
   return (
      <div className="banner text-center">
         <div className="overlay">
            <div className="container d-flex align-items-center h-100 justify-content-center">
               <div className="text-box">
                  <h1>
                     collect nfts <br /> for your digital world
                  </h1>
                  <button className="yodda-btn mt-4">Mint Now</button>
               </div>
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
            </div>
         </div>
      </div>
   );
};

export default Banner;

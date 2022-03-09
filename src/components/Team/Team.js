import React from "react";
import mask from "../../images/mask.png";
import "./Team.scss";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

const Team = () => {
   const content = [
      { image: mask },
      { image: mask },
      { image: mask },
      { image: mask },
   ];

   const params = {
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
         delay: 121000,
         disableOnInteraction: false,
      },
      coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   };
   return (
      <div className="team">
         <div className="container">
            <div className="header-text text-center">
               <h2>Team</h2>
               <h3>We Are All Yodda</h3>
               <p>
                  We are team of passionate, hardworking, and dedicated
                  community members contributing towards a better Yoddaverse.
               </p>
            </div>
            <Swiper {...params}>
               {content.map((item, index) => (
                  <div className="slider-content" key={index}>
                     <div className="img-box">
                        <img className="img-fluid" src={item.image} alt="" />
                     </div>
                     <div className="info">
                        <h3 className="name">Sveedo</h3>
                        <h4 className="title">founder</h4>
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Nisi consectetur quis odit, nobis vitae
                           corrupti pariatur veniam qui debitis dicta, nam magni
                           ipsam, velit harum illo! Nostrum modi tempore
                           dolores.
                        </p>
                     </div>
                  </div>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Team;

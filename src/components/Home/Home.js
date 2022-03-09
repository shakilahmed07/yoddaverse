import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Mask from "../Mask/Mask";
import Navbar from "../Navbar/Navbar";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Banner />
         <Mask />
         <About />
         <Roadmap />
         <Faq />
         <Team />
         <Footer />
      </div>
   );
};

export default Home;

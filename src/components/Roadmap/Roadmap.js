import React from "react";
import "./Roadmap.scss";
const Roadmap = () => {
   return (
      <div className="roadmap">
         <div className="container">
            <div className="header-text text-center">
               <h3>Our</h3>
               <h2>Roadmap</h2>
            </div>
            <div className="road-sign">
               <div className="row mb-5">
                  <div className="col-md-6 ">
                     <div className="box pe-md-5 box-1">
                        <h4>V1</h4>
                        <h3>Yoddaverse Assets</h3>
                        <p>1. Listings of Yoddaverse assets</p>
                        <p>2. Creation of utility for each unique asset</p>
                        <p>3. Each asset will be transferable</p>
                     </div>
                  </div>
               </div>
               <div className="row mb-5">
                  <div className="col-md-6"></div>
                  <div className="col-md-6 text-end">
                     <div className="box box-2 ps-md-5">
                        <h4>V2</h4>
                        <h3>NFT Utility</h3>
                        <p>
                           Yoddaverse NFT holders will be able to access the
                           Utility from the assets purchased on the platform.
                           These utilities will only be accessible on the
                           yoddaone platform.
                        </p>
                        <p>
                           Some NFT’s can be used as credits or coupons for
                           purchases of any item within the yoddaone marketplace
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="box pe-md-5 box-3">
                        <h4>V3</h4>
                        <h3>Agatha Land Ownership & Staking</h3>
                        <p>
                           With the creation of “Yodda” tokens & some unique
                           NFT’s, users can purchase land within “Agatha” when
                           live.
                        </p>
                        <p>
                           Users holding Special NFT assets can use the Yodda
                           marketplace free of charge without fees.
                        </p>
                        <p>
                           Yoddaverse NFT holders will be able to stake their
                           NFT’s & tokens within the yoddaverse for rewards &
                           airdrops .
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Roadmap;

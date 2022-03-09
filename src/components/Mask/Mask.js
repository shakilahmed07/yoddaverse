import React from "react";
import mask from "../../images/mask.png";
import "./Mask.scss";

const Mask = () => {
   return (
      <div className="mask">
         <div className="container-fluid">
            <div className="row">
               <div className="col-4">
                  <div className="mask-box box-1">
                     <img className="img-fluid" src={mask} alt="" />
                  </div>
               </div>
               <div className="col-4">
                  <div className="mask-box box-2 text-center">
                     <img className="img-fluid" src={mask} alt="" />
                  </div>
               </div>
               <div className="col-4">
                  <div className="mask-box box-3 float-end text-end">
                     <img className="img-fluid" src={mask} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Mask;

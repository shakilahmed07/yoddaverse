import React from "react";
import "./Faq.scss";

const Faq = () => {
   return (
      <div className="faq">
         <div className="container">
            <div className="header-text">
               <h3>
                  Frequently Asked <span>Questions</span>
               </h3>
            </div>

            <div className="accordion accordion-flush" id="accordionExample">
               <div className="accordion-item">
                  <h4 className="accordion-header" id="headingOne">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                     >
                        What is crypto wallet
                     </button>
                  </h4>
                  <div
                     id="collapseOne"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Deleniti illo magni voluptates vero corrupti,
                        </p>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h4 className="accordion-header" id="headingTwo">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                     >
                        Can anyone join and be a part of yoddaone
                     </button>
                  </h4>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Deleniti illo magni voluptates vero corrupti,
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;

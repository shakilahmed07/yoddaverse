import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
   const [themeState, setThemeState] = useState(false);

   const handleChange = () => {
      setThemeState(!themeState);
      if (themeState) {
         localStorage.setItem("Theme", "dark");
         document.body.classList.add("dark-mode");
      } else {
         localStorage.setItem("Theme", "light");
         document.body.classList.remove("dark-mode");
      }
   };
   useEffect(() => {
      const getTheme = localStorage.getItem("Theme");
      if (getTheme === "dark") return document.body.classList.add("dark-mode");
   });
   return (
      <div>
         <div class="form-check form-switch" onClick={handleChange}>
            <input
               className="form-check-input"
               type="checkbox"
               role="switch"
               id="flexSwitchCheckDefault"
            />
         </div>
      </div>
   );
};

export default ThemeChanger;

import React, { useContext } from "react";
import moon from "../Assets/moon.svg";
import sun from "../Assets/sun.svg";
import { ThemeContext } from "./ContextTheme";

const Navigation = () => {
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center w-full mt-8 ml-6 mr-6">
      <h1
        className={
          darkTheme
            ? "text-kalas10 text-2xl font-fonty"
            : " text-kalas7 text-2xl font-fonty"
        }
      >
        devfinder
      </h1>
      <div className="flex items-center gap-4">
        <h4
          className={
            darkTheme
              ? "text-kalas3 text-xs font-fonty tracking-wide"
              : "text-xs font-fonty tracking-wide text-kalas7 "
          }
        >
          {darkTheme ? "DARK" : "LIGHT"}
        </h4>
        <span className="cursor-pointer">
          <img
            src={darkTheme ? moon : sun}
            className="h-5 w-5"
            onClick={themeHandler}
          />
        </span>
      </div>
    </div>
  );
};

export default Navigation;

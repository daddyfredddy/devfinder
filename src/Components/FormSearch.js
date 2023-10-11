import React, { useContext } from "react";
import search from "../Assets/search.svg";
import { ThemeContext } from "./ContextTheme";

const FormSearch = () => {
  const { darkTheme } = useContext(ThemeContext);
  // const bgstyle =
  //   "";

  return (
    <div
      className={
        darkTheme
          ? "w-full h-16 rounded-2xl flex justify-between items-center bg-kalas7 mt-9"
          : "w-full h-16 rounded-2xl flex justify-between items-center bg-kalas11 mt-9"
      }
    >
      <div className="flex bg-kalas">
        <img src={search} alt="search" className="h-5 w-5 mr-2 ml-5" />
        <input
          type="text"
          placeholder="Search Github username..."
          className={
            darkTheme
              ? "font-fonty text-xs w-48 h-6 mr-6"
              : "font-fonty text-xs w-48 h-6 mr-6 placeholder:text-kalas7 placeholder:bg-kalas11 border-kalas1 "
          }
        ></input>
      </div>
      <button className="h-11 w-20 rounded-lg text-white py-1 px-3 bg-kalas1 text-center font-fonty text-sm mr-5">
        Search
      </button>
    </div>
  );
};

export default FormSearch;

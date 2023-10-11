import "./App.css";
import { useContext } from "react";
// import { ThemeContext } from "./Components/ContextTheme";
import FormSearch from "./Components/FormSearch";
import Navigation from "./Components/Navigation";
import { ThemeContext } from "./Components/ContextTheme";
import UserCard from "./Components/UserCard";

export const App = () => {
  const { darkTheme, themeHandler } = useContext(ThemeContext);
  const bgLight = "bg-kalas5 w-full h-screen box-border mt-24";
  const bgDark = "bg-kalas8 w-full h-screen box-border mt-24";
  return (
    <div className={darkTheme ? `${bgLight}` : `${bgDark}`}>
      <div className="flex justify-center items-center gap-32">
        <Navigation />
      </div>
      <div className="flex justify-center items-center shadow-xl shadow-shado">
        <FormSearch />
      </div>
      <div>
        <UserCard />
      </div>
    </div>
  );
};

export default App;

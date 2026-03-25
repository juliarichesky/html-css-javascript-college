import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./assets/context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Hello World!!</h1>
      <button onClick={toggleTheme}>Alternar Tema</button>
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white p-4">
        Teste Tailwind
      </div>
    </>
  );
};
export default App;

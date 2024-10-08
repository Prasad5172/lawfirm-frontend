import { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";
import { AuthContext } from "../../context/AuthContext";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const {setIsDarkMode} = useContext(AuthContext);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    setIsDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        className="mr-1 h-6"
        checked={darkSide}
        onChange={toggleDarkMode}
        moonColor="gray"
        sunColor="orange"
        size={30}
      />
    </>
  );
}

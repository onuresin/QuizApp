import { useState,useEffect } from "react"

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
  }, [darkTheme]);

    return (
        <div className="switch-division">
          <span className="right-theme" onClick={handleThemeChange}>
              {darkTheme ? 
                (<img src="images/darkmode.svg" alt="light mode" />) : 
                (<img src="images/lightmode.svg" alt="dark mode" />)}
          </span>
        </div>
      );
    }
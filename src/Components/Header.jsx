import { useState } from "react"

export default function Header() {
    const [light, setLight] = useState(true);

    return (
        <div className="switch-division">
          <img src="images/light-mode-button.svg" alt="light switch icon" />
          <div onClick={() => document.body.classList.toggle("dark-theme")} className="switchSide">
            <label style={{ visibility: !light ? "hidden" : "visible" }} onClick={() => setLight(false)}>
              <input type="radio" name="dark" checked={light} onChange={() => setLight(false)} />
            </label>
            <label style={{ visibility: light ? "hidden" : "visible" }} onClick={() => setLight(true)}>
              <input type="radio" name="light" defaultChecked={!light} onChange={() => setLight(true)} />
            </label>
          </div>
          <img src="images/dark-mode-button.svg" alt="dark switch icon" />
        </div>
      );
    }
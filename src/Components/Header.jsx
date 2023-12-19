export default function Header() {
    return (
        <div className="switch-division">
        <img src="images/light-mode-button.svg" alt="light switch icon" />
            <div onClick={() => document.body.classList.toggle("dark-theme")} className="switchSide">
                <img src="/images/circle-switch.svg"/>
            </div>
        <img src="images/dark-mode-button.svg" alt="dark switch icon"/>
    </div>
    )
}
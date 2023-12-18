export default function Header() {
    return (
        <div className="switch-division">
        <img src="/public/assets/img/light-mode-button.svg" alt="light switch icon" />
            <div onClick={() => document.body.classList.toogle("dark-theme")} className="switchSide">
                <img src="/public/assets/images/circle-switch.svg"/>
            </div>
        <img src="/public/assets/img/dark-mode-button.svg" alt="dark switch icon"/>
    </div>
    )
}
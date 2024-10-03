import React from "react";
import style from "./style.module.scss"

export const Navbar = () => {
    return (
        <div className={style.navBg}>
            <div className="container">
                <div className={style.navbar}>
                    <ul className={style.nav_link}>
                        <li><a href="#">O ресноте</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Наши магазины</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <div className={style.input}>
                        <input type="text" placeholder="Поиск по сайту" />
                    </div>
                </div>
            </div>
        </div>
    )
}


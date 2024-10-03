import React from "react";
import style from "./style.module.scss"
import { Navbar } from "../../components/navbar/navbar"
import Star from "../../assets/icons/star";
import logo from "../../assets/logo.svg"
import Cart from "../../assets/icons/cart"

export const Header = () => {
    return (
        <div>
            <div className="container">
                <div className={style.headerTop}>
                    <div className={style.header_left}>
                        <img src={logo} alt="logo" />
                        <p>Колбасы и мясные деликатесы</p>
                    </div>

                    <div className={style.header_right}>
                        <div className={style.imgs}>
                            <Star />
                            <Cart />
                        </div>
                        <div>
                            <p>Товаров: 3</p>
                            <p className={style.price}>6 540 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};  
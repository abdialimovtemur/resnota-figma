import React from "react";
import hero from "../../assets/hero.svg"
import style from "./style.module.scss"

export const Banner = () => {
    return (
        <div className={style.banner}>
            <img src={hero} alt="" />
        </div>
    )
};
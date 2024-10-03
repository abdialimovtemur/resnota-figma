import React, { useState } from "react";
import style from "./style.module.scss";
import sorch from "../../assets/sorch.svg";
import { Bar } from "../../assets/icons/bar";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <nav className={style.container}>
        <div className={style.navbar_content}>
          <div className={style.navbar_box}>
            <h3 className={style.navbar_title}>О ресноте</h3>
            <h3 className={style.navbar_title}>Каталог</h3>
            <h3 className={style.navbar_title}>Наши магазины</h3>
            <h3 className={style.navbar_title}>Контакты</h3>
          </div>

          <div className={style.navbar_bar}>
            <Bar />
          </div>
          <div className={style.navbar_sorch}>
            <input
              className={style.navbar_input}
              type="text"
              placeholder="Поиск по сайту"
            />
            <img src={sorch} alt="Search" />
          </div>
        </div>
      </nav>
    </div>
  );
};

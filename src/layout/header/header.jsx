import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Yulduscha } from "../../assets/icons/yulduscha";
import Nimadir from "../../assets/icons/nimadir";
import style from './style.module.scss'
export const Header = ({data}) => {
  return (
<>
<div className={style.container}>
      <header className={style.header}>
        <div className={style.header_logo}>
            <img src={data.logo} alt="" />
            <h4 className={style.header_title}>Колбасы и мясные деликатесы</h4>
        </div>
        <div className={style.header_btn}>
            <Yulduscha/>
            <Nimadir/>
            <div className={style.text}>
                <h3 className={style.header_disc}>Товаров: 3</h3>
                <h3 className={style.discs}>6 540 ₽</h3>
            </div>
        </div>
      </header>
    </div>
      <Navbar />
</>
  );
};

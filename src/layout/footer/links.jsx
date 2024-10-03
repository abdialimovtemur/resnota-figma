import React from "react";
import styles from "./style.module.scss";

import ts from "../../assets/ts.svg";

function Links() {
  return (
 <div className={styles.container}>
       <div className=" mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between my-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold text-[19px]">Продукция</h3>
          <p className="text-[#3D568A]">Колбасные и мясные изделия</p>
          <p className="text-[#3D568A]">Молочные продукты</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0">
          <p className="text-[#3D568A]">Морепродукты</p>
          <p className="text-[#3D568A]">Пиво</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0">
          <p className="text-[#3D568A]">Замороженные продукты</p>
          <p className="text-[#3D568A]">Мед</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0">
          <p className="text-[#3D568A]">Свежие овощи</p>
          <p className="text-[#3D568A]">Свежие фрукты</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-[350px]">
        <h3 className="font-bold text-black text-[19px]">О компании</h3>
        <h3 className="font-bold text-black text-[19px]">Наши магазины</h3>
        <h3 className="font-bold text-black text-[19px]">Контакты</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-10 border-t-2 pt-4">
        <p className="text-center md:text-left">2016–2021 © ООО «ПД Реснота»</p>
        <img src={ts} alt="Logo" className="my-4 md:my-0" />
        <p className="text-center md:text-right">Разработка и продвижение сайта — SEOabsolut</p>
      </div>
    </div>
 </div>
  );
}

export default Links;

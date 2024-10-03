import React from "react";
import style from "./style.module.scss";

export const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner_item}>
        <div className={style.container}>
          <div className={style.banner_box}>
            <h3>Истина в качестве</h3>
            <p>
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button>Купить </button>
          </div>
        </div>
      </div>
    </div>
  );
};

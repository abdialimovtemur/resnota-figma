import React from "react";
import styles from "./style.module.scss";
import footer from "../../assets/footerlogo.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_box}>
          <div className={styles.footer_text}>
            <h1 className={styles.footer_title}>Есть вопросы?</h1>
            <p>
              Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
              время.
            </p>
          </div>
          <div className={styles.footer_img}>
            <img src={footer} alt="" />
          </div>
          <div className={styles.footer_btns}>
            <div className="flex gap-3 ">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Телефон/E-mail"
                  className={styles.input}
                />
              </div>
              <textarea
                placeholder="Комментарий"
                className={styles.textarea}
              ></textarea>
            </div>
            <div>
              <div className={styles.footer_input}>
                <input type="checkbox" />
                <h3>
                  Даю согласие на рассылку рекламных материалов, акций и скидок
                </h3>
              </div>
              <div className={styles.footer_input}>
                <input type="checkbox" />
                <h3>
                Даю согласие на обработку моих персональных данных                </h3>
              </div>
            </div>
            <button type="submit" className={styles.footer_btn}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, {FormEvent, useContext, useEffect, useRef, useState} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import jc from "./../../Helpers/joinClassnames";
import {PAGES} from "./../../Enums/PAGES";
import styles from "./style.m.scss";
import {PageContext} from "./../Page";
import {LANGS} from "./../../Enums/LANGS";

interface ISocial {
  name: string;
  link: string;
}

const socials:ISocial[] = [
  {name: 'tg', link: 'https://t.me/m9a0k'},
  {name: 'ws', link: 'https://wa.me/+79230387064'},
  {name: 'vk', link: 'https://vk.com/id389278152'},
  {name: 'gmail', link: 'mailto:twopapavers@gmail.com'},
  {name: 'phone', link: 'tel:+79230387064'},
];
const Contacts = () => {
  const {onScrollPage, lang} = useContext(PageContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isStatusVisible, setStatusVisible] = useState(false);
  const baseRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isRu = lang === LANGS.RU;

  useEffect(() => {
    if (baseRef.current) {
      onScrollPage(baseRef.current, PAGES.CONTACTS);
    }
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      fetch('./assets/php/form.php', {
        method: 'POST',
        body: new FormData(formRef.current)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            setError(true);
          }
        })
        .then(data => {
          if (data.status === 'success') {
            setSuccess(true);
            // @ts-ignore
            formRef.current.reset();
          } else {
            setError(true);
          }
        })
        .catch(() => setError(true))
    } else {
      setError(true);
    }
  };

  const handleStatusAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (isStatusVisible) {
      setSuccess(false);
      setError(false);
      setStatusVisible(false);
    } else {
      setStatusVisible(true);
    }
  }

  return (
    <Wrapper ref={baseRef} id={PAGES.CONTACTS}>
      <BlockTitle>
        {isRu ? 'Контакты' : 'Contacts'}
      </BlockTitle>
      <Description>
        {isRu
          ? <>Хотите узнать больше? <br/> Свяжитесь со мной любым из понравившихся способов!</>
          : <>Want to know more? <br/> Contact me in any of the ways you like!</>
        }
      </Description>

      <form
        ref={formRef}
        className={styles.form}
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          type="text"
          name={'name'}
          className={styles.input}
          placeholder={isRu ? 'Имя' : 'Name'}
          required
        />
        <input
          type="text"
          name={'contact'}
          className={styles.input}
          placeholder={isRu ? 'Емаил или мессенджер' : 'Email or messenger'}
          required
        />
        <textarea
          name={'message'}
          className={styles.input}
          placeholder={isRu ? 'Сообщение' : 'Message'}
          rows={5}
          required
        />
        <button type="submit" className={styles.sendBtn}>
          {isRu ? 'Отправить сообщение' : 'Send Message'}
        </button>

        {(success || error) && (
          <div
            className={jc([styles.status, error && styles.status_error, success && styles.status_success])}
            onAnimationEnd={(e) => handleStatusAnimationEnd(e)}
          >
            <h3 className={styles.statusTitle}>
              {success && (
                isRu ? 'Спасибо!' : 'Thank you'
              )}
              {error && (
                isRu ? 'Извините!' : 'Sorry'
              )}
            </h3>
            <p className={styles.statusText}>
              {success && (
                isRu
                  ? 'Ваша заявка принята, скоро я с вами свяжусь!'
                  : 'Your application has been accepted, I will contact you soon!'
              )}
              {error && (
                isRu
                  ? 'Что то пошло не так, попобуйте презагрузить страницу и отправить сообщение еще раз'
                  : 'Something went wrong, try reloading the page and sending the message again'
              )}
            </p>
          </div>
        )}
      </form>
      <ul className={styles.socials}>
        {socials.map((item) => (
          <li key={item.name} className={styles.social}>
            <a href={item.link} className={styles.socialLink} target={'_blank'}>
              <svg className={styles.socialIcon}>
                <use xlinkHref={`./img/sprite.svg#${item.name}`}/>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Contacts;
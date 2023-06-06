import React from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import styles from "./style.m.scss";

interface ISocial {
  name: string;
  link: string;
}

const socials = [
  {name: 'tg', link: 'https://t.me/m9a0k'},
  {name: 'ws', link: 'https://wa.me/+79230387064'},
  {name: 'vk', link: 'https://vk.com/id389278152'},
  {name: 'gmail', link: 'mailto:twopapavers@gmail.com'},
  {name: 'phone', link: 'tel:+79230387064'},
];
const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <BlockTitle>
        Contacts
      </BlockTitle>
      <Description>
        Want to know more or just chat? <br/> You are welcome!
      </Description>
      <form action="" className={styles.form}>
        <input
          type="text"
          name={'name'}
          className={styles.input}
          placeholder={'Name'}
          required
        />
        <input
          type="text"
          name={'contact'}
          className={styles.input}
          placeholder={'Email or messenger'}
          required
        />
        <textarea
          name={'message'}
          className={styles.input}
          placeholder={'Message'}
          rows={5}
          required
        />
      </form>
      <button className={styles.sendBtn}>
        Send Message
      </button>
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
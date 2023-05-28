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
  {name: 'vk', link: 'https://vk.com/id389278152'},
  {name: 'tg', link: 'https://t.me/m9a0k'},
  {name: 'ws', link: 'https://wa.me/+79230387064'},
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
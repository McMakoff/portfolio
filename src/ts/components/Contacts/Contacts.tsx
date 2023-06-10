import React, {AnimationEventHandler, FormEvent, useRef, useState} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import jc from "./../../Helpers/joinClassnames";
import styles from "./style.m.scss";

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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isStatusVisible, setStatusVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
    <Wrapper id="contacts">
      <BlockTitle>
        Contacts
      </BlockTitle>
      <Description>
        Хотите узнать больше? <br/> Свяжитесь со мной любым из понравившихся способов!
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
        <button type="submit" className={styles.sendBtn}>
          Send Message
        </button>

        {(success || error) && (
          <div
            className={jc([styles.status, error && styles.status_error, success && styles.status_success])}
            onAnimationEnd={(e) => handleStatusAnimationEnd(e)}
          >
            <h3 className={styles.statusTitle}>
              {success && 'Спасибо!'}
              {error && 'Извините!'}
            </h3>
            <p className={styles.statusText}>
              {success && 'Ваша заявка принята, скоро я с вами свяжусь!'}
              {error && 'Что то пошло не так, попобуйте презагрузить страницу и отправить сообщение еще раз'}
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
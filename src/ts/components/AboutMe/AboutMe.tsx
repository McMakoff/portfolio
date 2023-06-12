import React, {useContext, useEffect, useRef} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import {PAGES} from "./../../Enums/PAGES";
import {PageContext} from "./../Page";
import {LANGS} from "./../../Enums/LANGS";

const AboutMe = () => {
  const {onScrollPage, lang} = useContext(PageContext);
  const baseRef = useRef<HTMLElement>(null);
  const isRu = lang === LANGS.RU;

  useEffect(() => {
    if (baseRef.current) {
      onScrollPage(baseRef.current, PAGES.ABOUT_ME);
    }
  }, []);

  return (
    <Wrapper
      ref={baseRef}
      id={PAGES.ABOUT_ME}
      theme='dark'
    >
      <BlockTitle>
        {isRu ? 'Обо мне' : 'About me'}

      </BlockTitle>
      <Description>
        {isRu
          ? <>Здравствуйте! Меня зовут Александр, и я веб-разработчик. <br/> Свой первый сайт, сделал в 2018 году, с тех пор не могу остановиться!</>
          : <>Hello! My name is Alexandr, and I am a web developer. <br/> I made my first website in 2018, since then I can’t stop!</>
        }
      </Description>
      <Description>
        {isRu
          ? <>Поработал как во фрилансе так и в крупной компании, <br/> на ресурсе занимающем 30е место в мире по посещаемости.</>
          : <>Worked both as a freelancer and in a large company, <br/> on a resource that occupies the 30th place in the world in terms of traffic.</>
        }
      </Description>
      <Description>
        {isRu
          ? <>Буду рад сотрудничеству и знакомству с интересными людьми!</>
          : <>I will be glad to cooperate and meet interesting people!</>
        }
      </Description>
    </Wrapper>
  );
};

export default AboutMe;
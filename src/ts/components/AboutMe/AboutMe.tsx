import React, {useContext, useEffect, useRef} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import {PAGES} from "./../../Enums/PAGES";
import {PageContext} from "./../Page";

const AboutMe = () => {
  const {onScrollPage} = useContext(PageContext);
  const baseRef = useRef<HTMLElement>(null);

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
        About me
      </BlockTitle>
      <Description>
        Здравствуйте! Меня зовут Александр, и я веб-разработчик. <br/> Свой первый сайт, сделал в 2018 году, с тех пор не могу остановиться!
      </Description>
      <Description>
        Поработал как во фрилансе так и в крупной компании, <br/> на ресурсе занимающем 30е место в мире по посещаемости.
      </Description>
      <Description>
        Буду рад сотрудничеству и знакомству с интересными людьми!
      </Description>
    </Wrapper>
  );
};

export default AboutMe;
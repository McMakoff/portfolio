import React from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
const AboutMe = () => {
  return (
    <Wrapper id="about" theme='dark'>
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
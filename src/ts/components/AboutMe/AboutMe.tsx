import React from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
const AboutMe = () => {
  return (
    <Wrapper id="#about" theme='dark'>
      <BlockTitle>
        About me
      </BlockTitle>
      <Description>
        Hi, I'm Denis – UX/UI designer from Minsk. <br/> I'm interested in design and everything connected with it.
      </Description>
      <Description>
        I'm studying at courses "Web and mobile design <br/> interfaces" in IT-Academy.
      </Description>
      <Description>
        Ready to implement excellent projects <br/> with wonderful people.
      </Description>
    </Wrapper>
  );
};

export default AboutMe;
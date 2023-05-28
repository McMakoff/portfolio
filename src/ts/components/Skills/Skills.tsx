import React from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import styles from "./style.m.scss";

interface ISkill {
  name: string,
  icon: string,
}

const skills: ISkill[] = [
  {name: 'HTML', icon: 'html'},
  {name: 'CSS', icon: 'css'},
  {name: 'SASS', icon: 'sass'},
  {name: 'JavaScript', icon: 'javascript'},
  {name: 'TypeScript', icon: 'typescript'},
  {name: 'React', icon: 'react'},
  {name: 'PHP', icon: 'php'},
  {name: 'MySql', icon: 'mysql'},
  {name: 'Git', icon: 'git'},
  {name: 'Webpack', icon: 'webpack'},
  {name: 'Figma', icon: 'figma'},
  {name: 'Adobe Photoshop', icon: 'photoshop'},
];
const Skills = () => {
  return (
    <Wrapper id="skills">
      <BlockTitle>
        Skills
      </BlockTitle>
      <Description>
        I work in such programs as
      </Description>
      <ul className={styles.skills}>
        {skills.map((item) => (
          <li className={styles.skill}>
            <svg className={styles.skillIcon}>
              <use xlinkHref={`./img/sprite.svg#${item.icon}`}/>
            </svg>
            <p className={styles.skillName}>
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Skills;
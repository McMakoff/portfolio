import React, {useContext, useEffect, useRef} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import styles from "./style.m.scss";
import {PAGES} from "./../../Enums/PAGES";
import {PageContext} from "./../Page";
import {LANGS} from "./../../Enums/LANGS";

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
  const {onScrollPage, lang} = useContext(PageContext);
  const baseRef = useRef<HTMLElement>(null);
  const isRu = lang === LANGS.RU;

  useEffect(() => {
    if (baseRef.current) {
      onScrollPage(baseRef.current, PAGES.SKILLS);
    }
  }, []);

  return (
    <Wrapper ref={baseRef} id={PAGES.SKILLS}>
      <BlockTitle>
        {isRu ? 'Навыки' : 'Skills'}
      </BlockTitle>
      <Description>
        {isRu ? 'Работаю с такими технологиями как' : 'I work with technologies such as'}
      </Description>
      <ul className={styles.skills}>
        {skills.map((item) => (
          <li key={item.name} className={styles.skill}>
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
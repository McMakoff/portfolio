import React from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import Description from "./../common/Description/Description";
import styles from "./style.m.scss";

interface IWork {
  name: string,
  preview: string,
}

const works: IWork[] = [
  {name: 'des-int', preview: 'html'},
  {name: 'par', preview: 'html'},
  {name: '5rooms', preview: 'html'},
  {name: 'avto', preview: 'html'},
  {name: 'ekran', preview: 'html'},
  {name: 'kazspecnaladka', preview: 'html'},
  {name: 'consul', preview: 'html'},
  {name: 'noemi', preview: 'html'},
];
const Portfolio = () => {
  return (
    <Wrapper id="portfolio" theme={'dark'}>
      <BlockTitle>
        Portfolio
      </BlockTitle>
      <ul className={styles.works}>
        {works.map((item) => (
          <li className={styles.work}>
            <a
              href={`https://mcmakoff.github.io/${item.name}`}
              className={styles.workPreview}
              target={'_blank'}
            >
              <img
                src={`./img/works/${item.name}.jpg`}
                srcSet={`./img/works/${item.name}@2x.jpg 1.5x`}
                alt={item.name} className={styles.workImg}
              />
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Portfolio;
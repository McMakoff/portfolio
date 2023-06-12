import React, {useContext, useEffect, useRef} from "react";
import Wrapper from "./../common/Wrapper/Wrapper";
import BlockTitle from "./../common/BlockTitle/BlockTitle";
import {PAGES} from "./../../Enums/PAGES";
import styles from "./style.m.scss";
import {PageContext} from "./../Page";

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
  const {onScrollPage} = useContext(PageContext);
  const baseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (baseRef.current) {
      onScrollPage(baseRef.current, PAGES.PORTFOLIO);
    }
  }, []);

  return (
    <Wrapper ref={baseRef} id={PAGES.PORTFOLIO} theme={'dark'}>
      <BlockTitle>
        Portfolio
      </BlockTitle>
      <ul className={styles.works}>
        {works.map((item) => (
          <li key={item.name} className={styles.work}>
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
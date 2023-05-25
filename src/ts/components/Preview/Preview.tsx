import Wrapper from "./../Wrapper/Wrapper";
import styles from "./style.m.scss";
import LangSwitch from "./../langSwitch/langSwitch";

const Preview = () => (
  <Wrapper className={styles.preview}>
    <div className={styles.previewTop}>
      <svg className={styles.name} viewBox="0 0 196 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3797 35L22.3915 29.0353H9.18381L7.19556 35H0.142018L11.7401 1.86254H19.8351L31.4806 35H24.3797ZM11.2667 22.9285H20.3559L15.8113 9.38948L11.2667 22.9285ZM34.4141 35V0.442364H40.5209V35H34.4141ZM51.2702 25.6742C52.0908 28.6408 54.3157 30.1241 57.9451 30.1241C60.2805 30.1241 62.0478 29.3351 63.2471 27.7571L68.1703 30.5975C65.8349 33.9743 62.395 35.6627 57.8504 35.6627C53.937 35.6627 50.7968 34.4793 48.4299 32.1123C46.0629 29.7453 44.8794 26.763 44.8794 23.1652C44.8794 19.599 46.0471 16.6324 48.3825 14.2654C50.7179 11.8669 53.7161 10.6676 57.377 10.6676C60.8485 10.6676 63.7047 11.8669 65.9454 14.2654C68.2177 16.6639 69.3538 19.6305 69.3538 23.1652C69.3538 23.9542 69.2749 24.7905 69.1171 25.6742H51.2702ZM51.1756 20.9402H63.2471C62.8999 19.3307 62.174 18.1315 61.0695 17.3425C59.9964 16.5535 58.7656 16.159 57.377 16.159C55.7359 16.159 54.3788 16.585 53.3058 17.4371C52.2328 18.2577 51.5227 19.4254 51.1756 20.9402ZM94.0997 35H87.0461L81.9335 27.8044L76.7735 35H69.72L78.383 22.9285L70.0987 11.3304H77.1522L81.9335 18.0052L86.7147 11.3304H93.7209L85.4366 22.8812L94.0997 35ZM113.472 11.3304H119.579V35H113.472V32.207C111.642 34.5108 109.07 35.6627 105.756 35.6627C102.6 35.6627 99.8861 34.4635 97.6139 32.065C95.3731 29.6349 94.2528 26.6683 94.2528 23.1652C94.2528 19.6621 95.3731 16.7113 97.6139 14.3128C99.8861 11.8827 102.6 10.6676 105.756 10.6676C109.07 10.6676 111.642 11.8196 113.472 14.1234V11.3304ZM102.206 27.9938C103.437 29.2246 104.999 29.84 106.892 29.84C108.786 29.84 110.348 29.2246 111.579 27.9938C112.841 26.7314 113.472 25.1219 113.472 23.1652C113.472 21.2085 112.841 19.6148 111.579 18.3839C110.348 17.1216 108.786 16.4904 106.892 16.4904C104.999 16.4904 103.437 17.1216 102.206 18.3839C100.975 19.6148 100.36 21.2085 100.36 23.1652C100.36 25.1219 100.975 26.7314 102.206 27.9938ZM138.277 10.6676C140.865 10.6676 142.995 11.5355 144.668 13.2713C146.372 15.0071 147.224 17.4056 147.224 20.4669V35H141.117V21.2243C141.117 19.6463 140.691 18.447 139.839 17.6265C138.987 16.7744 137.851 16.3483 136.431 16.3483C134.853 16.3483 133.591 16.8375 132.644 17.8159C131.697 18.7942 131.224 20.2617 131.224 22.2184V35H125.117V11.3304H131.224V13.9814C132.707 11.7722 135.058 10.6676 138.277 10.6676ZM170.38 1.86254H176.487V35H170.38V32.207C168.581 34.5108 166.025 35.6627 162.711 35.6627C159.524 35.6627 156.794 34.4635 154.522 32.065C152.281 29.6349 151.16 26.6683 151.16 23.1652C151.16 19.6621 152.281 16.7113 154.522 14.3128C156.794 11.8827 159.524 10.6676 162.711 10.6676C166.025 10.6676 168.581 11.8196 170.38 14.1234V1.86254ZM159.113 27.9938C160.376 29.2246 161.954 29.84 163.847 29.84C165.741 29.84 167.303 29.2246 168.534 27.9938C169.765 26.7314 170.38 25.1219 170.38 23.1652C170.38 21.2085 169.765 19.6148 168.534 18.3839C167.303 17.1216 165.741 16.4904 163.847 16.4904C161.954 16.4904 160.376 17.1216 159.113 18.3839C157.883 19.6148 157.267 21.2085 157.267 23.1652C157.267 25.1219 157.883 26.7314 159.113 27.9938ZM188.179 15.4016C188.747 13.8867 189.678 12.7506 190.972 11.9931C192.297 11.2357 193.765 10.857 195.374 10.857V17.6738C193.512 17.4529 191.839 17.8316 190.356 18.81C188.904 19.7883 188.179 21.4136 188.179 23.6859V35H182.072V11.3304H188.179V15.4016ZM22.2494 41.8625H28.7823V75H23.8116L9.60986 54.7388V75H3.07705V41.8625H8.04767L22.2494 62.0764V41.8625ZM52.6342 51.3304H58.741V75H52.6342V72.207C50.8037 74.5108 48.2316 75.6627 44.9179 75.6627C41.762 75.6627 39.0478 74.4635 36.7756 72.065C34.5348 69.6349 33.4145 66.6683 33.4145 63.1652C33.4145 59.6621 34.5348 56.7113 36.7756 54.3128C39.0478 51.8827 41.762 50.6676 44.9179 50.6676C48.2316 50.6676 50.8037 51.8196 52.6342 54.1234V51.3304ZM41.3675 67.9938C42.5983 69.2246 44.1605 69.84 46.054 69.84C47.9476 69.84 49.5098 69.2246 50.7406 67.9938C52.003 66.7314 52.6342 65.1219 52.6342 63.1652C52.6342 61.2085 52.003 59.6148 50.7406 58.3839C49.5098 57.1216 47.9476 56.4904 46.054 56.4904C44.1605 56.4904 42.5983 57.1216 41.3675 58.3839C40.1366 59.6148 39.5212 61.2085 39.5212 63.1652C39.5212 65.1219 40.1366 66.7314 41.3675 67.9938ZM77.8176 57.2005H72.4682V67.047C72.4682 67.8676 72.6734 68.4672 73.0836 68.8459C73.4939 69.2246 74.0935 69.4455 74.8825 69.5086C75.6715 69.5402 76.6499 69.5244 77.8176 69.4613V75C73.6201 75.4734 70.6535 75.0789 68.9178 73.8165C67.2136 72.5541 66.3615 70.2976 66.3615 67.047V57.2005H62.2429V51.3304H66.3615V46.5491L72.4682 44.7029V51.3304H77.8176V57.2005ZM101.55 72.065C99.12 74.4635 96.1534 75.6627 92.6503 75.6627C89.1472 75.6627 86.1806 74.4635 83.7505 72.065C81.352 69.6349 80.1527 66.6683 80.1527 63.1652C80.1527 59.6621 81.352 56.7113 83.7505 54.3128C86.1806 51.8827 89.1472 50.6676 92.6503 50.6676C96.1534 50.6676 99.12 51.8827 101.55 54.3128C103.98 56.7113 105.195 59.6621 105.195 63.1652C105.195 66.6683 103.98 69.6349 101.55 72.065ZM88.0584 67.8518C89.2892 69.0826 90.8198 69.698 92.6503 69.698C94.4807 69.698 96.0114 69.0826 97.2422 67.8518C98.473 66.621 99.0884 65.0588 99.0884 63.1652C99.0884 61.2716 98.473 59.7094 97.2422 58.4786C96.0114 57.2478 94.4807 56.6324 92.6503 56.6324C90.8198 56.6324 89.2892 57.2478 88.0584 58.4786C86.8591 59.7094 86.2595 61.2716 86.2595 63.1652C86.2595 65.0588 86.8591 66.621 88.0584 67.8518ZM120.758 75.6627C117.192 75.6627 114.209 74.4635 111.811 72.065C109.444 69.6664 108.26 66.6999 108.26 63.1652C108.26 59.6305 109.444 56.6639 111.811 54.2654C114.209 51.8669 117.192 50.6676 120.758 50.6676C123.062 50.6676 125.16 51.2199 127.054 52.3245C128.948 53.4291 130.384 54.9124 131.362 56.7744L126.107 59.8514C125.634 58.8731 124.908 58.0999 123.93 57.5318C122.983 56.9638 121.91 56.6797 120.711 56.6797C118.88 56.6797 117.365 57.2951 116.166 58.5259C114.967 59.7252 114.367 61.2716 114.367 63.1652C114.367 65.0272 114.967 66.5736 116.166 67.8044C117.365 69.0037 118.88 69.6033 120.711 69.6033C121.941 69.6033 123.03 69.3351 123.977 68.7986C124.955 68.2305 125.681 67.4573 126.155 66.4789L131.457 69.5086C130.415 71.3707 128.948 72.8697 127.054 74.0059C125.16 75.1105 123.062 75.6627 120.758 75.6627ZM147.847 50.6676C150.435 50.6676 152.565 51.5355 154.237 53.2713C155.942 55.0071 156.794 57.4056 156.794 60.4669V75H150.687V61.2243C150.687 59.6463 150.261 58.447 149.409 57.6265C148.557 56.7744 147.421 56.3483 146 56.3483C144.422 56.3483 143.16 56.8375 142.213 57.8159C141.267 58.7942 140.793 60.2617 140.793 62.2184V75H134.686V41.8625H140.793V53.9814C142.276 51.7722 144.628 50.6676 147.847 50.6676ZM165.038 48.49C164.028 48.49 163.144 48.1271 162.387 47.4012C161.661 46.6438 161.298 45.7601 161.298 44.7502C161.298 43.7403 161.661 42.8567 162.387 42.0992C163.144 41.3418 164.028 40.9631 165.038 40.9631C166.079 40.9631 166.963 41.3418 167.689 42.0992C168.446 42.8567 168.825 43.7403 168.825 44.7502C168.825 45.7601 168.446 46.6438 167.689 47.4012C166.963 48.1271 166.079 48.49 165.038 48.49ZM162.008 75V51.3304H168.115V75H162.008ZM189.137 51.3304H195.67L187.054 75C185.823 78.4084 184.182 80.8701 182.131 82.3849C180.111 83.9313 177.586 84.6256 174.556 84.4678V78.7871C176.197 78.8187 177.491 78.4715 178.438 77.7457C179.417 77.0198 180.19 75.8521 180.758 74.2426L171.053 51.3304H177.728L183.882 67.2364L189.137 51.3304Z" fill="currentColor"/>
      </svg>
      <p className={styles.text}>
        Web Developer<br/>
        32 years old, Barnaul
      </p>
      <LangSwitch className={styles.previewSwitch}/>
    </div>
    <img width="238" height="212"  src="./img/logo.png" alt="Logo" className={styles.logo}/>
  </Wrapper>
);

export default Preview
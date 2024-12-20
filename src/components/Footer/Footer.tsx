import styles from './Footer.module.scss';
import logo from '../../../public/assets/images/logo-light.webp';
import instagram from '../../../public/assets/svg/instagram.svg'
import twitter from '../../../public/assets/svg/twitter.svg'
import facebook from '../../../public/assets/svg/facebook.svg'
const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.footer__cont}>
        <div className={styles.footer__col}>
           <h3 className={styles.footer__col__title}>Castomer Service</h3>
           <div className={styles.footer__col__links}>
           <a href='#' className={styles.footer__col__link}>Contact Us</a>
           <a href='#' className={styles.footer__col__link}>Shipping & Returns</a>
           <a href='#' className={styles.footer__col__link}>FAQ</a>
           </div>
          
        </div>

        <div className={styles.footer__col}>
           <h3 className={styles.footer__col__title}>About URBAN ZEN</h3>
           <div className={styles.footer__col__links}>
           <a href='#' className={styles.footer__col__link}>About Us</a>
           <a href='#' className={styles.footer__col__link}>Privacy Policy</a>
           <a href='#' className={styles.footer__col__link}>Terms of Service</a>
           </div>
        </div>

        <div className={styles.footer__col}>
           <h3 className={styles.footer__col__title}>We Are Social</h3>
           <div className={styles.footer__col__linksSocial}>
           <a href='#' className={styles.footer__col__link}>
            <img src={instagram} alt="" />
           </a>
           <a href='#' className={styles.footer__col__link}>
            <img src={twitter} alt="" />
           </a>
           <a href='#' className={styles.footer__col__link}>
            <img src={facebook} alt="" />
           </a>
           </div>
        </div>

        <div className={styles.footer__col}>
           <div className={styles.footer__col__logo}>
            <img src={logo} alt="logo-light" />
           </div>
           <p className={styles.footer__col__cp}>Copyright © 2024</p>
        </div>
        </div>
  </footer>;
};

export default Footer;

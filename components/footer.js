import styles from "@/styles/Home.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.section1}>
        « la mission de livraze est d'encourager les jeunes de la ville de goma,
        les touristes ou les visiteurs qui y séjournent à découvrir les livres
        de manière organisée.» <br />
        <br />
        <br />
        <a href="apropos"> En savoir plus sur livraze →</a>
      </div>
      <div className={styles.section2}>
        lecture@livraze.com , +243 (0) 974 242 040 <br />
      </div>
    </div>
  );
};
export default Footer;

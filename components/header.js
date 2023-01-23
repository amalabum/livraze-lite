import styles from "@/styles/Home.module.css";
const Navbar = () => {
  return (
    <div className={styles.standard_header}>
      <div className={styles.logo_img}>
        <a href="/">
          <img src="/logo-livraze.png" alt="logo livraze" />
        </a>
      </div>
      <div className={styles.menu_principal}>
        <ul className="">
          <a href="/">
            <li className="">Acceuil</li>
          </a>
          <a href="apropos">
            <li className="">à propos</li>
          </a>

          <a href="#">
            <li className="">Soirée littéraire</li>
          </a>
          <a href="Collections">
            <li className="">Collections</li>
            {/* <ul className="">
              <li className="">Soirée littéraire</li>
              <li className="">Soirée littéraire</li>
            </ul> */}
          </a>
          <a href="concours">
            <li className="">Concours</li>
          </a>
          <a href="partenariat">
            <li className="">partenariat</li>
          </a>
        </ul>
      </div>
      <div className={styles.recherche_bar}>
        <img src="/search_ic.png" alt="barre de recherche" />
      </div>
    </div>
  );
};
export default Navbar;

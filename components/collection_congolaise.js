import styles from "@/styles/Home.module.css";

const Carte_pour_livre = (propos) => {
  return (
    <div className={styles.Carte_pour_livre}>
      <div className={styles.Carte_pour_livre_header}>
        <div className={styles.Carte_pour_livre_section1}>
          <img src={propos.auteur_img_src} alt={propos.auteur_alt} />
          {propos.nom_auteur}
        </div>
      </div>
      <div className={styles.Carte_pour_livre_containt}>
        <img src={propos.livre_img_src} alt={propos.livre_alt} />
      </div>
      <div className={styles.Carte_pour_livre_footer}>
        <a className={styles.Carte_pour_livre_interst}>la synthèse →</a>
      </div>
    </div>
  );
};

export default Carte_pour_livre;

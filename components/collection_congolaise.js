import styles from "@/styles/Home.module.css";

const Carte_pour_livre = (propos) => {
  return (
    <div className={styles.Carte_pour_livre}>
      <div className={styles.Carte_pour_livre_header}>
        <div className={styles.Carte_pour_livre_section1}>
          <img src={propos.auteur_img_src} alt={propos.auteur_alt} />
          Auteur : ELiezer K. mubalama
        </div>
      </div>
      <div className={styles.Carte_pour_livre_containt}>
        <img src={propos.livre_img_src} alt={propos.livre_alt} />
      </div>
      <div className={styles.Carte_pour_livre_footer}>
        {/* <img src={propos.auteur_img_src} alt={propos.auteur_alt} /> */}
        <a className={styles.Carte_pour_livre_interst}>la synthèse →</a>
      </div>

      {/* <img src="/top_5/1.png" alt="" />
      <a href="" className={styles.our_item_titre}>
        aBC DES DROITS DES TRAVAILLEUSES ET DE L'ÉGALITÉ ENTRE HOMMES ...
      </a> */}
    </div>
  );
};

export default Carte_pour_livre;

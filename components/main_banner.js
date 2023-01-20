import styles from "@/styles/Home.module.css";
const Main_banner = () => {
  return (
    <div className={styles.welcom_bloc}>
      <p>
        Accéder à toutes nos collections <br /> <br />
        <span className={styles.a_partir_de}>à partir de 4,6$/mois</span>
        <br />
        <button type="submit" className={styles.vers_Nos_prix}>
          Profiter de l'offre →
        </button>
      </p>
    </div>
  );
};
export default Main_banner;

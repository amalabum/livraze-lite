import styles from "@/styles/Home.module.css";
import Carousel from "react-bootstrap/Carousel";
const Main_banner = () => {
  return (
    <div className={styles.welcom_bloc}>
      <div className={styles.caroussel_n}>
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100" src="/1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/5.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/3.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
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

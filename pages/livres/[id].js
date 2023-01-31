import Head from "next/head";
import Image from "next/image";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import Carousel from "react-bootstrap/Carousel";
import Other_banner from "@/components/other_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carte_pour_livre from "@/components/collection_congolaise";
import Navbar from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });

export default function detai_livre({ livre, livres }) {
  console.log("livre.synthese s", livre);
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Other_banner
          title_n={livre.titre}
          subtitle={`Oeuvre de ${livre.auteur}`}
        />
        <div className="collections_list">
          <div className="section_une">
            <div className="livre_details">
              <div className="img_livre">
                <Image
                  src="/00.png"
                  className="image_c"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text_livre">
                <h6> </h6>
                {livre.synthese}
                <div className={styles.Carte_pour_livre_footer_n}>
                  <Link
                    href="../s-abonner"
                    className={styles.Carte_pour_livre_a}
                  >
                    Profiter de l'offre
                  </Link>
                  <Link
                    href={`https://wa.me/+243974242040?text=Bonjour livraze, je suis  interressé(s) par le livre :${livre.titre}, Est-il disponible pour une lecture? `}
                    className={styles.whatsapp}
                  >
                    <img src="/icons/ic_lov.png" alt="" />
                    <span> je veux lire ce livre </span>
                  </Link>
                  <a href="" className={styles.whatsapp}></a>
                </div>
              </div>
              {/* <Image
                    src="/00.png"
                    className="image_c"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  /> */}
              {/* <img
                    className="couverture_img"
                    src={`http://localhost/fg-livraze/Views/uploads-images/nos_livres/${item.couverture}`}
                    alt=""
                  /> */}

              <div className="titre_section mt-5">
                <h3>
                  {" "}
                  Collection <span> congolaise</span>{" "}
                </h3>
                Tous nos livres sont en dur...
              </div>

              {/* <Link href="collection-congolaise" className={styles.proposal_action}>
            Voir toutes nos collections →
          </Link> */}
              <br />
              <br />
            </div>
          </div>

          <div className="section_deux">
            <div className="carousel_collections">
              <Carousel variant="dark" indicators={false}>
                {livres?.livres?.map((item, index) => (
                  <Carousel.Item>
                    {/* <img
                      className="caroussels_img "
                      src={`http://localhost/fg-livraze/Views/uploads-images/nos_livres/${item.couverture}`}
                      alt="First slide"
                    /> */}
                    <Image
                      src="/00.png"
                      className="caroussels_img"
                      alt="Picture of the author"
                      width={180}
                      height={200}
                      priority
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="categories">
              <h3> Categories </h3>
              <ul>
                <li>Droit</li>
                <li> Economie</li>
                <li> Sociologie</li>
                <li> Technologie</li>
                <li> categorie 1</li>
                <li> categorie 1</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className={styles.collections_n}>
          <div className={styles.collections_n_section1}>
            <div className={styles.livre_n_details}>
              <div className={styles.livre_n_img_n}>
                <img
                  src={`http://localhost/fg-livraze/Views/uploads-images/nos_livres/${livre.couverture}`}
                  className={styles.livre_x_img}
                  alt=""
                />
              </div>
              <div className={styles.livre_n_containt}>
                <h2> </h2>
                <div className={styles.Carte_pour_livre_header}>
                  <div className={styles.Carte_pour_livre_section1}>
                    <img src="/icons/auteur_ic.png" alt="" />
                    Auteur : {livre.auteur}
                    <h4>#droit, #Sociologie </h4>
                  </div>
                </div>
                {livre.synthese}
                <br />
                <br />
              </div>
            </div>
            <div className={styles.Carte_pour_livre_footer_n}>
              <Link href="" className={styles.Carte_pour_livre_a}>
                Profiter de l'offre
              </Link>
              <a href="" className={styles.whatsapp}>
                <img src="/icons/ic_lov.png" alt="" />
                <span> je veux lire ce livre </span>
              </a>
              <a href="" className={styles.whatsapp}></a>
            </div>
          </div>
           <div className={styles.collections_n_section2}>
            <h4>Toutes les categories </h4>
            <ul href="" className={styles.liste_des_categorie}>
              <a>
                <li>
                  Droit
                  <span>(2)</span>
                </li>
              </a>
              <a>
                <li>
                  Economie
                  <span>(2)</span>
                </li>
              </a>
              <a>
                <li>
                  Socilogie
                  <span>(2)</span>
                </li>
              </a>
            </ul>
            <img src="/00.png" alt="" />
          </div>
        </div>
        <div className="call_to_action"></div>
        <div className={styles.default_div}>
       
        </div> */}
        <Footer />
        <Copyright />
      </main>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const router = params;
  const { id } = router;

  const res = await fetch(
    `http://bibliotheque-api.ritach.net/?key=98986Z_HCC8765&livre=${id}`
  );
  const resb = await fetch(
    "http://bibliotheque-api.ritach.net/?key=98986Z_HCC8765&datas=livres"
  );

  const livre = await res.json();
  const livres = await resb.json();
  console.log("livre  det", livre);

  return {
    props: {
      livre,
      livres,
    },
  };
};

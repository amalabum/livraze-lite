import Head from "next/head";
import Image from "next/image";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Other_banner from "@/components/other_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carte_pour_livre from "@/components/collection_congolaise";

const inter = Inter({ subsets: ["latin"] });

export default function partenariat() {
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
          title_n="JUSQU’AU COU : ENQUÊTE SUR LA DETTE DU TIERS MONDE"
          subtitle="Collections / congolaise"
          action="Profitez de l'offre"
        />
        <div className={styles.collections_n}>
          <div className={styles.collections_n_section1}>
            <div className={styles.livre_n_details}>
              <div className={styles.livre_n_img_n}>
                <img
                  src="/top_5/zigler.jpeg"
                  className={styles.livre_x_img}
                  alt=""
                />
              </div>
              <div className={styles.livre_n_containt}>
                <h2> </h2>
                <div className={styles.Carte_pour_livre_header}>
                  <div className={styles.Carte_pour_livre_section1}>
                    <img src="/icons/auteur_ic.png" alt="" />
                    Auteur : ELiezer K. mubalama
                    <h4>#droit, #Sociologie </h4>
                  </div>
                </div>
                Le jury procédera ensuite aux questions-réponses en partageant
                avec chaque groupe un chapitre du livre dont sera tiré le
                questionnaire. Tous les membres du groupe sont autorisés à
                participer à la séance de questions-réponses qui aura lieu dans
                les salons VIP 2 de l'agence de communication FIDBA GRAPHICS
                devant quelques invités et partenaires. NB : La présentation
                représente 40% des points du concours. Ces points sont répartis
                équitablement entre les membres de l'équipe. A ce niveau.
                l'étudiant qui n'aura pas lu le travail ou qui sera absent sans
                raison valable lors de la séance de questions-réponses sera
                automatiquement éliminé. A l'issue de cette session, la liste
                des candidats sélectionnés pour la deuxième phase d'élimination
                sera publiée sur les plateformes de communication de Livraze et
                de ses partenaires. Les points récoltés lors de la première
                phase d'élimination seront ajoutés à ceux de la deuxième phase
                d'élimination pour déterminer le % d’étudiants qui seront
                sectionnés. Seuls 25 élèves passeront à l'étape suivante du
                concours et la liste sera publiée après 24 heures de l'étape 3
                du concours.
                <br />
                <br />
              </div>
              {/* <div className={styles.Carte_pour_livre_footer_n}>
                  <a href="" className={styles.Carte_pour_livre_a}>
                    Details
                  </a>
                  <a href="" className={styles.whatsapp}>
                    <img src="/icons/ic_lov.png" alt="" />
                    <span> je veux lire ce livre </span>
                  </a>
                  <a href="" className={styles.whatsapp}></a>
                </div> 
              </div>*/}
            </div>
            <div className={styles.Carte_pour_livre_footer_n}>
              <a href="" className={styles.Carte_pour_livre_a}>
                Profiter de l'offre
              </a>
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
        <div className={styles.default_div_fo_libs_container}>
          <div className={styles.default_div_fo_libs}>
            <div className={styles.top_cinq_titre}>
              <h2> Voir aussi</h2>
              Tous nos nos livres sont en dur ...
            </div>
            <br />
            <Carte_pour_livre
              auteur_img_src="/icons/auteur_ic.png"
              livraze_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/00.png"
            />
          </div>
        </div>
        <Footer />
        <Copyright />
      </main>
    </>
  );
}

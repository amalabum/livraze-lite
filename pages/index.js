import Head from "next/head";
import Image from "next/image";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Main_banner from "@/components/main_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Item_top_5 from "@/components/compsants_standards";
import List_items from "@/components/List_items";
import Carte_pour_livre from "@/components/collection_congolaise";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.call_to_action_don_livre}>
          <div className={styles.proposal}>
            <h1> « Puis-je Exposer Mes livres à la bibliothèque ? » </h1> <br />
            <span className="response_quest">
              tout le plaisir est pour nous..
            </span>
            <br />
            <br />
            <br />
            <a href="" className={styles.proposal_action}>
              lancer le processus →
            </a>
          </div>
        </div>
        <Navbar></Navbar>
        <div className={styles.app_container}>
          <Main_banner></Main_banner>
          <div className={styles.top_cinq_titre}>
            <h2> La collection la plus consultée</h2>
            Tous nos nos livres sont en dur ...
          </div>
          <div className={styles.relative_bloc}>
            <div className={styles.top_cinq_img}>
              <img src="/hero2.jpg" alt="barre de recherche" />{" "}
            </div>
            <div className={styles.top_cinq_list}>
              <div className={styles.top_cinq_list_livre}>
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/top_5/5.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/top_5/2.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/top_5/3.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/top_5/3.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.call_to_action}>
            <a href=""> Voir toutes nos collections →</a>
          </div>
        </div>
        <div className={styles.our_collection}>
          <div className={styles.default_div_fo_libs}>
            <div className={styles.section_title}>
              <h2> La collection la plus consultée</h2>
              Un livre, une inspiration ...
            </div>
            <br />
            <Carte_pour_livre
              auteur_img_src="/hero2.jpg"
              livraze_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/top_5/1.png"
            />
            <Carte_pour_livre
              auteur_img_src="/cover.png"
              auteur_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/top_5/2.png"
            />
            <Carte_pour_livre
              auteur_img_src="/cover.png"
              auteur_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/top_5/4.png"
            />
            <Carte_pour_livre
              auteur_img_src="/cover.png"
              auteur_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/top_5/5.png"
            />
            <Carte_pour_livre
              auteur_img_src="/cover.png"
              auteur_alt="livre d'un putin d'auteur congolais"
              livre_img_src="/top_5/5.png"
            />
          </div>
          <a href="" className={styles.proposal_action}>
            Voir toutes nos collections →
          </a>
          <br />
          <br />
        </div>
        <Footer> </Footer>
        <Copyright> </Copyright>
      </main>
    </>
  );
}

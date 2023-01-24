import Head from "next/head";
import Image from "next/image";
import Nav_bar from "../components/navbar";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Main_banner from "@/components/main_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Item_top_5 from "@/components/compsants_standards";
import List_items from "@/components/List_items";
import { useState, useEffect } from "react";
import Carte_pour_livre from "@/components/collection_congolaise";
import { post } from "jquery";

export default function Home({ livres }) {
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <Nav_bar />

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

        <div className={styles.app_container}>
          <Main_banner></Main_banner>
          <div className={styles.top_cinq_titre}>
            <h2> La collection la plus consultée</h2>
            Tous nos livres sont en dur ...
          </div>
          <div className={styles.relative_bloc}>
            <div className={styles.top_cinq_img}>
              <img src="/hero2.jpg" alt="barre de recherche" />{" "}
            </div>
            <div className={styles.top_cinq_list}>
              <div className={styles.top_cinq_list_livre}>
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
                />
                <Carte_pour_livre
                  auteur_img_src="/cover.png"
                  nom_auteur="nom de l'auteur"
                  auteur_alt="livre d'un putin d'auteur congolais"
                  livre_img_src="/00.png"
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
            {Object.entries(livres).map((x) => console.log(x))}
            <Carte_pour_livre
              auteur_img_src="/cover.png"
              // nom_auteur={x.titre}
              livre_img_src="/00.png"
            />
            ;
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

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost/fidbagraphicsApi-v1-0/?key=98986Z_HCC8765&datas=livres"
  );

  const livres = await res.json();

  return {
    props: {
      livres,
    },
  };
};

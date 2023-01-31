import Head from "next/head";
import Image from "next/image";
// import Nav_bar from "../components/navbar";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Nav_bar from "../components/header";
import Homebaner from "@/components/home-baner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Item_top_5 from "@/components/compsants_standards";
import List_items from "@/components/List_items";
import { useState, useEffect } from "react";
import Carte_pour_livre from "@/components/collection_congolaise";
import { post } from "jquery";
import Link from "next/link";
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
        <div className="call_to_action_don_livre">
          <div className={styles.proposal}>
            <h1> « Puis-je Exposer Mes livres à la bibliothèque ? » </h1> <br />
            <span className="response_quest">
              tout le plaisir est pour nous..
            </span>
            <br />
            <br />
            <br />
            <a href="/collection-congolaise" className={styles.proposal_action}>
              lancer le processus →
            </a>
          </div>
        </div>

        <div className={styles.app_container}>
          <Homebaner />
          <div className="top_cinq_titre">
            <h3>
              {" "}
              5 livres à <span> la une</span>{" "}
            </h3>
            Tous nos livres sont en dur...
          </div>
          <div className={styles.relative_bloc}>
            <div className="cards_container">
              {livres?.livres?.slice(0, 5)?.map((item, index) => (
                <Carte_pour_livre
                  key={index}
                  nom_auteur={item.auteur}
                  auteur_img_src="/icons/ecrivain.png"
                  titre_l={item.titre.substr(0, 19)}
                  // livre_img_src="/top_5/zigler.jpeg"
                  livre_img_src={`http://bibliotheque-api.ritach.net/covers/${item.couverture}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.call_to_action}>
            <Link href="collection-congolaise">
              <span className="action_on_link">
                Voir toutes les collections →
              </span>
            </Link>
          </div>

          <div className="intro_soiree_container">
            <div className="section_img"></div>
            <div className="section_text">
              <div className="DATE">
                <div className="jour">
                  18
                  <div className="mois">janvier</div>{" "}
                </div>{" "}
              </div>
              <h2>
                Soirée <span className="text_coloric">Littéraire</span>
                <span className="dot">.</span>
              </h2>
              <h5>
                Sous le Thème <b>Safari !</b>
              </h5>
              Afin de promouvoir la littérature locale et nationale, Livraze
              s'est donné pour mission d'organiser des cercles littéraires
              autour des livres des auteurs congolais de la diaspora ou vivant
              au pays. Les soirées de Livraze sont festives et elles réunissent
              des auteurs nationaux devant un public d'étudiants,
              d'entrepreneurs, d'avocats, de médecins, d'enseignants, de
              commerçants... <br />
              <div className="call_to_action">
                <Link href="">
                  <span className="action_on_link">
                    Participer à la soirée →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="team d-none">
          <div className="titre">Team</div>
          <div className="member_cards">
            <div className="member">
              <img className="member_img" src="/team/a.jpg" />

              <div className="team_medias">
                <Link href="https://twitter.com/livrazee">
                  <img
                    className="ic_img"
                    src="/icons/facebook-circular-logo.png"
                    alt=""
                  />
                </Link>

                <Link href="https://twitter.com/livrazee">
                  <img className="ic_img" src="/icons/twitter.png" alt="" />
                </Link>

                <Link href="https://twitter.com/livrazee">
                  <img className="ic_img" src="/icons/instagram.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="member">
              <img className="member_img" src="/team/2.jpg" />
            </div>
            <div className="member">
              <img className="member_img" src="/team/3.jpg" />
            </div>
          </div>
        </div> */}
        <div className={styles.our_collection}>
          <div className="titre_section mt-5">
            <h3>
              {" "}
              Collection <span> congolaise</span>{" "}
            </h3>
            Tous nos livres sont en dur...
          </div>
          <div className="cards_container">
            {livres?.livres?.slice(3, 9)?.map((item, index) => (
              <Carte_pour_livre
                key={index}
                nom_auteur={item.auteur}
                auteur_img_src="/icons/ecrivain.png"
                titre_l={item.titre.substr(0, 19)}
                // livre_img_src="/top_5/zigler.jpeg"
                livre_img_src={`http://bibliotheque-api.ritach.net/covers/${item.couverture}`}
              />
            ))}
          </div>
          <div className={styles.call_to_action}>
            <Link href="collection-congolaise">
              <span className="action_on_link">
                Voir toutes les collections →
              </span>
            </Link>
          </div>
          {/* <Link href="collection-congolaise" className={styles.proposal_action}>
            Voir toutes nos collections →
          </Link> */}
          <br />
          <br />
        </div>
        <Footer> </Footer>
        <Copyright> </Copyright>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://bibliotheque-api.ritach.net/?key=98986Z_HCC8765&datas=livres"
  );

  const livres = await res.json();
  // console.log("livres all", livres);

  return {
    props: {
      livres,
    },
  };
};

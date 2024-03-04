import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Burger from "./Burger";

export default function Home() {
  // on initialise l'état qui va servir à stocker le dernier burger séléctionné
  const [lastBurgers, setLastBurgers] = useState([]);

  //on va créé la fonction qui va permettre de renvoyer le nom du burger versle composant parent

  // ici on utilise le spread opérator [...] pour faire une copie de l'état actuel et d'ajouter un élément sans écraser la dernière valeur.
  const selectedBurger = (name) => {
    setLastBurgers([...lastBurgers, name]);
  };

  const removeBurger = (name) => {
    setLastBurgers(lastBurgers.filter((el) => el !== name));
  };
  const burgersData = [
    { name: "Big Mac", image: "1.png", descritpion: "du texte" },
    { name: "De Luxe", image: "2.png", descritpion: "encore du texte" },
    { name: "Mac Baguette", image: "3.png", descritpion: " Du Méga Texte" },
  ];

  const burgers = burgersData.map((el, i) => {
    return (
      <Burger
        name={el.name}
        image={el.image}
        descritpion={el.descritpion}
        selectedBurger={selectedBurger}
        removeBurger={removeBurger}
        key={i}
      />
    );
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>burger shop</h1>
        <span>Derniers hamburgers sélectionnés : </span>| {lastBurgers} |
        <hr />
        {burgers}
      </div>
    </>
  );
}

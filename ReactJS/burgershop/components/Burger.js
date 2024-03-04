import React, { useState } from "react";
import styles from "../styles/Burger.module.css";

function Burger(props) {
  const [nbLike, setNbLike] = useState(0);

  const handleClick = () => {
    setNbLike(nbLike + 1);
  };

  const handleSelect = () => {
    props.selectedBurger(props.name);
  };

  const handleRemove = () => {
    props.removeBurger(props.name);
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={props.image} />
      </div>
      <div className={styles.BurgerName}>
        <h2>{props.name}</h2>
      </div>
      <button onClick={() => handleClick()}>Like</button>
      <p>{nbLike}</p>
      <div className={styles.burgDesc}>
        <p>{props.descritpion}</p>
      </div>
      <button onClick={() => handleSelect()}>Select</button>
      <button onClick={() => handleRemove()}>X</button>
    </div>
  );
}

export default Burger;

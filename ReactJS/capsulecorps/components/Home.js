import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {

 
  let [maval, setmaval] = useState(0);
  const handleAjout = () =>{
      setmaval(maval + 1);
  }

  const handleSoustr = () =>{
    if ( maval -1 < 0 ){
      maval = 0;
    }
    else{

      setmaval(maval - 1);
    };
  };

  const handleZero = () =>{
          setmaval(0);
    };

  
  return ( 
  <>
  <h1 className={styles.titre}>Projet Capsule : Calcul avant et arriere</h1>

  <div className={styles.container}>
    <div className={styles.ajout}>
  <label>Appuyez pour incrémenter </label>
  <button type='button' className={styles.button} onClick={() => handleAjout()}>Incrémenter</button>
    </div>
    <div className={styles.laValeur}>
        {maval}<button type='reset' className={styles.button} onClick={() => handleZero()}>Mettre à zero</button>
    </div>
    <div className={styles.suppr}>
  <button  type='button' className={styles.button} onClick={() => handleSoustr()}>Décrémenter</button>
  <label value='soustraire'>Appuyez pour décrémenter</label>

    </div>
  </div>
  
  
  </>
  );
};

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import DogCard from '../../components/DogCard';
import * as styles from "../../styles/alldogs.module.css"
import Layout from '../../components/Layout';

export default function Shop() {

    const [dogs, setDogs] = useState();
  

    useEffect(() => {
       axios.get("https://api.thedogapi.com/v1/breeds")
       .then(result => setDogs(result.data))  
      }, []);


    return (
        <Layout>
        <div>
            <h1>Her kommer alle hundene</h1>
        </div>
        <div className={styles.grid}>
        {dogs && dogs.map(breeds => (
            <DogCard 
            key={breeds.id}
            image={breeds.image}
            name={breeds.name}
            temperament={breeds.temperament}
            breed_group={breeds.breed_group}
            origin={breeds.origin}
            life_span={breeds.life_span}
            id={breeds.id}
            />
            ) 
        )
     } 
  </div>
     </Layout>
    )
}

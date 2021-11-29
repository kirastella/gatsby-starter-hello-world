import React from 'react'
import * as styles from "../styles/dogcard.module.css"

export default function DogCard({name, life_span, origin, image, breed_group, temperament}) {
    return (
       <div className={styles.doggrid}>
           <img src={image.url} alt={name} />
           <h3>{name}</h3>
           <p>Breed Group: {breed_group}</p>
           <p>Peronality: {temperament}</p>
           <p>Life span: {life_span}</p>
           <p>Origin: {origin}</p>
       </div>
    )
}